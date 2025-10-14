import { File, Prisma } from '@db/prisma';
import { PrismaClientService } from '@db/prisma-client';
import { BadRequestException, ConflictException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';

export interface FileMetadata {
  [key: string]: string | number | boolean | null;
}

export interface FileCreateDto {
  filename: string;
  originalName: string;
  mimeType: string;
  fileSize: number;
  path?: string;
  url?: string;
  storageProvider?: string;
  bucket?: string;
  thumbnailUrl?: string;
  previewUrl?: string;
  downloadUrl?: string;
  metadata?: FileMetadata;
  tags?: string[];
  category?: string;
  isPublic?: boolean;
  expiresAt?: Date;

  // Relations
  ownerId: string;
  uploaderId?: string;
  orgId?: string;
  postId?: string;
  storyId?: string;
  commentId?: string;
  profileUserId?: string;
}

export interface FileUpdateDto {
  filename?: string;
  mimeType?: string;
  isPublic?: boolean;
  processingStatus?: string;
  virusStatus?: string;
  metadata?: FileMetadata;
  tags?: string[];
  category?: string;
  expiresAt?: Date;
  ocrText?: string;
  downloadCount?: number;
}

export interface FileSearchOptions {
  filename?: string;
  mimeType?: string;
  category?: string;
  tags?: string[];
  storageProvider?: string;
  processingStatus?: string;
  virusStatus?: string;
  ownerId?: string;
  orgId?: string;
  isPublic?: boolean;
  minSize?: number;
  maxSize?: number;
  createdAfter?: Date;
  createdBefore?: Date;
  expiresAfter?: Date;
  expiresBefore?: Date;
}

@Injectable()
export class FilesService {
  constructor(private readonly prisma: PrismaClientService) {}

  // Create operations
  async create(data: FileCreateDto): Promise<File> {
    try {
      return await this.prisma.file.create({
        data: {
          filename: data.filename,
          originalName: data.originalName,
          mimeType: data.mimeType,
          fileSize: data.fileSize,
          path: data.path,
          url: data.url,
          storageProvider: data.storageProvider || 'local',
          bucket: data.bucket,
          thumbnailUrl: data.thumbnailUrl,
          previewUrl: data.previewUrl,
          downloadUrl: data.downloadUrl,
          metadata: data.metadata,
          tags: data.tags || [],
          category: data.category,
          isPublic: data.isPublic ?? true,
          expiresAt: data.expiresAt,

          // Relations
          owner: { connect: { id: data.ownerId } },
          ...(data.uploaderId && { uploader: { connect: { id: data.uploaderId } } }),
          ...(data.orgId && { org: { connect: { id: data.orgId } } }),
          ...(data.postId && { post: { connect: { id: data.postId } } }),
          ...(data.storyId && { story: { connect: { id: data.storyId } } }),
          ...(data.commentId && { comment: { connect: { id: data.commentId } } }),
          ...(data.profileUserId && { profileUser: { connect: { id: data.profileUserId } } }),
        },
        include: {
          owner: { select: { id: true, fullname: true, email: true } },
          uploader: { select: { id: true, fullname: true, email: true } },
          org: { select: { id: true, name: true } },
          post: { select: { id: true, title: true } },
          story: { select: { id: true, caption: true } },
          comment: { select: { id: true, content: true } },
          profileUser: { select: { id: true, fullname: true } },
        },
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ConflictException('File with this name already exists');
        }
        if (error.code === 'P2003') {
          throw new BadRequestException('Referenced entity does not exist');
        }
      }
      throw new InternalServerErrorException('Failed to create file');
    }
  }

  async createBulk(files: FileCreateDto[]): Promise<File[]> {
    const results: File[] = [];

    for (const fileData of files) {
      try {
        const file = await this.create(fileData);
        results.push(file);
      } catch (error) {
        // Log error but continue with other files
        console.error(`Failed to create file ${fileData.filename}:`, error);
      }
    }

    return results;
  }

  // Read operations
  async findById(id: string): Promise<File | null> {
    return await this.prisma.file.findUnique({
      where: { id },
      include: {
        owner: { select: { id: true, fullname: true, email: true } },
        uploader: { select: { id: true, fullname: true, email: true } },
        org: { select: { id: true, name: true } },
        post: { select: { id: true, title: true } },
        story: { select: { id: true, caption: true } },
        comment: { select: { id: true, content: true } },
        profileUser: { select: { id: true, fullname: true } },
      },
    });
  }

  async findByIdOrThrow(id: string): Promise<File> {
    const file = await this.findById(id);
    if (!file) {
      throw new NotFoundException(`File with ID ${id} not found`);
    }
    return file;
  }

  async findAll(
    skip = 0,
    take = 10,
    orderBy: Prisma.FileOrderByWithRelationInput = { createdAt: 'desc' }
  ): Promise<File[]> {
    return await this.prisma.file.findMany({
      skip,
      take,
      orderBy,
      where: { isDeleted: 0 },
      include: {
        owner: { select: { id: true, fullname: true, email: true } },
        uploader: { select: { id: true, fullname: true, email: true } },
        org: { select: { id: true, name: true } },
      },
    });
  }

  async search(
    options: FileSearchOptions,
    skip = 0,
    take = 10,
    orderBy: Prisma.FileOrderByWithRelationInput = { createdAt: 'desc' }
  ): Promise<File[]> {
    const where: Prisma.FileWhereInput = {
      isDeleted: 0,
      ...(options.filename && { filename: { contains: options.filename, mode: 'insensitive' } }),
      ...(options.mimeType && { mimeType: { contains: options.mimeType } }),
      ...(options.category && { category: options.category }),
      ...(options.tags && options.tags.length > 0 && { tags: { hasSome: options.tags } }),
      ...(options.storageProvider && { storageProvider: options.storageProvider }),
      ...(options.processingStatus && { processingStatus: options.processingStatus }),
      ...(options.virusStatus && { virusStatus: options.virusStatus }),
      ...(options.ownerId && { ownerId: options.ownerId }),
      ...(options.orgId && { orgId: options.orgId }),
      ...(options.isPublic !== undefined && { isPublic: options.isPublic }),
      ...(options.minSize && { fileSize: { gte: options.minSize } }),
      ...(options.maxSize && { fileSize: { lte: options.maxSize } }),
      ...(options.createdAfter && { createdAt: { gte: options.createdAfter } }),
      ...(options.createdBefore && { createdAt: { lte: options.createdBefore } }),
      ...(options.expiresAfter && { expiresAt: { gte: options.expiresAfter } }),
      ...(options.expiresBefore && { expiresAt: { lte: options.expiresBefore } }),
    };

    return await this.prisma.file.findMany({
      where,
      skip,
      take,
      orderBy,
      include: {
        owner: { select: { id: true, fullname: true, email: true } },
        uploader: { select: { id: true, fullname: true, email: true } },
        org: { select: { id: true, name: true } },
      },
    });
  }

  async searchWithOCR(
    searchText: string,
    skip = 0,
    take = 10
  ): Promise<File[]> {
    return await this.prisma.file.findMany({
      where: {
        isDeleted: 0,
        OR: [
          { filename: { contains: searchText, mode: 'insensitive' } },
          { originalName: { contains: searchText, mode: 'insensitive' } },
          { ocrText: { contains: searchText, mode: 'insensitive' } },
          { tags: { hasSome: [searchText] } },
        ],
      },
      skip,
      take,
      orderBy: { createdAt: 'desc' },
      include: {
        owner: { select: { id: true, fullname: true, email: true } },
        org: { select: { id: true, name: true } },
      },
    });
  }

  // Update operations
  async update(id: string, data: FileUpdateDto): Promise<File> {
    await this.findByIdOrThrow(id);

    try {
      const updateData: Prisma.FileUpdateInput = {};

      if (data.filename !== undefined) updateData.filename = data.filename;
      if (data.mimeType !== undefined) updateData.mimeType = data.mimeType;
      if (data.isPublic !== undefined) updateData.isPublic = data.isPublic;
      if (data.processingStatus !== undefined) updateData.processingStatus = data.processingStatus;
      if (data.virusStatus !== undefined) updateData.virusStatus = data.virusStatus;
      if (data.metadata !== undefined) updateData.metadata = data.metadata;
      if (data.tags !== undefined) updateData.tags = data.tags;
      if (data.category !== undefined) updateData.category = data.category;
      if (data.expiresAt !== undefined) updateData.expiresAt = data.expiresAt;
      if (data.ocrText !== undefined) updateData.ocrText = data.ocrText;
      if (data.downloadCount !== undefined) updateData.downloadCount = data.downloadCount;

      return await this.prisma.file.update({
        where: { id },
        data: updateData,
        include: {
          owner: { select: { id: true, fullname: true, email: true } },
          uploader: { select: { id: true, fullname: true, email: true } },
          org: { select: { id: true, name: true } },
        },
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ConflictException('File with this name already exists');
        }
      }
      throw new InternalServerErrorException('Failed to update file');
    }
  }

  async incrementDownloadCount(id: string): Promise<File> {
    return await this.prisma.file.update({
      where: { id },
      data: { downloadCount: { increment: 1 } },
      include: {
        owner: { select: { id: true, fullname: true, email: true } },
      },
    });
  }

  async updateProcessingStatus(id: string, status: string, metadata?: FileMetadata): Promise<File> {
    return await this.update(id, {
      processingStatus: status,
      ...(metadata && { metadata })
    });
  }

  async updateVirusStatus(id: string, status: string): Promise<File> {
    return await this.update(id, { virusStatus: status });
  }

  async addOCRText(id: string, ocrText: string): Promise<File> {
    return await this.update(id, { ocrText });
  }

  // Delete operations
  async softDelete(id: string): Promise<File> {
    await this.findByIdOrThrow(id);

    return await this.prisma.file.update({
      where: { id },
      data: {
        isDeleted: 1,
        isDeletedDT: new Date(),
      },
    });
  }

  async restore(id: string): Promise<File> {
    return await this.prisma.file.update({
      where: { id },
      data: {
        isDeleted: 0,
        isDeletedDT: null,
      },
      include: {
        owner: { select: { id: true, fullname: true, email: true } },
      },
    });
  }

  async hardDelete(id: string): Promise<void> {
    await this.findByIdOrThrow(id);

    await this.prisma.file.delete({
      where: { id },
    });
  }

  // Association operations
  async findByOwner(
    ownerId: string,
    skip = 0,
    take = 10
  ): Promise<File[]> {
    return await this.prisma.file.findMany({
      where: { ownerId, isDeleted: 0 },
      skip,
      take,
      orderBy: { createdAt: 'desc' },
      include: {
        owner: { select: { id: true, fullname: true, email: true } },
      },
    });
  }

  async findByOrganization(
    orgId: string,
    skip = 0,
    take = 10
  ): Promise<File[]> {
    return await this.prisma.file.findMany({
      where: { orgId, isDeleted: 0 },
      skip,
      take,
      orderBy: { createdAt: 'desc' },
      include: {
        owner: { select: { id: true, fullname: true, email: true } },
        org: { select: { id: true, name: true } },
      },
    });
  }

  async findByPost(postId: string): Promise<File[]> {
    return await this.prisma.file.findMany({
      where: { postId, isDeleted: 0 },
      orderBy: { createdAt: 'desc' },
      include: {
        owner: { select: { id: true, fullname: true, email: true } },
      },
    });
  }

  async findByStory(storyId: string): Promise<File[]> {
    return await this.prisma.file.findMany({
      where: { storyId, isDeleted: 0 },
      orderBy: { createdAt: 'desc' },
      include: {
        owner: { select: { id: true, fullname: true, email: true } },
      },
    });
  }

  async findByComment(commentId: string): Promise<File[]> {
    return await this.prisma.file.findMany({
      where: { commentId, isDeleted: 0 },
      orderBy: { createdAt: 'desc' },
      include: {
        owner: { select: { id: true, fullname: true, email: true } },
      },
    });
  }

  async findProfileFiles(userId: string): Promise<File[]> {
    return await this.prisma.file.findMany({
      where: { profileUserId: userId, isDeleted: 0 },
      orderBy: { createdAt: 'desc' },
      include: {
        owner: { select: { id: true, fullname: true, email: true } },
      },
    });
  }

  // Analytics and stats
  async getFileStats(): Promise<{
    totalFiles: number;
    totalSize: number;
    averageSize: number;
    filesByType: { mimeType: string; count: number }[];
    processingStats: { status: string; count: number }[];
  }> {
    const [totalFiles, sizeStats, filesByType, processingStats] = await Promise.all([
      this.prisma.file.count({ where: { isDeleted: 0 } }),

      this.prisma.file.aggregate({
        where: { isDeleted: 0 },
        _sum: { fileSize: true },
        _avg: { fileSize: true },
      }),

      this.prisma.file.groupBy({
        by: ['mimeType'],
        where: { isDeleted: 0 },
        _count: { id: true },
        orderBy: { _count: { id: 'desc' } },
      }),

      this.prisma.file.groupBy({
        by: ['processingStatus'],
        where: { isDeleted: 0 },
        _count: { id: true },
      }),
    ]);

    return {
      totalFiles,
      totalSize: sizeStats._sum.fileSize || 0,
      averageSize: sizeStats._avg.fileSize || 0,
      filesByType: filesByType.map(item => ({
        mimeType: item.mimeType,
        count: item._count.id,
      })),
      processingStats: processingStats.map(item => ({
        status: item.processingStatus || 'unknown',
        count: item._count.id,
      })),
    };
  }

  async getUserFileStats(userId: string): Promise<{
    totalFiles: number;
    totalSize: number;
    filesByCategory: { category: string; count: number }[];
  }> {
    const [totalFiles, sizeStats, filesByCategory] = await Promise.all([
      this.prisma.file.count({
        where: { ownerId: userId, isDeleted: 0 }
      }),

      this.prisma.file.aggregate({
        where: { ownerId: userId, isDeleted: 0 },
        _sum: { fileSize: true },
      }),

      this.prisma.file.groupBy({
        by: ['category'],
        where: { ownerId: userId, isDeleted: 0 },
        _count: { id: true },
      }),
    ]);

    return {
      totalFiles,
      totalSize: sizeStats._sum.fileSize || 0,
      filesByCategory: filesByCategory.map(item => ({
        category: item.category || 'uncategorized',
        count: item._count.id,
      })),
    };
  }

  async getExpiredFiles(): Promise<File[]> {
    return await this.prisma.file.findMany({
      where: {
        isDeleted: 0,
        expiresAt: { lte: new Date() },
      },
      include: {
        owner: { select: { id: true, fullname: true, email: true } },
      },
    });
  }

  async cleanupExpiredFiles(): Promise<number> {
    const expiredFiles = await this.getExpiredFiles();

    for (const file of expiredFiles) {
      await this.softDelete(file.id);
    }

    return expiredFiles.length;
  }

  // Bulk operations
  async bulkUpdateCategory(fileIds: string[], category: string): Promise<number> {
    const result = await this.prisma.file.updateMany({
      where: { id: { in: fileIds }, isDeleted: 0 },
      data: { category },
    });

    return result.count;
  }

  async bulkUpdateTags(fileIds: string[], tags: string[]): Promise<number> {
    const result = await this.prisma.file.updateMany({
      where: { id: { in: fileIds }, isDeleted: 0 },
      data: { tags },
    });

    return result.count;
  }

  async bulkSoftDelete(fileIds: string[]): Promise<number> {
    const result = await this.prisma.file.updateMany({
      where: { id: { in: fileIds }, isDeleted: 0 },
      data: {
        isDeleted: 1,
        isDeletedDT: new Date(),
      },
    });

    return result.count;
  }

  async bulkRestore(fileIds: string[]): Promise<number> {
    const result = await this.prisma.file.updateMany({
      where: { id: { in: fileIds }, isDeleted: 1 },
      data: {
        isDeleted: 0,
        isDeletedDT: null,
      },
    });

    return result.count;
  }

  // Storage management
  async findByStorageProvider(provider: string): Promise<File[]> {
    return await this.prisma.file.findMany({
      where: { storageProvider: provider, isDeleted: 0 },
      orderBy: { createdAt: 'desc' },
    });
  }

  async updateStorageInfo(
    id: string,
    storageProvider: string,
    bucket?: string,
    path?: string,
    url?: string
  ): Promise<File> {
    return await this.prisma.file.update({
      where: { id },
      data: {
        storageProvider,
        bucket,
        path,
        url,
      },
    });
  }
}
