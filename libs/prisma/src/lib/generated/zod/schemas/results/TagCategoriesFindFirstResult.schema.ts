import * as z from 'zod';
export const TagCategoriesFindFirstResultSchema = z.nullable(z.object({
  id: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
  published: z.boolean(),
  isPublic: z.boolean(),
  isDeleted: z.number().int(),
  isDeletedDT: z.date().nullable().optional(),
  modelName: z.string(),
  description: z.string().nullable().optional(),
  recordId: z.string(),
  TagValues: z.array(z.unknown()).optional()
}));