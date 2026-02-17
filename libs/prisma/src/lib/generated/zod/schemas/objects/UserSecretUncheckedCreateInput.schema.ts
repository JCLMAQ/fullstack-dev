import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  userId: z.string(),
  pwdHash: z.string().optional().nullable(),
  salt: z.string().optional().nullable(),
  isAdmin: z.boolean().optional().nullable()
}).strict();
export const UserSecretUncheckedCreateInputObjectSchema: z.ZodType<Prisma.UserSecretUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserSecretUncheckedCreateInput>;
export const UserSecretUncheckedCreateInputObjectZodSchema = makeSchema();
