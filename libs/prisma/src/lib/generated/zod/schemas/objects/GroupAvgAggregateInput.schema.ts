import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  isDeleted: z.literal(true).optional(),
  orderGroup: z.literal(true).optional()
}).strict();
export const GroupAvgAggregateInputObjectSchema: z.ZodType<Prisma.GroupAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.GroupAvgAggregateInputType>;
export const GroupAvgAggregateInputObjectZodSchema = makeSchema();
