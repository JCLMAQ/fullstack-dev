import { Prisma } from '@db/prisma';

export type TagTranslationDto = Prisma.TagTranslateUncheckedCreateWithoutTagValueInput;

export type CreateTagDto = Omit<Prisma.TagValueUncheckedCreateInput, 'tagTranslates'> & {
  translations?: TagTranslationDto[];
};

export type UpdateTagDto = Omit<Prisma.TagValueUncheckedUpdateInput, 'tagTranslates'> & {
  translations?: TagTranslationDto[];
};

type TagListItemBase = Prisma.TagValueGetPayload<{
  include: {
    tagCategories: true;
    _count: {
      select: {
        SubTags: true;
        Todos: true;
        Tasks: true;
        Groups: true;
        Posts: true;
        Files: true;
      };
    };
  };
}>;

export type TagListItem = Omit<TagListItemBase, '_count'> & {
  usageCount: number;
  subTagCount: number;
};

export interface TagListResponse {
  data: TagListItem[];
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
