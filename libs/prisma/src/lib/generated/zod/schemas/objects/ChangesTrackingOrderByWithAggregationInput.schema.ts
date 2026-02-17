import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ChangesTrackingCountOrderByAggregateInputObjectSchema as ChangesTrackingCountOrderByAggregateInputObjectSchema } from './ChangesTrackingCountOrderByAggregateInput.schema';
import { ChangesTrackingAvgOrderByAggregateInputObjectSchema as ChangesTrackingAvgOrderByAggregateInputObjectSchema } from './ChangesTrackingAvgOrderByAggregateInput.schema';
import { ChangesTrackingMaxOrderByAggregateInputObjectSchema as ChangesTrackingMaxOrderByAggregateInputObjectSchema } from './ChangesTrackingMaxOrderByAggregateInput.schema';
import { ChangesTrackingMinOrderByAggregateInputObjectSchema as ChangesTrackingMinOrderByAggregateInputObjectSchema } from './ChangesTrackingMinOrderByAggregateInput.schema';
import { ChangesTrackingSumOrderByAggregateInputObjectSchema as ChangesTrackingSumOrderByAggregateInputObjectSchema } from './ChangesTrackingSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  published: SortOrderSchema.optional(),
  isPublic: SortOrderSchema.optional(),
  isDeleted: SortOrderSchema.optional(),
  isDeletedDT: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  doneAt: SortOrderSchema.optional(),
  modifiedById: SortOrderSchema.optional(),
  modelName: SortOrderSchema.optional(),
  recordId: SortOrderSchema.optional(),
  operation: SortOrderSchema.optional(),
  newData: SortOrderSchema.optional(),
  oldData: SortOrderSchema.optional(),
  _count: z.lazy(() => ChangesTrackingCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => ChangesTrackingAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ChangesTrackingMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ChangesTrackingMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => ChangesTrackingSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ChangesTrackingOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ChangesTrackingOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ChangesTrackingOrderByWithAggregationInput>;
export const ChangesTrackingOrderByWithAggregationInputObjectZodSchema = makeSchema();
