import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  numSeq: z.literal(true).optional(),
  isDeleted: z.literal(true).optional(),
  orderTask: z.literal(true).optional()
}).strict();
export const TaskSumAggregateInputObjectSchema: z.ZodType<Prisma.TaskSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TaskSumAggregateInputType>;
export const TaskSumAggregateInputObjectZodSchema = makeSchema();
