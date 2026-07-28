import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserUpdateWithoutAddressInputObjectSchema as UserUpdateWithoutAddressInputObjectSchema } from './UserUpdateWithoutAddressInput.schema';
import { UserUncheckedUpdateWithoutAddressInputObjectSchema as UserUncheckedUpdateWithoutAddressInputObjectSchema } from './UserUncheckedUpdateWithoutAddressInput.schema';
import { UserCreateWithoutAddressInputObjectSchema as UserCreateWithoutAddressInputObjectSchema } from './UserCreateWithoutAddressInput.schema';
import { UserUncheckedCreateWithoutAddressInputObjectSchema as UserUncheckedCreateWithoutAddressInputObjectSchema } from './UserUncheckedCreateWithoutAddressInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutAddressInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutAddressInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutAddressInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutAddressInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutAddressInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutAddressInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutAddressInput>;
export const UserUpsertWithoutAddressInputObjectZodSchema = makeSchema();
