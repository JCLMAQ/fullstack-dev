import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  numSeq: z.literal(true).optional(),
  isDeleted: z.literal(true).optional(),
  orderTask: z.literal(true).optional()
}).strict();
export const TaskAvgAggregateInputObjectSchema: z.ZodType<Prisma.TaskAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TaskAvgAggregateInputType>;
export const TaskAvgAggregateInputObjectZodSchema = makeSchema();
