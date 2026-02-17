import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  isDeleted: z.literal(true).optional(),
  emailOrgId: z.literal(true).optional()
}).strict();
export const OrgEmailUseToAvgAggregateInputObjectSchema: z.ZodType<Prisma.OrgEmailUseToAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.OrgEmailUseToAvgAggregateInputType>;
export const OrgEmailUseToAvgAggregateInputObjectZodSchema = makeSchema();
