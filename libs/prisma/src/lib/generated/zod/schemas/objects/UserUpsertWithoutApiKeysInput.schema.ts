import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserUpdateWithoutApiKeysInputObjectSchema as UserUpdateWithoutApiKeysInputObjectSchema } from './UserUpdateWithoutApiKeysInput.schema';
import { UserUncheckedUpdateWithoutApiKeysInputObjectSchema as UserUncheckedUpdateWithoutApiKeysInputObjectSchema } from './UserUncheckedUpdateWithoutApiKeysInput.schema';
import { UserCreateWithoutApiKeysInputObjectSchema as UserCreateWithoutApiKeysInputObjectSchema } from './UserCreateWithoutApiKeysInput.schema';
import { UserUncheckedCreateWithoutApiKeysInputObjectSchema as UserUncheckedCreateWithoutApiKeysInputObjectSchema } from './UserUncheckedCreateWithoutApiKeysInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutApiKeysInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutApiKeysInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutApiKeysInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutApiKeysInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutApiKeysInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutApiKeysInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutApiKeysInput>;
export const UserUpsertWithoutApiKeysInputObjectZodSchema = makeSchema();
