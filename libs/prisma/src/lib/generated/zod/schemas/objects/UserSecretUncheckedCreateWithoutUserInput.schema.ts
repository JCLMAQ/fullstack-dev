import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  pwdHash: z.string().optional().nullable(),
  salt: z.string().optional().nullable(),
  isAdmin: z.boolean().optional().nullable()
}).strict();
export const UserSecretUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.UserSecretUncheckedCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.UserSecretUncheckedCreateWithoutUserInput>;
export const UserSecretUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
