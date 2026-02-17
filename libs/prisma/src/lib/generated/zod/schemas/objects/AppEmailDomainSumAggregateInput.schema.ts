import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  isDeleted: z.literal(true).optional()
}).strict();
export const AppEmailDomainSumAggregateInputObjectSchema: z.ZodType<Prisma.AppEmailDomainSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AppEmailDomainSumAggregateInputType>;
export const AppEmailDomainSumAggregateInputObjectZodSchema = makeSchema();
