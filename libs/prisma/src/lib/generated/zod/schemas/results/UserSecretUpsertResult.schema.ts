import * as z from 'zod';
export const UserSecretUpsertResultSchema = z.object({
  id: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
  user: z.unknown().optional(),
  userId: z.string(),
  pwdHash: z.string().optional(),
  salt: z.string().optional(),
  isAdmin: z.boolean().optional()
});