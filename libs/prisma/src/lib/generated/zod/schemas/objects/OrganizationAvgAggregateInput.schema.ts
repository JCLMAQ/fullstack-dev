import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  numSeq: z.literal(true).optional(),
  isDeleted: z.literal(true).optional()
}).strict();
export const OrganizationAvgAggregateInputObjectSchema: z.ZodType<Prisma.OrganizationAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationAvgAggregateInputType>;
export const OrganizationAvgAggregateInputObjectZodSchema = makeSchema();
