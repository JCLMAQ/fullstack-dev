import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  isDeleted: SortOrderSchema.optional()
}).strict();
export const TagCategoriesSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TagCategoriesSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TagCategoriesSumOrderByAggregateInput>;
export const TagCategoriesSumOrderByAggregateInputObjectZodSchema = makeSchema();
