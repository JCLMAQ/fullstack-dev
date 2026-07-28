import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  isDeleted: SortOrderSchema.optional(),
  position: SortOrderSchema.optional(),
  tagCategoriesId: SortOrderSchema.optional(),
  mainTagId: SortOrderSchema.optional()
}).strict();
export const TagValueAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TagValueAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TagValueAvgOrderByAggregateInput>;
export const TagValueAvgOrderByAggregateInputObjectZodSchema = makeSchema();
