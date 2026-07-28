import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TagCategoriesWhereUniqueInputObjectSchema as TagCategoriesWhereUniqueInputObjectSchema } from './TagCategoriesWhereUniqueInput.schema';
import { TagCategoriesCreateWithoutTagValuesInputObjectSchema as TagCategoriesCreateWithoutTagValuesInputObjectSchema } from './TagCategoriesCreateWithoutTagValuesInput.schema';
import { TagCategoriesUncheckedCreateWithoutTagValuesInputObjectSchema as TagCategoriesUncheckedCreateWithoutTagValuesInputObjectSchema } from './TagCategoriesUncheckedCreateWithoutTagValuesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TagCategoriesWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TagCategoriesCreateWithoutTagValuesInputObjectSchema), z.lazy(() => TagCategoriesUncheckedCreateWithoutTagValuesInputObjectSchema)])
}).strict();
export const TagCategoriesCreateOrConnectWithoutTagValuesInputObjectSchema: z.ZodType<Prisma.TagCategoriesCreateOrConnectWithoutTagValuesInput> = makeSchema() as unknown as z.ZodType<Prisma.TagCategoriesCreateOrConnectWithoutTagValuesInput>;
export const TagCategoriesCreateOrConnectWithoutTagValuesInputObjectZodSchema = makeSchema();
