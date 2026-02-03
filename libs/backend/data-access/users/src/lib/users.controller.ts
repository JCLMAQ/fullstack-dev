import * as Prisma from '@db/prisma';
import { Address, Organization, User, UserWithBasicRelations, UserWithRelations } from '@db/prisma';
import {
    Body,
    Controller,
    Delete,
    Get,
    HttpException,
    HttpStatus,
    Logger,
    Param,
    Post,
    Put,
    Query
} from '@nestjs/common';
import { UsersService } from './users.service';

/* Important : Ordre des routes pour éviter les conflits
@Get('alluserswlinks')        // ✅ Route spécifique en PREMIER
@Get('email/:email')           // ✅ Route spécifique
@Get(':id/organizations')      // ✅ Route semi-spécifique
@Get(':id/posts')              // ✅ Route semi-spécifique
@Get(':id')                    // ⚠️ Route dynamique en DERNIER
*/
@Controller('users')
export class UsersController {
  private readonly logger = new Logger(UsersController.name);

  constructor(private usersService: UsersService) {}

  /**
   * Récupère tous les utilisateurs avec pagination et filtres optionnels
   */
  @Get()
  async getUsers(
    @Query('skip') skip?: string,
    @Query('take') take?: string,
    @Query('search') search?: string,
    @Query('orderBy') orderBy?: string,
    @Query('sortOrder') sortOrder?: 'asc' | 'desc'
  ): Promise<UserWithBasicRelations[]> {
    try {
      const options: {
        skip?: number;
        take?: number;
        where?: Prisma.UserWhereInput;
        orderBy?: Prisma.UserOrderByWithRelationInput;
      } = {};

      // Pagination
      if (skip) options.skip = parseInt(skip);
      if (take) options.take = parseInt(take);

      // Filtrage par recherche
      if (search) {
        options.where = {
          OR: [
            { email: { contains: search, mode: 'insensitive' } },
            { firstName: { contains: search, mode: 'insensitive' } },
            { lastName: { contains: search, mode: 'insensitive' } },
            { nickName: { contains: search, mode: 'insensitive' } }
          ]
        };
      }

      // Tri
      if (orderBy) {
        const order = sortOrder || 'asc';
        switch (orderBy) {
          case 'email':
            options.orderBy = { email: order };
            break;
          case 'firstName':
            options.orderBy = { firstName: order };
            break;
          case 'lastName':
            options.orderBy = { lastName: order };
            break;
          case 'createdAt':
            options.orderBy = { createdAt: order };
            break;
          default:
            options.orderBy = { createdAt: 'desc' };
        }
      } else {
        options.orderBy = { createdAt: 'desc' };
      }

      return await this.usersService.users(options);
    } catch {
      throw new HttpException(
        'Erreur lors de la récupération des utilisateurs',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

 // ⚠️ IMPORTANT: Routes spécifiques AVANT les routes dynamiques

  /**
   * Récupère tous les utilisateurs avec leurs relations
   */
  @Get('alluserswlinks')
  async getAllUsersWithAllLinks(): Promise<UserWithRelations[] | []> {
    try {
      console.log('[UsersController] Entrée dans alluserswlinks');
      const users: UserWithRelations[] = await this.usersService.getAllUsersWithAllLinks();
      if (!users || users.length === 0) {
        console.warn('[UsersController] Aucun utilisateur trouvé');
        return [];
      }
      console.log(`[UsersController] Utilisateurs trouvés: ${users.length}`);
      users.slice(0, 10).forEach((u, i) => {
        console.log(`[UsersController] User[${i}]: id=${u.id}, email=${u.email}`);
      });
      return users;
    } catch (error) {
      console.error('[UsersController] Erreur:', error);
      throw error;
    }
  }

  @Get('useremailalllinks/:email')
  async getOneUserWithAllLinks(@Param('email') email: string): Promise<UserWithRelations | null> {
    return await this.usersService.getOneUserByUniqueWithAllLinks({ email: String(email) });
  }

  /**
   * Récupère un utilisateur par son email
   */
  @Get('email/:email')
  async getUserByEmail(@Param('email') email: string): Promise<User> {
    try {
      const user = await this.usersService.user({ email });

      if (!user) {
        throw new HttpException(
          'Utilisateur non trouvé',
          HttpStatus.NOT_FOUND
        );
      }

      return user;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'Erreur lors de la récupération de l\'utilisateur',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

/*
*. Récupère les adresses liées à un utilisateur par id
*/
  @Get(':id/addresses')
async getUserAddresses(@Param('id') id: string): Promise<Address[]> {
  return this.usersService.getUserAddresses(id);
}

    /**
   * Récupère les organisations liées à un utilisateur par id ou email
   */
  @Get(':id/organizations')
  async getUserOrganizationsById(@Param('id') id: string): Promise<Organization[]> {
    try {
      if (!id) {
        throw new HttpException('L\'id utilisateur est requis', HttpStatus.BAD_REQUEST);
      }
      return await this.usersService.getUserOrganizations({ id });
    } catch (error) {
      if (error instanceof HttpException) throw error;
      throw new HttpException(
        'Erreur lors de la récupération des organisations',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  /**
   * Récupère les posts d'un utilisateur
   */
  @Get(':id/posts')
  async getUserPosts(@Param('id') id: string) {
    try {
      const user = await this.usersService.user({ id });
      if (!user) {
        throw new HttpException(
          'Utilisateur non trouvé',
          HttpStatus.NOT_FOUND
        );
      }

      // Note: Cette fonctionnalité nécessiterait une modification du service
      // pour inclure les relations posts ou un service posts séparé
      throw new HttpException(
        'Fonctionnalité non implémentée - nécessite l\'intégration avec le service posts',
        HttpStatus.NOT_IMPLEMENTED
      );
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'Erreur lors de la récupération des posts de l\'utilisateur',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  /**
   * Récupère les followers d'un utilisateur
   */
  @Get(':id/followers')
  async getUserFollowers(@Param('id') id: string) {
    try {
      const user = await this.usersService.user({ id });
      if (!user) {
        throw new HttpException(
          'Utilisateur non trouvé',
          HttpStatus.NOT_FOUND
        );
      }

      // Note: Cette fonctionnalité nécessiterait une modification du service
      // pour inclure les relations followers
      throw new HttpException(
        'Fonctionnalité non implémentée - nécessite l\'extension du service pour inclure les followers',
        HttpStatus.NOT_IMPLEMENTED
      );
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'Erreur lors de la récupération des followers',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  /**
   * Récupère les utilisateurs suivis par un utilisateur
   */
  @Get(':id/following')
  async getUserFollowing(@Param('id') id: string) {
    try {
      const user = await this.usersService.user({ id });
      if (!user) {
        throw new HttpException(
          'Utilisateur non trouvé',
          HttpStatus.NOT_FOUND
        );
      }

      // Note: Cette fonctionnalité nécessiterait une modification du service
      // pour inclure les relations following
      throw new HttpException(
        'Fonctionnalité non implémentée - nécessite l\'extension du service pour inclure les following',
        HttpStatus.NOT_IMPLEMENTED
      );
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'Erreur lors de la récupération des utilisateurs suivis',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

    /**
   * Récupère un utilisateur par son ID
   * ⚠️ Cette route doit être APRÈS toutes les routes spécifiques
   */
  /**
   * Récupère un utilisateur par son ID
   */
  @Get(':id')
  async getUser(@Param('id') id: string): Promise<User> {
    try {
      const user = await this.usersService.user({ id });

      if (!user) {
        throw new HttpException(
          'Utilisateur non trouvé',
          HttpStatus.NOT_FOUND
        );
      }

      return user;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'Erreur lors de la récupération de l\'utilisateur',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }


  /**
   * Crée un nouvel utilisateur
   */
  @Post()
  async createUser(@Body() userData: Prisma.UserCreateInput): Promise<User> {
    try {
      // Validation de base
      if (!userData.email) {
        throw new HttpException(
          'L\'email est requis',
          HttpStatus.BAD_REQUEST
        );
      }

      // Vérifier si l'utilisateur existe déjà
      const existingUser = await this.usersService.user({ email: userData.email });
      if (existingUser) {
        throw new HttpException(
          'Un utilisateur avec cet email existe déjà',
          HttpStatus.CONFLICT
        );
      }

      return await this.usersService.createUser(userData);
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'Erreur lors de la création de l\'utilisateur',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  /**
   * Met à jour un utilisateur
   */
  @Put(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() userData: Prisma.UserUpdateInput
  ): Promise<User> {
    try {
      const sanitizedData = this.sanitizeUserUpdate(userData);
      this.logger.log(`Update user payload: ${JSON.stringify({ id, data: sanitizedData })}`);

      // Vérifier que l'utilisateur existe
      const existingUser = await this.usersService.user({ id });
      if (!existingUser) {
        throw new HttpException(
          'Utilisateur non trouvé',
          HttpStatus.NOT_FOUND
        );
      }

      // Si l'email est modifié, vérifier qu'il n'existe pas déjà
      if (sanitizedData.email && sanitizedData.email !== existingUser.email) {
        const userWithEmail = await this.usersService.user({
          email: sanitizedData.email as string
        });
        if (userWithEmail) {
          throw new HttpException(
            'Un utilisateur avec cet email existe déjà',
            HttpStatus.CONFLICT
          );
        }
      }

      const updatedUser = await this.usersService.updateUser({
        where: { id },
        data: sanitizedData
      });
      this.logger.log(`Update user result: ${JSON.stringify({ id, firstName: updatedUser.firstName, lastName: updatedUser.lastName })}`);
      return updatedUser;
    } catch (error) {
      this.logger.error('Update user failed', error instanceof Error ? error.stack : String(error));
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'Erreur lors de la mise à jour de l\'utilisateur',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  private sanitizeUserUpdate(userData: Prisma.UserUpdateInput): Prisma.UserUpdateInput {
    const allowedKeys = new Set<string>([
      'email',
      'lastName',
      'firstName',
      'title',
      'nickName',
      'Gender',
      'social',
      'photoUrl',
      'dateOfBirth',
      'hasEmergencyContact',
      'emergencyContactName',
      'emergencyContactPhone',
      'position',
      'preference',
      'jobTitle',
      'published',
      'isPublic',
      'isDeleted',
      'isDeletedDT',
      'isValidated',
      'isSuspended',
      'isTfaEnable',
      'tfaSecret',
      'passWordFaker',
      'groupId',
      'managerId',
      'Language',
    ]);

    const input = userData as Record<string, unknown>;
    const cleaned: Record<string, unknown> = {};

    for (const [key, value] of Object.entries(input)) {
      if (allowedKeys.has(key)) {
        cleaned[key] = value;
      }
    }

    const language = input['Language'];
    if (language && typeof language === 'object') {
      const langId = (language as { id?: number }).id;
      if (typeof langId === 'number') {
        cleaned['Language'] = { connect: { id: langId } };
      }
    }

    const languageId = input['languageId'];
    if (typeof languageId === 'number') {
      cleaned['Language'] = { connect: { id: languageId } };
    }

    const emergencyContact = input['emergencyContact'];
    if (emergencyContact && typeof emergencyContact === 'object') {
      const contact = emergencyContact as {
        hasEmergencyContact?: boolean;
        emergencyContactName?: string;
        emergencyContactPhone?: string;
      };
      if (typeof contact.hasEmergencyContact === 'boolean') {
        cleaned['hasEmergencyContact'] = contact.hasEmergencyContact;
      }
      if (typeof contact.emergencyContactName === 'string') {
        cleaned['emergencyContactName'] = contact.emergencyContactName;
      }
      if (typeof contact.emergencyContactPhone === 'string') {
        cleaned['emergencyContactPhone'] = contact.emergencyContactPhone;
      }
    }

    return cleaned as Prisma.UserUpdateInput;
  }

  /**
   * Supprime un utilisateur
   */
  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<User> {
    try {
      // Vérifier que l'utilisateur existe
      const existingUser = await this.usersService.user({ id });
      if (!existingUser) {
        throw new HttpException(
          'Utilisateur non trouvé',
          HttpStatus.NOT_FOUND
        );
      }

      return await this.usersService.deleteUser({ id });
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'Erreur lors de la suppression de l\'utilisateur',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }



}
