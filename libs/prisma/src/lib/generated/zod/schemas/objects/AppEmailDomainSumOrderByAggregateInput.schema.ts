import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  isDeleted: SortOrderSchema.optional()
}).strict();
export const AppEmailDomainSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AppEmailDomainSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AppEmailDomainSumOrderByAggregateInput>;
export const AppEmailDomainSumOrderByAggregateInputObjectZodSchema = makeSchema();
