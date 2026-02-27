import * as z from 'zod';
export const TagValueUpsertResultSchema = z.object({
  id: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
  published: z.boolean(),
  isPublic: z.boolean(),
  isDeleted: z.number().int(),
  isDeletedDT: z.date().optional(),
  name: z.string(),
  position: z.number().int(),
  color: z.string().optional(),
  tagCategories: z.unknown(),
  tagCategoriesId: z.number().int(),
  mainTag: z.unknown().optional(),
  mainTagId: z.number().int().optional(),
  SubTags: z.array(z.unknown()),
  tagTranslates: z.array(z.unknown()),
  Todos: z.array(z.unknown()),
  Tasks: z.array(z.unknown()),
  Groups: z.array(z.unknown()),
  Posts: z.array(z.unknown()),
  Files: z.array(z.unknown())
});