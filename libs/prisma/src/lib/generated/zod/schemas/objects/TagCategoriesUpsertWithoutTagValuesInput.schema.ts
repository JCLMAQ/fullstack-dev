import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TagCategoriesUpdateWithoutTagValuesInputObjectSchema as TagCategoriesUpdateWithoutTagValuesInputObjectSchema } from './TagCategoriesUpdateWithoutTagValuesInput.schema';
import { TagCategoriesUncheckedUpdateWithoutTagValuesInputObjectSchema as TagCategoriesUncheckedUpdateWithoutTagValuesInputObjectSchema } from './TagCategoriesUncheckedUpdateWithoutTagValuesInput.schema';
import { TagCategoriesCreateWithoutTagValuesInputObjectSchema as TagCategoriesCreateWithoutTagValuesInputObjectSchema } from './TagCategoriesCreateWithoutTagValuesInput.schema';
import { TagCategoriesUncheckedCreateWithoutTagValuesInputObjectSchema as TagCategoriesUncheckedCreateWithoutTagValuesInputObjectSchema } from './TagCategoriesUncheckedCreateWithoutTagValuesInput.schema';
import { TagCategoriesWhereInputObjectSchema as TagCategoriesWhereInputObjectSchema } from './TagCategoriesWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => TagCategoriesUpdateWithoutTagValuesInputObjectSchema), z.lazy(() => TagCategoriesUncheckedUpdateWithoutTagValuesInputObjectSchema)]),
  create: z.union([z.lazy(() => TagCategoriesCreateWithoutTagValuesInputObjectSchema), z.lazy(() => TagCategoriesUncheckedCreateWithoutTagValuesInputObjectSchema)]),
  where: z.lazy(() => TagCategoriesWhereInputObjectSchema).optional()
}).strict();
export const TagCategoriesUpsertWithoutTagValuesInputObjectSchema: z.ZodType<Prisma.TagCategoriesUpsertWithoutTagValuesInput> = makeSchema() as unknown as z.ZodType<Prisma.TagCategoriesUpsertWithoutTagValuesInput>;
export const TagCategoriesUpsertWithoutTagValuesInputObjectZodSchema = makeSchema();
