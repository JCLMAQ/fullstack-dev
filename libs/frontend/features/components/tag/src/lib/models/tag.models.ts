import type { TagCategories, TagValue, TagWithRelations } from '@db/prisma/frontend';

type TagCounts = {
  usageCount: number;
  subTagCount: number;
};

export type TagListItem = TagValue & TagCounts & {
  tagCategories: TagCategories;
  color?: string | null;
};

export type TagListResponse = {
  data: TagListItem[];
  total: number;
  skip: number;
  take: number;
};

export type TagListQueryOptions = {
  skip?: number;
  take?: number;
  search?: string;
  categoryId?: number;
  mainTagId?: number | null;
  includeDeleted?: boolean;
  published?: boolean;
  isPublic?: boolean;
};

export type CreateTagDto = {
  name: string;
  position?: number;
  tagCategoriesId: number;
  mainTagId?: number | null;
  published?: boolean;
  isPublic?: boolean;
  color?: string | null;
};

export type UpdateTagDto = Partial<CreateTagDto>;

export type TagMutationResult = TagWithRelations;
