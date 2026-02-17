import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  isDeleted: z.literal(true).optional()
}).strict();
export const OrgDomainSumAggregateInputObjectSchema: z.ZodType<Prisma.OrgDomainSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.OrgDomainSumAggregateInputType>;
export const OrgDomainSumAggregateInputObjectZodSchema = makeSchema();
