import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { PostWhereUniqueInputObjectSchema as PostWhereUniqueInputObjectSchema } from './PostWhereUniqueInput.schema';
import { PostCreateWithoutCategoriesInputObjectSchema as PostCreateWithoutCategoriesInputObjectSchema } from './PostCreateWithoutCategoriesInput.schema';
import { PostUncheckedCreateWithoutCategoriesInputObjectSchema as PostUncheckedCreateWithoutCategoriesInputObjectSchema } from './PostUncheckedCreateWithoutCategoriesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PostWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => PostCreateWithoutCategoriesInputObjectSchema), z.lazy(() => PostUncheckedCreateWithoutCategoriesInputObjectSchema)])
}).strict();
export const PostCreateOrConnectWithoutCategoriesInputObjectSchema: z.ZodType<Prisma.PostCreateOrConnectWithoutCategoriesInput> = makeSchema() as unknown as z.ZodType<Prisma.PostCreateOrConnectWithoutCategoriesInput>;
export const PostCreateOrConnectWithoutCategoriesInputObjectZodSchema = makeSchema();
