import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const OrgEmailOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.OrgEmailOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.OrgEmailOrderByRelationAggregateInput>;
export const OrgEmailOrderByRelationAggregateInputObjectZodSchema = makeSchema();
