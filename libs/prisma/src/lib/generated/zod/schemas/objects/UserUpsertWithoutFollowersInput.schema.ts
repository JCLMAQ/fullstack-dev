import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserUpdateWithoutFollowersInputObjectSchema as UserUpdateWithoutFollowersInputObjectSchema } from './UserUpdateWithoutFollowersInput.schema';
import { UserUncheckedUpdateWithoutFollowersInputObjectSchema as UserUncheckedUpdateWithoutFollowersInputObjectSchema } from './UserUncheckedUpdateWithoutFollowersInput.schema';
import { UserCreateWithoutFollowersInputObjectSchema as UserCreateWithoutFollowersInputObjectSchema } from './UserCreateWithoutFollowersInput.schema';
import { UserUncheckedCreateWithoutFollowersInputObjectSchema as UserUncheckedCreateWithoutFollowersInputObjectSchema } from './UserUncheckedCreateWithoutFollowersInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutFollowersInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutFollowersInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutFollowersInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutFollowersInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutFollowersInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutFollowersInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutFollowersInput>;
export const UserUpsertWithoutFollowersInputObjectZodSchema = makeSchema();
