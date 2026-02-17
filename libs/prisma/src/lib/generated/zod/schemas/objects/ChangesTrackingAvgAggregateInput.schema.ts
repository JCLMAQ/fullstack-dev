import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  isDeleted: z.literal(true).optional()
}).strict();
export const ChangesTrackingAvgAggregateInputObjectSchema: z.ZodType<Prisma.ChangesTrackingAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ChangesTrackingAvgAggregateInputType>;
export const ChangesTrackingAvgAggregateInputObjectZodSchema = makeSchema();
