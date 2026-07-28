import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserCreateNestedOneWithoutPosts_likedInputObjectSchema as UserCreateNestedOneWithoutPosts_likedInputObjectSchema } from './UserCreateNestedOneWithoutPosts_likedInput.schema';
import { PostCreateNestedOneWithoutLikedBysInputObjectSchema as PostCreateNestedOneWithoutLikedBysInputObjectSchema } from './PostCreateNestedOneWithoutLikedBysInput.schema'

const makeSchema = () => z.object({
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutPosts_likedInputObjectSchema),
  post: z.lazy(() => PostCreateNestedOneWithoutLikedBysInputObjectSchema)
}).strict();
export const UserPostLikeLinkCreateInputObjectSchema: z.ZodType<Prisma.UserPostLikeLinkCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserPostLikeLinkCreateInput>;
export const UserPostLikeLinkCreateInputObjectZodSchema = makeSchema();
