import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  isDeleted: SortOrderSchema.optional(),
  emailOrgId: SortOrderSchema.optional()
}).strict();
export const OrgEmailUseToSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.OrgEmailUseToSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.OrgEmailUseToSumOrderByAggregateInput>;
export const OrgEmailUseToSumOrderByAggregateInputObjectZodSchema = makeSchema();
