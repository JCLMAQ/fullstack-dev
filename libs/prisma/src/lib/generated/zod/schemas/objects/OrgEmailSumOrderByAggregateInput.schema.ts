import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  isDeleted: SortOrderSchema.optional()
}).strict();
export const OrgEmailSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.OrgEmailSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.OrgEmailSumOrderByAggregateInput>;
export const OrgEmailSumOrderByAggregateInputObjectZodSchema = makeSchema();
