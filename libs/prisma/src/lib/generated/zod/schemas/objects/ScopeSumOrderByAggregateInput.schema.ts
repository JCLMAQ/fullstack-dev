import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  isDeleted: SortOrderSchema.optional()
}).strict();
export const ScopeSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ScopeSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ScopeSumOrderByAggregateInput>;
export const ScopeSumOrderByAggregateInputObjectZodSchema = makeSchema();
