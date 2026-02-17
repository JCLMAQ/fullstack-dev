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
export const ConfigParamCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ConfigParamCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ConfigParamCountOrderByAggregateInput>;
export const ConfigParamCountOrderByAggregateInputObjectZodSchema = makeSchema();
