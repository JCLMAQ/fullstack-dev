import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { PostCreateNestedOneWithoutLikedBysInputObjectSchema as PostCreateNestedOneWithoutLikedBysInputObjectSchema } from './PostCreateNestedOneWithoutLikedBysInput.schema'

const makeSchema = () => z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  post: z.lazy(() => PostCreateNestedOneWithoutLikedBysInputObjectSchema)
}).strict();
export const UserPostLikeLinkCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.UserPostLikeLinkCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.UserPostLikeLinkCreateWithoutUserInput>;
export const UserPostLikeLinkCreateWithoutUserInputObjectZodSchema = makeSchema();
