import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TagCategoriesWhereInputObjectSchema as TagCategoriesWhereInputObjectSchema } from './TagCategoriesWhereInput.schema';
import { TagCategoriesUpdateWithoutTagValuesInputObjectSchema as TagCategoriesUpdateWithoutTagValuesInputObjectSchema } from './TagCategoriesUpdateWithoutTagValuesInput.schema';
import { TagCategoriesUncheckedUpdateWithoutTagValuesInputObjectSchema as TagCategoriesUncheckedUpdateWithoutTagValuesInputObjectSchema } from './TagCategoriesUncheckedUpdateWithoutTagValuesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TagCategoriesWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => TagCategoriesUpdateWithoutTagValuesInputObjectSchema), z.lazy(() => TagCategoriesUncheckedUpdateWithoutTagValuesInputObjectSchema)])
}).strict();
export const TagCategoriesUpdateToOneWithWhereWithoutTagValuesInputObjectSchema: z.ZodType<Prisma.TagCategoriesUpdateToOneWithWhereWithoutTagValuesInput> = makeSchema() as unknown as z.ZodType<Prisma.TagCategoriesUpdateToOneWithWhereWithoutTagValuesInput>;
export const TagCategoriesUpdateToOneWithWhereWithoutTagValuesInputObjectZodSchema = makeSchema();
