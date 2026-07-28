import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  isDeleted: SortOrderSchema.optional()
}).strict();
export const AppEmailDomainAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AppEmailDomainAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AppEmailDomainAvgOrderByAggregateInput>;
export const AppEmailDomainAvgOrderByAggregateInputObjectZodSchema = makeSchema();
