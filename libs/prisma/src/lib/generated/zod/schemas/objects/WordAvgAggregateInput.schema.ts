import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  isDeleted: z.literal(true).optional()
}).strict();
export const WordAvgAggregateInputObjectSchema: z.ZodType<Prisma.WordAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.WordAvgAggregateInputType>;
export const WordAvgAggregateInputObjectZodSchema = makeSchema();
