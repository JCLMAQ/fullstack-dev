import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  isDeleted: z.literal(true).optional()
}).strict();
export const RefreshTokenSumAggregateInputObjectSchema: z.ZodType<Prisma.RefreshTokenSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.RefreshTokenSumAggregateInputType>;
export const RefreshTokenSumAggregateInputObjectZodSchema = makeSchema();
