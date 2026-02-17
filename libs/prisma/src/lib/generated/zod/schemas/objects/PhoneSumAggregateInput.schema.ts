import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const PhoneSumAggregateInputObjectSchema: z.ZodType<Prisma.PhoneSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.PhoneSumAggregateInputType>;
export const PhoneSumAggregateInputObjectZodSchema = makeSchema();
