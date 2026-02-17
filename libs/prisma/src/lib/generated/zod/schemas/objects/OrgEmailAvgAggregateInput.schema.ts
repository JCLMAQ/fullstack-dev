import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  isDeleted: z.literal(true).optional()
}).strict();
export const OrgEmailAvgAggregateInputObjectSchema: z.ZodType<Prisma.OrgEmailAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.OrgEmailAvgAggregateInputType>;
export const OrgEmailAvgAggregateInputObjectZodSchema = makeSchema();
