import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  isDeleted: SortOrderSchema.optional(),
  position: SortOrderSchema.optional(),
  tagCategoriesId: SortOrderSchema.optional(),
  mainTagId: SortOrderSchema.optional()
}).strict();
export const TagValueSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TagValueSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TagValueSumOrderByAggregateInput>;
export const TagValueSumOrderByAggregateInputObjectZodSchema = makeSchema();
