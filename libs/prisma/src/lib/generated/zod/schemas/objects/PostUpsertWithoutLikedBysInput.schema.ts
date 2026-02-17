import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { PostUpdateWithoutLikedBysInputObjectSchema as PostUpdateWithoutLikedBysInputObjectSchema } from './PostUpdateWithoutLikedBysInput.schema';
import { PostUncheckedUpdateWithoutLikedBysInputObjectSchema as PostUncheckedUpdateWithoutLikedBysInputObjectSchema } from './PostUncheckedUpdateWithoutLikedBysInput.schema';
import { PostCreateWithoutLikedBysInputObjectSchema as PostCreateWithoutLikedBysInputObjectSchema } from './PostCreateWithoutLikedBysInput.schema';
import { PostUncheckedCreateWithoutLikedBysInputObjectSchema as PostUncheckedCreateWithoutLikedBysInputObjectSchema } from './PostUncheckedCreateWithoutLikedBysInput.schema';
import { PostWhereInputObjectSchema as PostWhereInputObjectSchema } from './PostWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => PostUpdateWithoutLikedBysInputObjectSchema), z.lazy(() => PostUncheckedUpdateWithoutLikedBysInputObjectSchema)]),
  create: z.union([z.lazy(() => PostCreateWithoutLikedBysInputObjectSchema), z.lazy(() => PostUncheckedCreateWithoutLikedBysInputObjectSchema)]),
  where: z.lazy(() => PostWhereInputObjectSchema).optional()
}).strict();
export const PostUpsertWithoutLikedBysInputObjectSchema: z.ZodType<Prisma.PostUpsertWithoutLikedBysInput> = makeSchema() as unknown as z.ZodType<Prisma.PostUpsertWithoutLikedBysInput>;
export const PostUpsertWithoutLikedBysInputObjectZodSchema = makeSchema();
