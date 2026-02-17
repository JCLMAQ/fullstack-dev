import * as z from 'zod';
export const TagCategoriesCreateResultSchema = z.object({
  id: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
  published: z.boolean(),
  isPublic: z.boolean(),
  isDeleted: z.number().int(),
  isDeletedDT: z.date().optional(),
  modelName: z.string(),
  description: z.string().optional(),
  recordId: z.string(),
  TagValues: z.array(z.unknown())
});