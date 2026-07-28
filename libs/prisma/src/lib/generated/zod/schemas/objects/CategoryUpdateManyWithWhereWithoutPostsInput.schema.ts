import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { CategoryScalarWhereInputObjectSchema as CategoryScalarWhereInputObjectSchema } from './CategoryScalarWhereInput.schema';
import { CategoryUpdateManyMutationInputObjectSchema as CategoryUpdateManyMutationInputObjectSchema } from './CategoryUpdateManyMutationInput.schema';
import { CategoryUncheckedUpdateManyWithoutPostsInputObjectSchema as CategoryUncheckedUpdateManyWithoutPostsInputObjectSchema } from './CategoryUncheckedUpdateManyWithoutPostsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CategoryScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => CategoryUpdateManyMutationInputObjectSchema), z.lazy(() => CategoryUncheckedUpdateManyWithoutPostsInputObjectSchema)])
}).strict();
export const CategoryUpdateManyWithWhereWithoutPostsInputObjectSchema: z.ZodType<Prisma.CategoryUpdateManyWithWhereWithoutPostsInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoryUpdateManyWithWhereWithoutPostsInput>;
export const CategoryUpdateManyWithWhereWithoutPostsInputObjectZodSchema = makeSchema();
