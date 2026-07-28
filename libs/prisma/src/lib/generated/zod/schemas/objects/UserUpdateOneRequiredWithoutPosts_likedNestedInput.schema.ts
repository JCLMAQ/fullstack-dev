import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserCreateWithoutPosts_likedInputObjectSchema as UserCreateWithoutPosts_likedInputObjectSchema } from './UserCreateWithoutPosts_likedInput.schema';
import { UserUncheckedCreateWithoutPosts_likedInputObjectSchema as UserUncheckedCreateWithoutPosts_likedInputObjectSchema } from './UserUncheckedCreateWithoutPosts_likedInput.schema';
import { UserCreateOrConnectWithoutPosts_likedInputObjectSchema as UserCreateOrConnectWithoutPosts_likedInputObjectSchema } from './UserCreateOrConnectWithoutPosts_likedInput.schema';
import { UserUpsertWithoutPosts_likedInputObjectSchema as UserUpsertWithoutPosts_likedInputObjectSchema } from './UserUpsertWithoutPosts_likedInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutPosts_likedInputObjectSchema as UserUpdateToOneWithWhereWithoutPosts_likedInputObjectSchema } from './UserUpdateToOneWithWhereWithoutPosts_likedInput.schema';
import { UserUpdateWithoutPosts_likedInputObjectSchema as UserUpdateWithoutPosts_likedInputObjectSchema } from './UserUpdateWithoutPosts_likedInput.schema';
import { UserUncheckedUpdateWithoutPosts_likedInputObjectSchema as UserUncheckedUpdateWithoutPosts_likedInputObjectSchema } from './UserUncheckedUpdateWithoutPosts_likedInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutPosts_likedInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutPosts_likedInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutPosts_likedInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutPosts_likedInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutPosts_likedInputObjectSchema), z.lazy(() => UserUpdateWithoutPosts_likedInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutPosts_likedInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutPosts_likedNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutPosts_likedNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutPosts_likedNestedInput>;
export const UserUpdateOneRequiredWithoutPosts_likedNestedInputObjectZodSchema = makeSchema();
