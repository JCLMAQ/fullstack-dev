import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  pwdHash: z.string().optional().nullable(),
  salt: z.string().optional().nullable(),
  isAdmin: z.boolean().optional().nullable()
}).strict();
export const UserSecretCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.UserSecretCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.UserSecretCreateWithoutUserInput>;
export const UserSecretCreateWithoutUserInputObjectZodSchema = makeSchema();
