import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserCreateNestedOneWithoutUserSecretInputObjectSchema as UserCreateNestedOneWithoutUserSecretInputObjectSchema } from './UserCreateNestedOneWithoutUserSecretInput.schema'

const makeSchema = () => z.object({
  createdAt: z.coerce.date().optional(),
  pwdHash: z.string().optional().nullable(),
  salt: z.string().optional().nullable(),
  isAdmin: z.boolean().optional().nullable(),
  user: z.lazy(() => UserCreateNestedOneWithoutUserSecretInputObjectSchema)
}).strict();
export const UserSecretCreateInputObjectSchema: z.ZodType<Prisma.UserSecretCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserSecretCreateInput>;
export const UserSecretCreateInputObjectZodSchema = makeSchema();
