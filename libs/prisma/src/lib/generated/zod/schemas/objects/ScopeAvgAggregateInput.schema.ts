import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  isDeleted: z.literal(true).optional()
}).strict();
export const ScopeAvgAggregateInputObjectSchema: z.ZodType<Prisma.ScopeAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ScopeAvgAggregateInputType>;
export const ScopeAvgAggregateInputObjectZodSchema = makeSchema();
