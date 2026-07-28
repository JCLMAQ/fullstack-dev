import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  isDeleted: z.literal(true).optional()
}).strict();
export const WordSumAggregateInputObjectSchema: z.ZodType<Prisma.WordSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.WordSumAggregateInputType>;
export const WordSumAggregateInputObjectZodSchema = makeSchema();
