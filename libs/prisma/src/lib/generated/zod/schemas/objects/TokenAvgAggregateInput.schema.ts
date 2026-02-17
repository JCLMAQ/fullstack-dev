import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  isDeleted: z.literal(true).optional()
}).strict();
export const TokenAvgAggregateInputObjectSchema: z.ZodType<Prisma.TokenAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TokenAvgAggregateInputType>;
export const TokenAvgAggregateInputObjectZodSchema = makeSchema();
