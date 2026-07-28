import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  numSeq: SortOrderSchema.optional(),
  isDeleted: SortOrderSchema.optional(),
  orderTodo: SortOrderSchema.optional()
}).strict();
export const TodoSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TodoSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoSumOrderByAggregateInput>;
export const TodoSumOrderByAggregateInputObjectZodSchema = makeSchema();
