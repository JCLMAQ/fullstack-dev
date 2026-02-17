import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { PostWhereUniqueInputObjectSchema as PostWhereUniqueInputObjectSchema } from './PostWhereUniqueInput.schema';
import { PostUpdateWithoutCategoriesInputObjectSchema as PostUpdateWithoutCategoriesInputObjectSchema } from './PostUpdateWithoutCategoriesInput.schema';
import { PostUncheckedUpdateWithoutCategoriesInputObjectSchema as PostUncheckedUpdateWithoutCategoriesInputObjectSchema } from './PostUncheckedUpdateWithoutCategoriesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PostWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => PostUpdateWithoutCategoriesInputObjectSchema), z.lazy(() => PostUncheckedUpdateWithoutCategoriesInputObjectSchema)])
}).strict();
export const PostUpdateWithWhereUniqueWithoutCategoriesInputObjectSchema: z.ZodType<Prisma.PostUpdateWithWhereUniqueWithoutCategoriesInput> = makeSchema() as unknown as z.ZodType<Prisma.PostUpdateWithWhereUniqueWithoutCategoriesInput>;
export const PostUpdateWithWhereUniqueWithoutCategoriesInputObjectZodSchema = makeSchema();
