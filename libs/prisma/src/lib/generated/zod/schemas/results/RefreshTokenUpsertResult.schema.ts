import * as z from 'zod';
export const RefreshTokenUpsertResultSchema = z.object({
  id: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
  published: z.boolean(),
  isPublic: z.boolean(),
  isDeleted: z.number().int(),
  isDeletedDT: z.date().nullable().optional(),
  userId: z.string(),
  tokenId: z.string()
});