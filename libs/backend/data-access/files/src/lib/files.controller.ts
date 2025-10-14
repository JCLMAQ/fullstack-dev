import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Patch,
  Body,
  Param,
  Query,
  NotFoundException,
  BadRequestException,
  ValidationPipe,
  ParseIntPipe,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { FilesService, FileCreateDto, FileUpdateDto, FileSearchOptions } from './files.service';
import { File } from '@db/prisma';

// DTOs for validation
export class CreateFileDto implements FileCreateDto {
  filename!: string;
  originalName!: string;
  mimeType!: string;
  fileSize!: number;
  path?: string;
  url?: string;
  storageProvider?: string;
  bucket?: string;
  thumbnailUrl?: string;
  previewUrl?: string;
  downloadUrl?: string;
  metadata?: Record<string, unknown>;
  tags?: string[];
  category?: string;
  isPublic?: boolean;
  expiresAt?: Date;

  // Relations
  ownerId!: string;
  uploaderId?: string;
  orgId?: string;
  postId?: string;
  storyId?: string;
  commentId?: string;
  profileUserId?: string;
}

export class UpdateFileDto implements FileUpdateDto {
  filename?: string;
  mimeType?: string;
  isPublic?: boolean;
  processingStatus?: string;
  virusStatus?: string;
  metadata?: Record<string, unknown>;
  tags?: string[];
  category?: string;
  expiresAt?: Date;
  ocrText?: string;
  downloadCount?: number;
}

export class FileSearchDto implements FileSearchOptions {
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

export class BulkFileActionDto {
  fileIds!: string[];
}

export class BulkUpdateCategoryDto extends BulkFileActionDto {
  category!: string;
}

export class BulkUpdateTagsDto extends BulkFileActionDto {
  tags!: string[];
}

@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  // Create operations
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body(ValidationPipe) createFileDto: CreateFileDto): Promise<File> {
    return await this.filesService.create(createFileDto);
  }

  @Post('bulk')
  @HttpCode(HttpStatus.CREATED)
  async createBulk(@Body(ValidationPipe) createFilesDto: CreateFileDto[]): Promise<File[]> {
    if (!Array.isArray(createFilesDto)) {
      throw new BadRequestException('Request body must be an array of files');
    }
    return await this.filesService.createBulk(createFilesDto);
  }

  // Read operations
  @Get()
  async findAll(
    @Query('skip', new ParseIntPipe({ optional: true })) skip = 0,
    @Query('take', new ParseIntPipe({ optional: true })) take = 10,
    @Query('orderBy') orderBy = 'createdAt',
    @Query('order') order: 'asc' | 'desc' = 'desc'
  ): Promise<File[]> {
    const orderByClause = { [orderBy]: order };
    return await this.filesService.findAll(skip, take, orderByClause);
  }

  @Get('search')
  async search(
    @Query(ValidationPipe) searchDto: FileSearchDto,
    @Query('skip', new ParseIntPipe({ optional: true })) skip = 0,
    @Query('take', new ParseIntPipe({ optional: true })) take = 10,
    @Query('orderBy') orderBy = 'createdAt',
    @Query('order') order: 'asc' | 'desc' = 'desc'
  ): Promise<File[]> {
    const orderByClause = { [orderBy]: order };
    return await this.filesService.search(searchDto, skip, take, orderByClause);
  }

  @Get('search/ocr')
  async searchWithOCR(
    @Query('text') searchText: string,
    @Query('skip', new ParseIntPipe({ optional: true })) skip = 0,
    @Query('take', new ParseIntPipe({ optional: true })) take = 10
  ): Promise<File[]> {
    if (!searchText) {
      throw new BadRequestException('Search text is required');
    }
    return await this.filesService.searchWithOCR(searchText, skip, take);
  }

  @Get('stats')
  async getFileStats() {
    return await this.filesService.getFileStats();
  }

  @Get('stats/user/:userId')
  async getUserFileStats(@Param('userId') userId: string) {
    return await this.filesService.getUserFileStats(userId);
  }

  @Get('expired')
  async getExpiredFiles(): Promise<File[]> {
    return await this.filesService.getExpiredFiles();
  }

  @Get('owner/:ownerId')
  async findByOwner(
    @Param('ownerId') ownerId: string,
    @Query('skip', new ParseIntPipe({ optional: true })) skip = 0,
    @Query('take', new ParseIntPipe({ optional: true })) take = 10
  ): Promise<File[]> {
    return await this.filesService.findByOwner(ownerId, skip, take);
  }

  @Get('organization/:orgId')
  async findByOrganization(
    @Param('orgId') orgId: string,
    @Query('skip', new ParseIntPipe({ optional: true })) skip = 0,
    @Query('take', new ParseIntPipe({ optional: true })) take = 10
  ): Promise<File[]> {
    return await this.filesService.findByOrganization(orgId, skip, take);
  }

  @Get('post/:postId')
  async findByPost(@Param('postId') postId: string): Promise<File[]> {
    return await this.filesService.findByPost(postId);
  }

  @Get('story/:storyId')
  async findByStory(@Param('storyId') storyId: string): Promise<File[]> {
    return await this.filesService.findByStory(storyId);
  }

  @Get('comment/:commentId')
  async findByComment(@Param('commentId') commentId: string): Promise<File[]> {
    return await this.filesService.findByComment(commentId);
  }

  @Get('profile/:userId')
  async findProfileFiles(@Param('userId') userId: string): Promise<File[]> {
    return await this.filesService.findProfileFiles(userId);
  }

  @Get('storage/:provider')
  async findByStorageProvider(@Param('provider') provider: string): Promise<File[]> {
    return await this.filesService.findByStorageProvider(provider);
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<File> {
    const file = await this.filesService.findById(id);
    if (!file) {
      throw new NotFoundException(`File with ID ${id} not found`);
    }
    return file;
  }

  // Update operations
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body(ValidationPipe) updateFileDto: UpdateFileDto
  ): Promise<File> {
    return await this.filesService.update(id, updateFileDto);
  }

  @Patch(':id/download')
  async incrementDownloadCount(@Param('id') id: string): Promise<File> {
    return await this.filesService.incrementDownloadCount(id);
  }

  @Patch(':id/processing-status')
  async updateProcessingStatus(
    @Param('id') id: string,
    @Body('status') status: string,
    @Body('metadata') metadata?: Record<string, unknown>
  ): Promise<File> {
    if (!status) {
      throw new BadRequestException('Processing status is required');
    }
    return await this.filesService.updateProcessingStatus(id, status, metadata);
  }

  @Patch(':id/virus-status')
  async updateVirusStatus(
    @Param('id') id: string,
    @Body('status') status: string
  ): Promise<File> {
    if (!status) {
      throw new BadRequestException('Virus status is required');
    }
    return await this.filesService.updateVirusStatus(id, status);
  }

  @Patch(':id/ocr')
  async addOCRText(
    @Param('id') id: string,
    @Body('ocrText') ocrText: string
  ): Promise<File> {
    if (!ocrText) {
      throw new BadRequestException('OCR text is required');
    }
    return await this.filesService.addOCRText(id, ocrText);
  }

  @Patch(':id/storage')
  async updateStorageInfo(
    @Param('id') id: string,
    @Body('storageProvider') storageProvider: string,
    @Body('bucket') bucket?: string,
    @Body('path') path?: string,
    @Body('url') url?: string
  ): Promise<File> {
    if (!storageProvider) {
      throw new BadRequestException('Storage provider is required');
    }
    return await this.filesService.updateStorageInfo(id, storageProvider, bucket, path, url);
  }

  // Delete operations
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async softDelete(@Param('id') id: string): Promise<void> {
    await this.filesService.softDelete(id);
  }

  @Delete(':id/hard')
  @HttpCode(HttpStatus.NO_CONTENT)
  async hardDelete(@Param('id') id: string): Promise<void> {
    await this.filesService.hardDelete(id);
  }

  @Patch(':id/restore')
  async restore(@Param('id') id: string): Promise<File> {
    return await this.filesService.restore(id);
  }

  // Bulk operations
  @Patch('bulk/category')
  async bulkUpdateCategory(
    @Body(ValidationPipe) bulkUpdateDto: BulkUpdateCategoryDto
  ): Promise<{ updatedCount: number }> {
    const count = await this.filesService.bulkUpdateCategory(
      bulkUpdateDto.fileIds,
      bulkUpdateDto.category
    );
    return { updatedCount: count };
  }

  @Patch('bulk/tags')
  async bulkUpdateTags(
    @Body(ValidationPipe) bulkUpdateDto: BulkUpdateTagsDto
  ): Promise<{ updatedCount: number }> {
    const count = await this.filesService.bulkUpdateTags(
      bulkUpdateDto.fileIds,
      bulkUpdateDto.tags
    );
    return { updatedCount: count };
  }

  @Delete('bulk')
  async bulkSoftDelete(
    @Body(ValidationPipe) bulkActionDto: BulkFileActionDto
  ): Promise<{ deletedCount: number }> {
    const count = await this.filesService.bulkSoftDelete(bulkActionDto.fileIds);
    return { deletedCount: count };
  }

  @Patch('bulk/restore')
  async bulkRestore(
    @Body(ValidationPipe) bulkActionDto: BulkFileActionDto
  ): Promise<{ restoredCount: number }> {
    const count = await this.filesService.bulkRestore(bulkActionDto.fileIds);
    return { restoredCount: count };
  }

  // Maintenance operations
  @Post('cleanup/expired')
  async cleanupExpiredFiles(): Promise<{ cleanedCount: number }> {
    const count = await this.filesService.cleanupExpiredFiles();
    return { cleanedCount: count };
  }
}
