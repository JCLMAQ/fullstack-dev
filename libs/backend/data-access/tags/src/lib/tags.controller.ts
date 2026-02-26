import { Prisma, TagCategories, TagWithRelations } from '@db/prisma';
import {
    Body,
    Controller,
    Delete,
    Get,
    HttpException,
    HttpStatus,
    Param,
    Patch,
    Post,
    Put,
    Query,
} from '@nestjs/common';
import {
    CreateTagDto,
    DEFAULT_TAG_SKIP,
    DEFAULT_TAG_TAKE,
    TagListQueryParams,
    TagListResponse,
    UpdateTagDto,
} from './dto/tag.dto';
import { TagsService } from './tags.service';

@Controller('tags')
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  @Get()
  async getTags(@Query() query: TagListQueryParams): Promise<TagListResponse> {
    try {
      const skip = this.parseInteger(query.skip, 'skip', 0) ?? DEFAULT_TAG_SKIP;
      const take = this.parseInteger(query.take, 'take', 1) ?? DEFAULT_TAG_TAKE;
      const where: Prisma.TagValueWhereInput = {};

      const includeDeleted = this.parseBoolean(query.includeDeleted);
      if (!includeDeleted) {
        where.isDeleted = 0;
      }

      const categoryId = this.parseInteger(query.categoryId, 'categoryId', 1);
      if (categoryId !== undefined) {
        where.tagCategoriesId = categoryId;
      }

      const mainTagId = this.parseInteger(query.mainTagId, 'mainTagId', 1);
      if (mainTagId !== undefined) {
        where.mainTagId = mainTagId;
      }

      const isPublic = this.parseBoolean(query.isPublic);
      if (isPublic !== undefined) {
        where.isPublic = isPublic;
      }

      const published = this.parseBoolean(query.published);
      if (published !== undefined) {
        where.published = published;
      }

      if (query.search?.trim()) {
        const normalizedSearch = query.search.trim();
        where.OR = [
          { name: { contains: normalizedSearch, mode: 'insensitive' } },
          {
            tagTranslates: {
              some: {
                translation: { contains: normalizedSearch, mode: 'insensitive' },
              },
            },
          },
        ];
      }

      const [data, total] = await Promise.all([
        this.tagsService.listTags({
          skip,
          take,
          where,
          orderBy: {
            position: 'asc',
          },
        }),
        this.tagsService.countTags(where),
      ]);

      return { data, total, skip, take };
    } catch (error) {
      throw this.wrapError(
        error,
        'Erreur lors de la récupération des tags',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  @Get('categories')
  async getTagCategories(
    @Query('published') published?: string,
    @Query('isPublic') isPublic?: string,
    @Query('includeDeleted') includeDeleted?: string
  ): Promise<TagCategories[]> {
    const where: Prisma.TagCategoriesWhereInput = {};

    const includeDeletedFlag = this.parseBoolean(includeDeleted);
    if (!includeDeletedFlag) {
      where.isDeleted = 0;
    }

    const publishedFlag = this.parseBoolean(published);
    if (publishedFlag !== undefined) {
      where.published = publishedFlag;
    }

    const isPublicFlag = this.parseBoolean(isPublic);
    if (isPublicFlag !== undefined) {
      where.isPublic = isPublicFlag;
    }

    return this.tagsService.listTagCategories({ where });
  }

  @Get(':id')
  async getTag(@Param('id') id: string): Promise<TagWithRelations> {
    const tagId = this.parseId(id);
    return this.tagsService.getTagById(tagId);
  }

  @Post()
  async createTag(@Body() payload: CreateTagDto): Promise<TagWithRelations> {
    try {
      return await this.tagsService.createTag(payload);
    } catch (error) {
      throw this.wrapError(error, 'Erreur lors de la création du tag');
    }
  }

  @Put(':id')
  async updateTag(
    @Param('id') id: string,
    @Body() payload: UpdateTagDto
  ): Promise<TagWithRelations> {
    const tagId = this.parseId(id);

    try {
      return await this.tagsService.updateTag(tagId, payload);
    } catch (error) {
      throw this.wrapError(error, 'Erreur lors de la mise à jour du tag');
    }
  }

  @Patch(':id/restore')
  async restoreTag(@Param('id') id: string): Promise<TagWithRelations> {
    const tagId = this.parseId(id);
    return this.tagsService.restoreTag(tagId);
  }

  @Delete(':id/permanent')
  async deleteTag(@Param('id') id: string): Promise<TagWithRelations> {
    const tagId = this.parseId(id);
    return this.tagsService.deleteTag(tagId);
  }

  @Delete(':id')
  async softDeleteTag(@Param('id') id: string): Promise<TagWithRelations> {
    const tagId = this.parseId(id);
    return this.tagsService.softDeleteTag(tagId);
  }

  private parseInteger(
    value: string | undefined,
    fieldName: string,
    min?: number
  ): number | undefined {
    if (value === undefined) {
      return undefined;
    }

    const parsed = Number(value);
    if (!Number.isInteger(parsed)) {
      throw new HttpException(
        `Le paramètre ${fieldName} doit être un entier`,
        HttpStatus.BAD_REQUEST
      );
    }

    if (min !== undefined && parsed < min) {
      throw new HttpException(
        `Le paramètre ${fieldName} doit être supérieur ou égal à ${min}`,
        HttpStatus.BAD_REQUEST
      );
    }

    return parsed;
  }

  private parseBoolean(value?: string): boolean | undefined {
    if (value === undefined) {
      return undefined;
    }

    if (value === 'true') {
      return true;
    }

    if (value === 'false') {
      return false;
    }

    throw new HttpException(
      `La valeur ${value} n'est pas valide pour un booléen`,
      HttpStatus.BAD_REQUEST
    );
  }

  private parseId(id: string): number {
    const parsed = Number(id);
    if (!Number.isInteger(parsed) || parsed <= 0) {
      throw new HttpException('Identifiant invalide', HttpStatus.BAD_REQUEST);
    }

    return parsed;
  }

  private wrapError(
    error: unknown,
    fallback: string,
    status: HttpStatus = HttpStatus.BAD_REQUEST
  ): HttpException {
    if (error instanceof HttpException) {
      return error;
    }

    const message =
      error instanceof Error && error.message ? error.message : fallback;

    return new HttpException(message ?? fallback, status);
  }
}
