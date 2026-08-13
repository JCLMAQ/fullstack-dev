import * as z from 'zod';
export const ApiKeyUpdateResultSchema = z.nullable(z.object({
  id: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
  published: z.boolean(),
  isPublic: z.boolean(),
  isDeleted: z.number().int(),
  isDeletedDT: z.date().nullable().optional(),
  key: z.string(),
  uuid: z.string(),
  user: z.unknown().optional(),
  userId: z.string(),
  Scopes: z.array(z.unknown()).optional()
}));