import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  isDeleted: z.literal(true).optional()
}).strict();
export const ApiKeyAvgAggregateInputObjectSchema: z.ZodType<Prisma.ApiKeyAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ApiKeyAvgAggregateInputType>;
export const ApiKeyAvgAggregateInputObjectZodSchema = makeSchema();
