import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { PostCreateWithoutCategoriesInputObjectSchema as PostCreateWithoutCategoriesInputObjectSchema } from './PostCreateWithoutCategoriesInput.schema';
import { PostUncheckedCreateWithoutCategoriesInputObjectSchema as PostUncheckedCreateWithoutCategoriesInputObjectSchema } from './PostUncheckedCreateWithoutCategoriesInput.schema';
import { PostCreateOrConnectWithoutCategoriesInputObjectSchema as PostCreateOrConnectWithoutCategoriesInputObjectSchema } from './PostCreateOrConnectWithoutCategoriesInput.schema';
import { PostWhereUniqueInputObjectSchema as PostWhereUniqueInputObjectSchema } from './PostWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PostCreateWithoutCategoriesInputObjectSchema), z.lazy(() => PostCreateWithoutCategoriesInputObjectSchema).array(), z.lazy(() => PostUncheckedCreateWithoutCategoriesInputObjectSchema), z.lazy(() => PostUncheckedCreateWithoutCategoriesInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PostCreateOrConnectWithoutCategoriesInputObjectSchema), z.lazy(() => PostCreateOrConnectWithoutCategoriesInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => PostWhereUniqueInputObjectSchema), z.lazy(() => PostWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const PostCreateNestedManyWithoutCategoriesInputObjectSchema: z.ZodType<Prisma.PostCreateNestedManyWithoutCategoriesInput> = makeSchema() as unknown as z.ZodType<Prisma.PostCreateNestedManyWithoutCategoriesInput>;
export const PostCreateNestedManyWithoutCategoriesInputObjectZodSchema = makeSchema();
