import { Prisma, TagWithRelations } from '@db/prisma';

export type TagTranslationDto = Prisma.TagTranslateUncheckedCreateWithoutTagValueInput;

export type CreateTagDto = Omit<Prisma.TagValueUncheckedCreateInput, 'tagTranslates'> & {
  translations?: TagTranslationDto[];
};

export type UpdateTagDto = Omit<Prisma.TagValueUncheckedUpdateInput, 'tagTranslates'> & {
  translations?: TagTranslationDto[];
};

export interface TagListResponse {
  data: TagWithRelations[];
  total: number;
  skip: number;
  take: number;
}

export interface TagListQueryParams {
  skip?: string;
  take?: string;
  search?: string;
  categoryId?: string;
  mainTagId?: string;
  includeDeleted?: string;
  published?: string;
  isPublic?: string;
}

export const DEFAULT_TAG_SKIP = 0;
export const DEFAULT_TAG_TAKE = 10;
