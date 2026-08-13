import * as z from 'zod';
export const UserSecretDeleteResultSchema = z.nullable(z.object({
  id: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
  user: z.unknown().optional(),
  userId: z.string(),
  pwdHash: z.string().nullable().optional(),
  salt: z.string().nullable().optional(),
  isAdmin: z.boolean().nullable().optional()
}));