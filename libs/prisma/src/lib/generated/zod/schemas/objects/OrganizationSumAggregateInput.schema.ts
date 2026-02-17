import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  numSeq: z.literal(true).optional(),
  isDeleted: z.literal(true).optional()
}).strict();
export const OrganizationSumAggregateInputObjectSchema: z.ZodType<Prisma.OrganizationSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationSumAggregateInputType>;
export const OrganizationSumAggregateInputObjectZodSchema = makeSchema();
