import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  isDeleted: SortOrderSchema.optional(),
  orderGroup: SortOrderSchema.optional()
}).strict();
export const GroupAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.GroupAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupAvgOrderByAggregateInput>;
export const GroupAvgOrderByAggregateInputObjectZodSchema = makeSchema();
