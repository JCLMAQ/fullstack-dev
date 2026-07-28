import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserUpdateWithoutFollowingsInputObjectSchema as UserUpdateWithoutFollowingsInputObjectSchema } from './UserUpdateWithoutFollowingsInput.schema';
import { UserUncheckedUpdateWithoutFollowingsInputObjectSchema as UserUncheckedUpdateWithoutFollowingsInputObjectSchema } from './UserUncheckedUpdateWithoutFollowingsInput.schema';
import { UserCreateWithoutFollowingsInputObjectSchema as UserCreateWithoutFollowingsInputObjectSchema } from './UserCreateWithoutFollowingsInput.schema';
import { UserUncheckedCreateWithoutFollowingsInputObjectSchema as UserUncheckedCreateWithoutFollowingsInputObjectSchema } from './UserUncheckedCreateWithoutFollowingsInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutFollowingsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutFollowingsInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutFollowingsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutFollowingsInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutFollowingsInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutFollowingsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutFollowingsInput>;
export const UserUpsertWithoutFollowingsInputObjectZodSchema = makeSchema();
