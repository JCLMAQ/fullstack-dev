import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const OrgEmailUseToOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.OrgEmailUseToOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.OrgEmailUseToOrderByRelationAggregateInput>;
export const OrgEmailUseToOrderByRelationAggregateInputObjectZodSchema = makeSchema();
