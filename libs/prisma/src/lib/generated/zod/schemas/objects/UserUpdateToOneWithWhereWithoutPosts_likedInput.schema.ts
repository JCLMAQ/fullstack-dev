import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutPosts_likedInputObjectSchema as UserUpdateWithoutPosts_likedInputObjectSchema } from './UserUpdateWithoutPosts_likedInput.schema';
import { UserUncheckedUpdateWithoutPosts_likedInputObjectSchema as UserUncheckedUpdateWithoutPosts_likedInputObjectSchema } from './UserUncheckedUpdateWithoutPosts_likedInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutPosts_likedInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutPosts_likedInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutPosts_likedInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutPosts_likedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutPosts_likedInput>;
export const UserUpdateToOneWithWhereWithoutPosts_likedInputObjectZodSchema = makeSchema();
