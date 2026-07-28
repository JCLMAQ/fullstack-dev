import * as z from 'zod';
export const ApiKeyCreateResultSchema = z.object({
  id: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
  published: z.boolean(),
  isPublic: z.boolean(),
  isDeleted: z.number().int(),
  isDeletedDT: z.date().optional(),
  key: z.string(),
  uuid: z.string(),
  user: z.unknown().optional(),
  userId: z.string(),
  Scopes: z.array(z.unknown()).optional()
});