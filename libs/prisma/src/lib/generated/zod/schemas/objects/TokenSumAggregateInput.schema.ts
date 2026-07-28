import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  isDeleted: z.literal(true).optional()
}).strict();
export const TokenSumAggregateInputObjectSchema: z.ZodType<Prisma.TokenSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TokenSumAggregateInputType>;
export const TokenSumAggregateInputObjectZodSchema = makeSchema();
