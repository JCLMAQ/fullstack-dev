import * as z from 'zod';
export const RefreshTokenFindUniqueResultSchema = z.nullable(z.object({
  id: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
  published: z.boolean(),
  isPublic: z.boolean(),
  isDeleted: z.number().int(),
  isDeletedDT: z.date().nullable().optional(),
  userId: z.string(),
  tokenId: z.string()
}));