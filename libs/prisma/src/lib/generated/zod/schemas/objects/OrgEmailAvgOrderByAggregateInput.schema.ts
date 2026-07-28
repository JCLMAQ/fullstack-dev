import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  isDeleted: SortOrderSchema.optional()
}).strict();
export const OrgEmailAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.OrgEmailAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.OrgEmailAvgOrderByAggregateInput>;
export const OrgEmailAvgOrderByAggregateInputObjectZodSchema = makeSchema();
