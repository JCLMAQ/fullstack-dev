import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  isDeleted: z.literal(true).optional()
}).strict();
export const ApiKeySumAggregateInputObjectSchema: z.ZodType<Prisma.ApiKeySumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ApiKeySumAggregateInputType>;
export const ApiKeySumAggregateInputObjectZodSchema = makeSchema();
