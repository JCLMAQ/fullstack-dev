import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  isDeleted: z.literal(true).optional()
}).strict();
export const OrgDomainAvgAggregateInputObjectSchema: z.ZodType<Prisma.OrgDomainAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.OrgDomainAvgAggregateInputType>;
export const OrgDomainAvgAggregateInputObjectZodSchema = makeSchema();
