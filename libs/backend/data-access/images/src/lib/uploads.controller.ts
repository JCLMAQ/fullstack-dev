import { Public } from '@be/iam';
import jwtConfig from '@be/jwtconfig';
import { Controller, ForbiddenException, Get, Headers, Inject, NotFoundException, Param, Req, Res, UnauthorizedException } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { REQUEST } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import type { Request } from 'express';
import { existsSync } from 'fs';
import { join } from 'path';
import { ImagesService } from './images.service';

@Controller('uploads')
export class UploadsController {
  constructor(
    private readonly imagesService: ImagesService,
    private readonly jwtService: JwtService,
    @Inject(jwtConfig.KEY)
    private readonly jwtConfiguration: ConfigType<typeof jwtConfig>,
  ) {}

  @Public()
  @Get('images/:year/:month/:filename')
  async serveUploadedFile(
    @Param('year') year: string,
    @Param('month') month: string,
    @Param('filename') filename: string,
    @Res() res: { sendFile: (path: string) => void },
    @Req() request: Request,
    @Headers('authorization') authHeader?: string
  ): Promise<void> {
    const filePath = join(process.cwd(), 'uploads', 'images', year, month, filename);

    if (!existsSync(filePath)) {
      throw new NotFoundException('Fichier non trouvé');
    }

    // Extraire le token depuis query params si présent
    const queryToken = (request.query as { token?: string }).token;

    // Vérifier la visibilité de l'image en base de données
    await this.checkImageVisibility(filename, authHeader, queryToken, request);

    res.sendFile(filePath);
  }

  @Public()
  @Get('images/:filename')
  async serveDirectFile(
    @Param('filename') filename: string,
    @Res() res: { sendFile: (path: string) => void },
    @Req() request: Request,
    @Headers('authorization') authHeader?: string
  ): Promise<void> {
    // Extraire le token depuis query params si présent
    const queryToken = (request.query as { token?: string }).token;

    // Vérifier la visibilité de l'image en base de données
    await this.checkImageVisibility(filename, authHeader, queryToken, request);

    // Recherche dans tous les répertoires année/mois
    const searchPaths = [
      // Année/mois courants
      join(process.cwd(), 'uploads', 'images', String(new Date().getFullYear()), String(new Date().getMonth() + 1).padStart(2, '0')),
      // Répertoire racine uploads/images (legacy)
      join(process.cwd(), 'uploads', 'images')
    ];

    for (const searchPath of searchPaths) {
      const filePath = join(searchPath, filename);
      if (existsSync(filePath)) {
        return res.sendFile(filePath);
      }
    }

    throw new NotFoundException('Fichier non trouvé');
  }

  /**
   * Vérifie si l'image peut être servie en fonction de sa visibilité
   * et de l'authentification de l'utilisateur
   */
  private async checkImageVisibility(
    filename: string,
    authHeader?: string,
    queryToken?: string,
    request?: Request
  ): Promise<void> {
    try {
      // Rechercher l'image en base de données par son nom de fichier
      const image = await this.imagesService.findImageByFilename(filename);

      if (!image) {
        // Si l'image n'existe pas en BDD, on refuse l'accès par sécurité
        throw new NotFoundException('Image non trouvée');
      }

      // Si l'image est publique, autoriser l'accès
      if (image.isPublic) {
        return;
      }

      // Si l'image est privée, vérifier l'authentification via plusieurs méthodes
      // Méthode 1: Vérifier le header Authorization
      const hasAuthHeader = authHeader && authHeader.startsWith('Bearer ');

      // Méthode 2: Vérifier le token dans les query params (pour les balises <img>)
      const hasQueryToken = !!queryToken;

      // Méthode 3: Vérifier les cookies pour le token
      const cookieToken = request?.cookies?.['accessToken'] || request?.cookies?.['token'];

      // Méthode 4: Vérifier si l'utilisateur est dans la requête (injecté par le guard)
      const user = request ? (request as Request & { user?: { id: string } }).user : undefined;

      // Valider le token si présent dans les query params
      if (hasQueryToken && queryToken) {
        try {
          await this.jwtService.verifyAsync(queryToken, this.jwtConfiguration);
          console.log(`✅ Image privée ${filename} accessible via token query param valide`);
          return;
        } catch (error) {
          console.log(`⚠️ Token query param invalide pour l'image ${filename}:`, error);
          // Continue avec les autres méthodes d'authentification
        }
      }

      const isAuthenticated = hasAuthHeader || !!cookieToken || !!user;

      if (!isAuthenticated) {
        console.log(`⚠️ Accès refusé à l'image privée ${filename} - Pas d'authentification`);
        throw new UnauthorizedException('Vous devez être connecté pour accéder à cette image privée');
      }

      // L'utilisateur est authentifié, autoriser l'accès
      console.log(`✅ Image privée ${filename} accessible par utilisateur authentifié`);
    } catch (error) {
      // Si c'est déjà une exception HTTP, la relancer
      if (error instanceof NotFoundException || error instanceof ForbiddenException || error instanceof UnauthorizedException) {
        throw error;
      }
      // Pour toute autre erreur (connexion BDD, etc.), logger et continuer
      console.error('Erreur lors de la vérification de visibilité de l\'image:', error);
      // Ne pas bloquer l'accès en cas d'erreur technique
    }
  }
}
