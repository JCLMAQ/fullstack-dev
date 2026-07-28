import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { PostWhereUniqueInputObjectSchema as PostWhereUniqueInputObjectSchema } from './PostWhereUniqueInput.schema';
import { PostCreateWithoutLikedBysInputObjectSchema as PostCreateWithoutLikedBysInputObjectSchema } from './PostCreateWithoutLikedBysInput.schema';
import { PostUncheckedCreateWithoutLikedBysInputObjectSchema as PostUncheckedCreateWithoutLikedBysInputObjectSchema } from './PostUncheckedCreateWithoutLikedBysInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PostWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => PostCreateWithoutLikedBysInputObjectSchema), z.lazy(() => PostUncheckedCreateWithoutLikedBysInputObjectSchema)])
}).strict();
export const PostCreateOrConnectWithoutLikedBysInputObjectSchema: z.ZodType<Prisma.PostCreateOrConnectWithoutLikedBysInput> = makeSchema() as unknown as z.ZodType<Prisma.PostCreateOrConnectWithoutLikedBysInput>;
export const PostCreateOrConnectWithoutLikedBysInputObjectZodSchema = makeSchema();
