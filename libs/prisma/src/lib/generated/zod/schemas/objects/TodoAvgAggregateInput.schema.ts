import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';


const makeSchema = () => z.object({
  numSeq: z.literal(true).optional(),
  isDeleted: z.literal(true).optional(),
  orderTodo: z.literal(true).optional()
}).strict();
export const TodoAvgAggregateInputObjectSchema: z.ZodType<Prisma.TodoAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TodoAvgAggregateInputType>;
export const TodoAvgAggregateInputObjectZodSchema = makeSchema();
