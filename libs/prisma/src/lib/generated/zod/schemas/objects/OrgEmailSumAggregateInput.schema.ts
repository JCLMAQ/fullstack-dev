import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  isDeleted: z.literal(true).optional()
}).strict();
export const OrgEmailSumAggregateInputObjectSchema: z.ZodType<Prisma.OrgEmailSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.OrgEmailSumAggregateInputType>;
export const OrgEmailSumAggregateInputObjectZodSchema = makeSchema();
