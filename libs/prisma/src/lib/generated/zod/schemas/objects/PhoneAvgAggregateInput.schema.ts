import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const PhoneAvgAggregateInputObjectSchema: z.ZodType<Prisma.PhoneAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.PhoneAvgAggregateInputType>;
export const PhoneAvgAggregateInputObjectZodSchema = makeSchema();
