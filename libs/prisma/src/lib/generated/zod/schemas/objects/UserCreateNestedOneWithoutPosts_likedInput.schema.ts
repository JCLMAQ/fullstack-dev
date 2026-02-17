import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateWithoutPosts_likedInputObjectSchema as UserCreateWithoutPosts_likedInputObjectSchema } from './UserCreateWithoutPosts_likedInput.schema';
import { UserUncheckedCreateWithoutPosts_likedInputObjectSchema as UserUncheckedCreateWithoutPosts_likedInputObjectSchema } from './UserUncheckedCreateWithoutPosts_likedInput.schema';
import { UserCreateOrConnectWithoutPosts_likedInputObjectSchema as UserCreateOrConnectWithoutPosts_likedInputObjectSchema } from './UserCreateOrConnectWithoutPosts_likedInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutPosts_likedInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutPosts_likedInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutPosts_likedInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutPosts_likedInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutPosts_likedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutPosts_likedInput>;
export const UserCreateNestedOneWithoutPosts_likedInputObjectZodSchema = makeSchema();
