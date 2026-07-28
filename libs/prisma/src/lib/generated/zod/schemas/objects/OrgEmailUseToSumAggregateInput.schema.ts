import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  isDeleted: z.literal(true).optional(),
  emailOrgId: z.literal(true).optional()
}).strict();
export const OrgEmailUseToSumAggregateInputObjectSchema: z.ZodType<Prisma.OrgEmailUseToSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.OrgEmailUseToSumAggregateInputType>;
export const OrgEmailUseToSumAggregateInputObjectZodSchema = makeSchema();
