import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserUpdateWithoutPosts_likedInputObjectSchema as UserUpdateWithoutPosts_likedInputObjectSchema } from './UserUpdateWithoutPosts_likedInput.schema';
import { UserUncheckedUpdateWithoutPosts_likedInputObjectSchema as UserUncheckedUpdateWithoutPosts_likedInputObjectSchema } from './UserUncheckedUpdateWithoutPosts_likedInput.schema';
import { UserCreateWithoutPosts_likedInputObjectSchema as UserCreateWithoutPosts_likedInputObjectSchema } from './UserCreateWithoutPosts_likedInput.schema';
import { UserUncheckedCreateWithoutPosts_likedInputObjectSchema as UserUncheckedCreateWithoutPosts_likedInputObjectSchema } from './UserUncheckedCreateWithoutPosts_likedInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutPosts_likedInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutPosts_likedInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutPosts_likedInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutPosts_likedInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutPosts_likedInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutPosts_likedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutPosts_likedInput>;
export const UserUpsertWithoutPosts_likedInputObjectZodSchema = makeSchema();
