import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  isDeleted: z.literal(true).optional()
}).strict();
export const ScopeSumAggregateInputObjectSchema: z.ZodType<Prisma.ScopeSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ScopeSumAggregateInputType>;
export const ScopeSumAggregateInputObjectZodSchema = makeSchema();
