import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { PostWhereUniqueInputObjectSchema as PostWhereUniqueInputObjectSchema } from './PostWhereUniqueInput.schema';
import { PostUpdateWithoutCategoriesInputObjectSchema as PostUpdateWithoutCategoriesInputObjectSchema } from './PostUpdateWithoutCategoriesInput.schema';
import { PostUncheckedUpdateWithoutCategoriesInputObjectSchema as PostUncheckedUpdateWithoutCategoriesInputObjectSchema } from './PostUncheckedUpdateWithoutCategoriesInput.schema';
import { PostCreateWithoutCategoriesInputObjectSchema as PostCreateWithoutCategoriesInputObjectSchema } from './PostCreateWithoutCategoriesInput.schema';
import { PostUncheckedCreateWithoutCategoriesInputObjectSchema as PostUncheckedCreateWithoutCategoriesInputObjectSchema } from './PostUncheckedCreateWithoutCategoriesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PostWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => PostUpdateWithoutCategoriesInputObjectSchema), z.lazy(() => PostUncheckedUpdateWithoutCategoriesInputObjectSchema)]),
  create: z.union([z.lazy(() => PostCreateWithoutCategoriesInputObjectSchema), z.lazy(() => PostUncheckedCreateWithoutCategoriesInputObjectSchema)])
}).strict();
export const PostUpsertWithWhereUniqueWithoutCategoriesInputObjectSchema: z.ZodType<Prisma.PostUpsertWithWhereUniqueWithoutCategoriesInput> = makeSchema() as unknown as z.ZodType<Prisma.PostUpsertWithWhereUniqueWithoutCategoriesInput>;
export const PostUpsertWithWhereUniqueWithoutCategoriesInputObjectZodSchema = makeSchema();
