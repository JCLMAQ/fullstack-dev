import * as z from 'zod';
export const TagValueCreateResultSchema = z.object({
  id: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
  published: z.boolean(),
  isPublic: z.boolean(),
  isDeleted: z.number().int(),
  isDeletedDT: z.date().nullable().optional(),
  name: z.string(),
  position: z.number().int(),
  color: z.string().nullable().optional(),
  tagCategories: z.unknown().optional(),
  tagCategoriesId: z.number().int(),
  mainTag: z.unknown().optional(),
  mainTagId: z.number().int().nullable().optional(),
  SubTags: z.array(z.unknown()).optional(),
  tagTranslates: z.array(z.unknown()).optional(),
  Todos: z.array(z.unknown()).optional(),
  Tasks: z.array(z.unknown()).optional(),
  Groups: z.array(z.unknown()).optional(),
  Posts: z.array(z.unknown()).optional(),
  Files: z.array(z.unknown()).optional()
});