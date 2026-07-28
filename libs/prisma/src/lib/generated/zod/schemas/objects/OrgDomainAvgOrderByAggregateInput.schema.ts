import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  isDeleted: SortOrderSchema.optional()
}).strict();
export const OrgDomainAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.OrgDomainAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.OrgDomainAvgOrderByAggregateInput>;
export const OrgDomainAvgOrderByAggregateInputObjectZodSchema = makeSchema();
