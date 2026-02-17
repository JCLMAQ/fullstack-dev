import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateNestedOneWithoutPosts_likedInputObjectSchema as UserCreateNestedOneWithoutPosts_likedInputObjectSchema } from './UserCreateNestedOneWithoutPosts_likedInput.schema'

const makeSchema = () => z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutPosts_likedInputObjectSchema)
}).strict();
export const UserPostLikeLinkCreateWithoutPostInputObjectSchema: z.ZodType<Prisma.UserPostLikeLinkCreateWithoutPostInput> = makeSchema() as unknown as z.ZodType<Prisma.UserPostLikeLinkCreateWithoutPostInput>;
export const UserPostLikeLinkCreateWithoutPostInputObjectZodSchema = makeSchema();
