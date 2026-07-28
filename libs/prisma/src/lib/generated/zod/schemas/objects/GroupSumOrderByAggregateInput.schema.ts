import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  isDeleted: SortOrderSchema.optional(),
  orderGroup: SortOrderSchema.optional()
}).strict();
export const GroupSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.GroupSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupSumOrderByAggregateInput>;
export const GroupSumOrderByAggregateInputObjectZodSchema = makeSchema();
