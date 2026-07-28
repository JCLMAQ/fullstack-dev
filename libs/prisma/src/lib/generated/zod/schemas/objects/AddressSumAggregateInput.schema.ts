import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const AddressSumAggregateInputObjectSchema: z.ZodType<Prisma.AddressSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AddressSumAggregateInputType>;
export const AddressSumAggregateInputObjectZodSchema = makeSchema();
