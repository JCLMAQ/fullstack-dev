import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { GroupCountOrderByAggregateInputObjectSchema as GroupCountOrderByAggregateInputObjectSchema } from './GroupCountOrderByAggregateInput.schema';
import { GroupAvgOrderByAggregateInputObjectSchema as GroupAvgOrderByAggregateInputObjectSchema } from './GroupAvgOrderByAggregateInput.schema';
import { GroupMaxOrderByAggregateInputObjectSchema as GroupMaxOrderByAggregateInputObjectSchema } from './GroupMaxOrderByAggregateInput.schema';
import { GroupMinOrderByAggregateInputObjectSchema as GroupMinOrderByAggregateInputObjectSchema } from './GroupMinOrderByAggregateInput.schema';
import { GroupSumOrderByAggregateInputObjectSchema as GroupSumOrderByAggregateInputObjectSchema } from './GroupSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  published: SortOrderSchema.optional(),
  isPublic: SortOrderSchema.optional(),
  isDeleted: SortOrderSchema.optional(),
  isDeletedDT: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  orderGroup: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  ownerId: SortOrderSchema.optional(),
  isActiv: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  orgId: SortOrderSchema.optional(),
  _count: z.lazy(() => GroupCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => GroupAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => GroupMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => GroupMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => GroupSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const GroupOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.GroupOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupOrderByWithAggregationInput>;
export const GroupOrderByWithAggregationInputObjectZodSchema = makeSchema();
