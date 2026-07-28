import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserUpdateWithoutUserSecretInputObjectSchema as UserUpdateWithoutUserSecretInputObjectSchema } from './UserUpdateWithoutUserSecretInput.schema';
import { UserUncheckedUpdateWithoutUserSecretInputObjectSchema as UserUncheckedUpdateWithoutUserSecretInputObjectSchema } from './UserUncheckedUpdateWithoutUserSecretInput.schema';
import { UserCreateWithoutUserSecretInputObjectSchema as UserCreateWithoutUserSecretInputObjectSchema } from './UserCreateWithoutUserSecretInput.schema';
import { UserUncheckedCreateWithoutUserSecretInputObjectSchema as UserUncheckedCreateWithoutUserSecretInputObjectSchema } from './UserUncheckedCreateWithoutUserSecretInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutUserSecretInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutUserSecretInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutUserSecretInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutUserSecretInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutUserSecretInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutUserSecretInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutUserSecretInput>;
export const UserUpsertWithoutUserSecretInputObjectZodSchema = makeSchema();
