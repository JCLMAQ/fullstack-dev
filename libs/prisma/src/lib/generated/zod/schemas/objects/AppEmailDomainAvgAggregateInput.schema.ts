import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  isDeleted: z.literal(true).optional()
}).strict();
export const AppEmailDomainAvgAggregateInputObjectSchema: z.ZodType<Prisma.AppEmailDomainAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AppEmailDomainAvgAggregateInputType>;
export const AppEmailDomainAvgAggregateInputObjectZodSchema = makeSchema();
