import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { PostScalarWhereInputObjectSchema as PostScalarWhereInputObjectSchema } from './PostScalarWhereInput.schema';
import { PostUpdateManyMutationInputObjectSchema as PostUpdateManyMutationInputObjectSchema } from './PostUpdateManyMutationInput.schema';
import { PostUncheckedUpdateManyWithoutCategoriesInputObjectSchema as PostUncheckedUpdateManyWithoutCategoriesInputObjectSchema } from './PostUncheckedUpdateManyWithoutCategoriesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PostScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => PostUpdateManyMutationInputObjectSchema), z.lazy(() => PostUncheckedUpdateManyWithoutCategoriesInputObjectSchema)])
}).strict();
export const PostUpdateManyWithWhereWithoutCategoriesInputObjectSchema: z.ZodType<Prisma.PostUpdateManyWithWhereWithoutCategoriesInput> = makeSchema() as unknown as z.ZodType<Prisma.PostUpdateManyWithWhereWithoutCategoriesInput>;
export const PostUpdateManyWithWhereWithoutCategoriesInputObjectZodSchema = makeSchema();
