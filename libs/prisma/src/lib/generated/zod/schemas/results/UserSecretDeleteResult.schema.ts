import * as z from 'zod';
export const UserSecretDeleteResultSchema = z.nullable(z.object({
  id: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
  user: z.unknown(),
  userId: z.string(),
  pwdHash: z.string().optional(),
  salt: z.string().optional(),
  isAdmin: z.boolean().optional()
}));