import * as z from 'zod';
export const TagValueFindFirstResultSchema = z.nullable(z.object({
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
  tagCategories: z.unknown().optional(),
  tagCategoriesId: z.number().int(),
  mainTag: z.unknown().optional(),
  mainTagId: z.number().int().optional(),
  SubTags: z.array(z.unknown()).optional(),
  tagTranslates: z.array(z.unknown()).optional(),
  Todos: z.array(z.unknown()).optional(),
  Tasks: z.array(z.unknown()).optional(),
  Groups: z.array(z.unknown()).optional(),
  Posts: z.array(z.unknown()).optional(),
  Files: z.array(z.unknown()).optional()
}));