import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  numSeq: SortOrderSchema.optional(),
  isDeleted: SortOrderSchema.optional(),
  orderTask: SortOrderSchema.optional()
}).strict();
export const TaskAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TaskAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskAvgOrderByAggregateInput>;
export const TaskAvgOrderByAggregateInputObjectZodSchema = makeSchema();
