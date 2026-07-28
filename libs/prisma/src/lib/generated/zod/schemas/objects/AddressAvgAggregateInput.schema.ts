import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const AddressAvgAggregateInputObjectSchema: z.ZodType<Prisma.AddressAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AddressAvgAggregateInputType>;
export const AddressAvgAggregateInputObjectZodSchema = makeSchema();
