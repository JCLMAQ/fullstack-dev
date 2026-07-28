import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  numSeq: SortOrderSchema.optional(),
  isDeleted: SortOrderSchema.optional()
}).strict();
export const OrganizationSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.OrganizationSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.OrganizationSumOrderByAggregateInput>;
export const OrganizationSumOrderByAggregateInputObjectZodSchema = makeSchema();
