import * as z from 'zod';
export const TokenCreateResultSchema = z.object({
  id: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
  published: z.boolean(),
  isPublic: z.boolean(),
  isDeleted: z.number().int(),
  isDeletedDT: z.date().nullable().optional(),
  tokenId: z.string().nullable().optional(),
  type: z.unknown(),
  emailToken: z.string().nullable().optional(),
  valid: z.boolean(),
  expiration: z.date(),
  user: z.unknown().optional(),
  userId: z.string()
});