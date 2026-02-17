import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  numSeq: z.literal(true).optional(),
  isDeleted: z.literal(true).optional(),
  orderTodo: z.literal(true).optional()
}).strict();
export const TodoSumAggregateInputObjectSchema: z.ZodType<Prisma.TodoSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TodoSumAggregateInputType>;
export const TodoSumAggregateInputObjectZodSchema = makeSchema();
