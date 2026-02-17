import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { PostWhereInputObjectSchema as PostWhereInputObjectSchema } from './PostWhereInput.schema';
import { PostUpdateWithoutLikedBysInputObjectSchema as PostUpdateWithoutLikedBysInputObjectSchema } from './PostUpdateWithoutLikedBysInput.schema';
import { PostUncheckedUpdateWithoutLikedBysInputObjectSchema as PostUncheckedUpdateWithoutLikedBysInputObjectSchema } from './PostUncheckedUpdateWithoutLikedBysInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PostWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => PostUpdateWithoutLikedBysInputObjectSchema), z.lazy(() => PostUncheckedUpdateWithoutLikedBysInputObjectSchema)])
}).strict();
export const PostUpdateToOneWithWhereWithoutLikedBysInputObjectSchema: z.ZodType<Prisma.PostUpdateToOneWithWhereWithoutLikedBysInput> = makeSchema() as unknown as z.ZodType<Prisma.PostUpdateToOneWithWhereWithoutLikedBysInput>;
export const PostUpdateToOneWithWhereWithoutLikedBysInputObjectZodSchema = makeSchema();
