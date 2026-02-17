import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TagCategoriesCreateWithoutTagValuesInputObjectSchema as TagCategoriesCreateWithoutTagValuesInputObjectSchema } from './TagCategoriesCreateWithoutTagValuesInput.schema';
import { TagCategoriesUncheckedCreateWithoutTagValuesInputObjectSchema as TagCategoriesUncheckedCreateWithoutTagValuesInputObjectSchema } from './TagCategoriesUncheckedCreateWithoutTagValuesInput.schema';
import { TagCategoriesCreateOrConnectWithoutTagValuesInputObjectSchema as TagCategoriesCreateOrConnectWithoutTagValuesInputObjectSchema } from './TagCategoriesCreateOrConnectWithoutTagValuesInput.schema';
import { TagCategoriesUpsertWithoutTagValuesInputObjectSchema as TagCategoriesUpsertWithoutTagValuesInputObjectSchema } from './TagCategoriesUpsertWithoutTagValuesInput.schema';
import { TagCategoriesWhereUniqueInputObjectSchema as TagCategoriesWhereUniqueInputObjectSchema } from './TagCategoriesWhereUniqueInput.schema';
import { TagCategoriesUpdateToOneWithWhereWithoutTagValuesInputObjectSchema as TagCategoriesUpdateToOneWithWhereWithoutTagValuesInputObjectSchema } from './TagCategoriesUpdateToOneWithWhereWithoutTagValuesInput.schema';
import { TagCategoriesUpdateWithoutTagValuesInputObjectSchema as TagCategoriesUpdateWithoutTagValuesInputObjectSchema } from './TagCategoriesUpdateWithoutTagValuesInput.schema';
import { TagCategoriesUncheckedUpdateWithoutTagValuesInputObjectSchema as TagCategoriesUncheckedUpdateWithoutTagValuesInputObjectSchema } from './TagCategoriesUncheckedUpdateWithoutTagValuesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TagCategoriesCreateWithoutTagValuesInputObjectSchema), z.lazy(() => TagCategoriesUncheckedCreateWithoutTagValuesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TagCategoriesCreateOrConnectWithoutTagValuesInputObjectSchema).optional(),
  upsert: z.lazy(() => TagCategoriesUpsertWithoutTagValuesInputObjectSchema).optional(),
  connect: z.lazy(() => TagCategoriesWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => TagCategoriesUpdateToOneWithWhereWithoutTagValuesInputObjectSchema), z.lazy(() => TagCategoriesUpdateWithoutTagValuesInputObjectSchema), z.lazy(() => TagCategoriesUncheckedUpdateWithoutTagValuesInputObjectSchema)]).optional()
}).strict();
export const TagCategoriesUpdateOneRequiredWithoutTagValuesNestedInputObjectSchema: z.ZodType<Prisma.TagCategoriesUpdateOneRequiredWithoutTagValuesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TagCategoriesUpdateOneRequiredWithoutTagValuesNestedInput>;
export const TagCategoriesUpdateOneRequiredWithoutTagValuesNestedInputObjectZodSchema = makeSchema();
