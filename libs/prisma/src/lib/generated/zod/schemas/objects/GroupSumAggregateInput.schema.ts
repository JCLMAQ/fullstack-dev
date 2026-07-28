import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  isDeleted: z.literal(true).optional(),
  orderGroup: z.literal(true).optional()
}).strict();
export const GroupSumAggregateInputObjectSchema: z.ZodType<Prisma.GroupSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.GroupSumAggregateInputType>;
export const GroupSumAggregateInputObjectZodSchema = makeSchema();
