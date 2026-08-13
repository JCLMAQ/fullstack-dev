import * as z from 'zod';
export const WordCreateResultSchema = z.object({
  id: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
  published: z.boolean().nullable().optional(),
  isPublic: z.boolean().nullable().optional(),
  isDeleted: z.number().int().nullable().optional(),
  isDeletedDT: z.date().nullable().optional(),
  slug: z.string(),
  type: z.unknown(),
  translations: z.array(z.unknown()).optional()
});