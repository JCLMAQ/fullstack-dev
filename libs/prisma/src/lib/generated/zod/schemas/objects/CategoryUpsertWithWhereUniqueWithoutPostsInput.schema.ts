import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { CategoryWhereUniqueInputObjectSchema as CategoryWhereUniqueInputObjectSchema } from './CategoryWhereUniqueInput.schema';
import { CategoryUpdateWithoutPostsInputObjectSchema as CategoryUpdateWithoutPostsInputObjectSchema } from './CategoryUpdateWithoutPostsInput.schema';
import { CategoryUncheckedUpdateWithoutPostsInputObjectSchema as CategoryUncheckedUpdateWithoutPostsInputObjectSchema } from './CategoryUncheckedUpdateWithoutPostsInput.schema';
import { CategoryCreateWithoutPostsInputObjectSchema as CategoryCreateWithoutPostsInputObjectSchema } from './CategoryCreateWithoutPostsInput.schema';
import { CategoryUncheckedCreateWithoutPostsInputObjectSchema as CategoryUncheckedCreateWithoutPostsInputObjectSchema } from './CategoryUncheckedCreateWithoutPostsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CategoryWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => CategoryUpdateWithoutPostsInputObjectSchema), z.lazy(() => CategoryUncheckedUpdateWithoutPostsInputObjectSchema)]),
  create: z.union([z.lazy(() => CategoryCreateWithoutPostsInputObjectSchema), z.lazy(() => CategoryUncheckedCreateWithoutPostsInputObjectSchema)])
}).strict();
export const CategoryUpsertWithWhereUniqueWithoutPostsInputObjectSchema: z.ZodType<Prisma.CategoryUpsertWithWhereUniqueWithoutPostsInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoryUpsertWithWhereUniqueWithoutPostsInput>;
export const CategoryUpsertWithWhereUniqueWithoutPostsInputObjectZodSchema = makeSchema();
