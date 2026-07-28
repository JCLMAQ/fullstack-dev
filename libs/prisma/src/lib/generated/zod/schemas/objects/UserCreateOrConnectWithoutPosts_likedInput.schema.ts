import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutPosts_likedInputObjectSchema as UserCreateWithoutPosts_likedInputObjectSchema } from './UserCreateWithoutPosts_likedInput.schema';
import { UserUncheckedCreateWithoutPosts_likedInputObjectSchema as UserUncheckedCreateWithoutPosts_likedInputObjectSchema } from './UserUncheckedCreateWithoutPosts_likedInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutPosts_likedInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutPosts_likedInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutPosts_likedInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutPosts_likedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutPosts_likedInput>;
export const UserCreateOrConnectWithoutPosts_likedInputObjectZodSchema = makeSchema();
