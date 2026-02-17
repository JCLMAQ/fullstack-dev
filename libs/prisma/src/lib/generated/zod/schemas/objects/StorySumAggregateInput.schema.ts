import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  numSeq: z.literal(true).optional(),
  isDeleted: z.literal(true).optional()
}).strict();
export const StorySumAggregateInputObjectSchema: z.ZodType<Prisma.StorySumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.StorySumAggregateInputType>;
export const StorySumAggregateInputObjectZodSchema = makeSchema();
