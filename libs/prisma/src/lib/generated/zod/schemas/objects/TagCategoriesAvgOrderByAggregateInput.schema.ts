import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  isDeleted: SortOrderSchema.optional()
}).strict();
export const TagCategoriesAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TagCategoriesAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TagCategoriesAvgOrderByAggregateInput>;
export const TagCategoriesAvgOrderByAggregateInputObjectZodSchema = makeSchema();
