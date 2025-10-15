import { FilesService } from '@be/files';
import { File } from '@db/prisma';
import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { StorageFile } from '../interfaces/storage.interfaces';
import { FileStorageService } from './file-storage.service';

export interface FileUploadDto {
  buffer: Buffer;
  originalName: string;
  mimeType: string;
  size: number;
  encoding?: string;

  // Métadonnées métier
  ownerId: string;
  uploaderId?: string;
  orgId?: string;
  postId?: string;
  storyId?: string;
  commentId?: string;
  profileUserId?: string;

  // Options de stockage
  category?: string;
  tags?: string[];
  isPublic?: boolean;
  expiresAt?: Date;
}

@Injectable()
export class EnhancedFilesService {
  private readonly logger = new Logger(EnhancedFilesService.name);

  constructor(
    private readonly fileStorageService: FileStorageService,
    private readonly filesService: FilesService
  ) {}

  /**
   * Upload et stockage d'un fichier avec le système dual
   */
  async uploadFile(uploadDto: FileUploadDto): Promise<File> {
    try {
      // Validation des données
      this.validateUpload(uploadDto);

      // Génération d'un ID unique pour le fichier
      const fileId = randomUUID();

      // Conversion vers le format StorageFile
      const storageFile: StorageFile = {
        buffer: uploadDto.buffer,
        originalName: uploadDto.originalName,
        mimeType: uploadDto.mimeType,
        size: uploadDto.size,
        encoding: uploadDto.encoding
      };

      this.logger.debug(`Uploading file ${uploadDto.originalName} (${uploadDto.size} bytes) with ID ${fileId}`);

      // Stockage physique du fichier
      const storageResult = await this.fileStorageService.store(storageFile, fileId);

      if (!storageResult.success) {
        throw new BadRequestException(`File storage failed: ${storageResult.error}`);
      }

      // Préparation des données pour la base de données
      const storageType = this.fileStorageService.getProviderType();

      // Création de l'enregistrement en base de données
      const file = await this.filesService.create({
        filename: `${fileId}_${uploadDto.originalName}`,
        originalName: uploadDto.originalName,
        mimeType: uploadDto.mimeType,
        fileSize: uploadDto.size,
        storageProvider: storageType,
        path: storageResult.path,
        url: storageResult.url,
        category: uploadDto.category,
        tags: uploadDto.tags || [],
        isPublic: uploadDto.isPublic ?? true,
        expiresAt: uploadDto.expiresAt,

        // Relations
        ownerId: uploadDto.ownerId,
        uploaderId: uploadDto.uploaderId,
        orgId: uploadDto.orgId || uploadDto.ownerId, // Utilisation de l'ownerId comme fallback
        postId: uploadDto.postId,
        storyId: uploadDto.storyId,
        commentId: uploadDto.commentId,
        profileUserId: uploadDto.profileUserId
      });

      this.logger.log(`Successfully uploaded file ${uploadDto.originalName} with ID ${fileId}`);

      return file;

    } catch (error) {
      this.logger.error(`Failed to upload file ${uploadDto.originalName}:`, error);
      throw error;
    }
  }

  /**
   * Récupération du contenu binaire d'un fichier
   */
  async downloadFile(fileId: string): Promise<{
    buffer: Buffer;
    filename: string;
    mimeType: string;
    size: number;
  }> {
    try {
      // Récupération des métadonnées depuis la base de données
      const file = await this.filesService.findByIdOrThrow(fileId);

      // Extraction de l'ID de stockage depuis les métadonnées
      const storageFileId = this.extractStorageFileId(file);

      this.logger.debug(`Downloading file ${file.filename} with storage ID ${storageFileId}`);

      // Récupération du contenu binaire
      const retrievalResult = await this.fileStorageService.retrieve(storageFileId);

      if (!retrievalResult.success || !retrievalResult.buffer) {
        throw new BadRequestException(`File retrieval failed: ${retrievalResult.error}`);
      }

      // Incrémenter le compteur de téléchargements
      await this.filesService.incrementDownloadCount(fileId);

      return {
        buffer: retrievalResult.buffer,
        filename: file.originalName,
        mimeType: file.mimeType,
        size: file.fileSize
      };

    } catch (error) {
      this.logger.error(`Failed to download file ${fileId}:`, error);
      throw error;
    }
  }

  /**
   * Suppression d'un fichier (soft delete + nettoyage physique)
   */
  async deleteFile(fileId: string): Promise<void> {
    try {
      // Récupération du fichier
      const file = await this.filesService.findByIdOrThrow(fileId);

      // Extraction de l'ID de stockage
      const storageFileId = this.extractStorageFileId(file);

      this.logger.debug(`Deleting file ${file.filename} with storage ID ${storageFileId}`);

      // Suppression logique en base de données
      await this.filesService.softDelete(fileId);

      // Suppression physique du fichier
      const deletionResult = await this.fileStorageService.delete(storageFileId);

      if (!deletionResult.success) {
        this.logger.warn(`Physical file deletion failed for ${storageFileId}: ${deletionResult.error}`);
        // Note: On continue car la suppression logique a réussi
      }

      this.logger.log(`Successfully deleted file ${file.filename}`);

    } catch (error) {
      this.logger.error(`Failed to delete file ${fileId}:`, error);
      throw error;
    }
  }

  /**
   * Vérification de l'existence d'un fichier
   */
  async fileExists(fileId: string): Promise<boolean> {
    try {
      const file = await this.filesService.findById(fileId);
      if (!file) return false;

      const storageFileId = this.extractStorageFileId(file);
      return await this.fileStorageService.exists(storageFileId);

    } catch (error) {
      this.logger.error(`Error checking file existence for ${fileId}:`, error);
      return false;
    }
  }

  /**
   * Récupération des statistiques de stockage
   */
  async getStorageStats(): Promise<{
    database: Record<string, unknown>;
    storage: Record<string, unknown>;
    combined: {
      totalFiles: number;
      totalSize: number;
      storageType: string;
    };
  }> {
    try {
      const [dbStats, storageStats] = await Promise.all([
        this.filesService.getFileStats(),
        this.fileStorageService.getStats()
      ]);

      return {
        database: dbStats,
        storage: storageStats,
        combined: {
          totalFiles: dbStats.totalFiles,
          totalSize: dbStats.totalSize,
          storageType: this.fileStorageService.getProviderType()
        }
      };

    } catch (error) {
      this.logger.error('Error getting storage stats:', error);
      throw error;
    }
  }

  /**
   * Migration des fichiers entre systèmes de stockage
   */
  async migrateFileStorage(fileId: string, targetStorage: 'database' | 'filesystem'): Promise<void> {
    try {
      const file = await this.filesService.findByIdOrThrow(fileId);
      const storageFileId = this.extractStorageFileId(file);

      this.logger.log(`Migrating file ${file.filename} to ${targetStorage} storage`);

      // Récupération du contenu actuel
      const retrievalResult = await this.fileStorageService.retrieve(storageFileId);
      if (!retrievalResult.success || !retrievalResult.buffer) {
        throw new BadRequestException(`Cannot retrieve file for migration: ${retrievalResult.error}`);
      }

      // Basculement temporaire vers le système cible
      const currentStorage = this.fileStorageService.getProviderType();
      if (currentStorage !== targetStorage) {
        this.fileStorageService.switchProvider(targetStorage === 'database');

        // Stockage dans le nouveau système
        const storageFile: StorageFile = {
          buffer: retrievalResult.buffer,
          originalName: file.originalName,
          mimeType: file.mimeType,
          size: file.fileSize
        };

        const newStorageResult = await this.fileStorageService.store(storageFile, storageFileId);
        if (!newStorageResult.success) {
          // Restauration du système original
          this.fileStorageService.switchProvider(currentStorage === 'database');
          throw new BadRequestException(`Migration failed: ${newStorageResult.error}`);
        }

        // Suppression de l'ancien stockage
        this.fileStorageService.switchProvider(currentStorage === 'database');
        await this.fileStorageService.delete(storageFileId);

        // Mise à jour définitive vers le nouveau système
        this.fileStorageService.switchProvider(targetStorage === 'database');

        // Mise à jour du type de stockage
        await this.filesService.updateStorageInfo(
          fileId,
          targetStorage,
          undefined,
          newStorageResult.path,
          newStorageResult.url
        );

        this.logger.log(`Successfully migrated file ${file.filename} to ${targetStorage}`);
      }

    } catch (error) {
      this.logger.error(`Migration failed for file ${fileId}:`, error);
      throw error;
    }
  }

  /**
   * Nettoyage des fichiers orphelins
   */
  async cleanupOrphanedFiles(): Promise<{ cleanedCount: number; errors: string[] }> {
    try {
      this.logger.log('Starting orphaned files cleanup');

      const cleanupResult = await this.fileStorageService.cleanup();

      return {
        cleanedCount: cleanupResult.success ? 1 : 0,
        errors: cleanupResult.success ? [] : [cleanupResult.error || 'Unknown cleanup error']
      };

    } catch (error) {
      this.logger.error('Cleanup failed:', error);
      return {
        cleanedCount: 0,
        errors: [error instanceof Error ? error.message : 'Unknown error']
      };
    }
  }

  /**
   * Validation des données d'upload
   */
  private validateUpload(uploadDto: FileUploadDto): void {
    if (!uploadDto.buffer || uploadDto.buffer.length === 0) {
      throw new BadRequestException('File buffer is empty');
    }

    if (!uploadDto.originalName) {
      throw new BadRequestException('Original filename is required');
    }

    if (!uploadDto.mimeType) {
      throw new BadRequestException('MIME type is required');
    }

    if (uploadDto.size <= 0) {
      throw new BadRequestException('File size must be greater than 0');
    }

    if (!uploadDto.ownerId) {
      throw new BadRequestException('Owner ID is required');
    }
  }

  /**
   * Extraction de l'ID de stockage depuis les propriétés du fichier
   */
  private extractStorageFileId(file: File): string {
    // Utilisation du storageName si disponible, sinon l'ID de la base
    return file.storageName || file.id;
  }
}
