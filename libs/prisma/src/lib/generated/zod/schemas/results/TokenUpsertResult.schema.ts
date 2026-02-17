import * as z from 'zod';
export const TokenUpsertResultSchema = z.object({
  id: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
  published: z.boolean(),
  isPublic: z.boolean(),
  isDeleted: z.number().int(),
  isDeletedDT: z.date().optional(),
  tokenId: z.string().optional(),
  type: z.unknown(),
  emailToken: z.string().optional(),
  valid: z.boolean(),
  expiration: z.date(),
  user: z.unknown(),
  userId: z.string()
});