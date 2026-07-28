import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TagCategoriesCreateWithoutTagValuesInputObjectSchema as TagCategoriesCreateWithoutTagValuesInputObjectSchema } from './TagCategoriesCreateWithoutTagValuesInput.schema';
import { TagCategoriesUncheckedCreateWithoutTagValuesInputObjectSchema as TagCategoriesUncheckedCreateWithoutTagValuesInputObjectSchema } from './TagCategoriesUncheckedCreateWithoutTagValuesInput.schema';
import { TagCategoriesCreateOrConnectWithoutTagValuesInputObjectSchema as TagCategoriesCreateOrConnectWithoutTagValuesInputObjectSchema } from './TagCategoriesCreateOrConnectWithoutTagValuesInput.schema';
import { TagCategoriesWhereUniqueInputObjectSchema as TagCategoriesWhereUniqueInputObjectSchema } from './TagCategoriesWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TagCategoriesCreateWithoutTagValuesInputObjectSchema), z.lazy(() => TagCategoriesUncheckedCreateWithoutTagValuesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TagCategoriesCreateOrConnectWithoutTagValuesInputObjectSchema).optional(),
  connect: z.lazy(() => TagCategoriesWhereUniqueInputObjectSchema).optional()
}).strict();
export const TagCategoriesCreateNestedOneWithoutTagValuesInputObjectSchema: z.ZodType<Prisma.TagCategoriesCreateNestedOneWithoutTagValuesInput> = makeSchema() as unknown as z.ZodType<Prisma.TagCategoriesCreateNestedOneWithoutTagValuesInput>;
export const TagCategoriesCreateNestedOneWithoutTagValuesInputObjectZodSchema = makeSchema();
