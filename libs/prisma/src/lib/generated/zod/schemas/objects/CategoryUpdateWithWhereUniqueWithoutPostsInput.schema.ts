import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { CategoryWhereUniqueInputObjectSchema as CategoryWhereUniqueInputObjectSchema } from './CategoryWhereUniqueInput.schema';
import { CategoryUpdateWithoutPostsInputObjectSchema as CategoryUpdateWithoutPostsInputObjectSchema } from './CategoryUpdateWithoutPostsInput.schema';
import { CategoryUncheckedUpdateWithoutPostsInputObjectSchema as CategoryUncheckedUpdateWithoutPostsInputObjectSchema } from './CategoryUncheckedUpdateWithoutPostsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CategoryWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => CategoryUpdateWithoutPostsInputObjectSchema), z.lazy(() => CategoryUncheckedUpdateWithoutPostsInputObjectSchema)])
}).strict();
export const CategoryUpdateWithWhereUniqueWithoutPostsInputObjectSchema: z.ZodType<Prisma.CategoryUpdateWithWhereUniqueWithoutPostsInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoryUpdateWithWhereUniqueWithoutPostsInput>;
export const CategoryUpdateWithWhereUniqueWithoutPostsInputObjectZodSchema = makeSchema();
