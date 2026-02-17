import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  published: SortOrderSchema.optional(),
  isPublic: SortOrderSchema.optional(),
  isDeleted: SortOrderSchema.optional(),
  isDeletedDT: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  value: SortOrderSchema.optional(),
  utility: SortOrderSchema.optional()
}).strict();
export const ConfigParamMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ConfigParamMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ConfigParamMinOrderByAggregateInput>;
export const ConfigParamMinOrderByAggregateInputObjectZodSchema = makeSchema();
