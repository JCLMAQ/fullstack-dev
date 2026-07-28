import * as z from 'zod';
export const TokenFindManyResultSchema = z.object({
  data: z.array(z.object({
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
  user: z.unknown().optional(),
  userId: z.string()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});