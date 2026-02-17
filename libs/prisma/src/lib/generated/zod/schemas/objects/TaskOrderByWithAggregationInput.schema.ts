import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TaskCountOrderByAggregateInputObjectSchema as TaskCountOrderByAggregateInputObjectSchema } from './TaskCountOrderByAggregateInput.schema';
import { TaskAvgOrderByAggregateInputObjectSchema as TaskAvgOrderByAggregateInputObjectSchema } from './TaskAvgOrderByAggregateInput.schema';
import { TaskMaxOrderByAggregateInputObjectSchema as TaskMaxOrderByAggregateInputObjectSchema } from './TaskMaxOrderByAggregateInput.schema';
import { TaskMinOrderByAggregateInputObjectSchema as TaskMinOrderByAggregateInputObjectSchema } from './TaskMinOrderByAggregateInput.schema';
import { TaskSumOrderByAggregateInputObjectSchema as TaskSumOrderByAggregateInputObjectSchema } from './TaskSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  numSeq: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  published: SortOrderSchema.optional(),
  isDeleted: SortOrderSchema.optional(),
  isDeletedDT: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  isPublic: SortOrderSchema.optional(),
  ownerId: SortOrderSchema.optional(),
  orgId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  orderTask: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  content: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  taskState: SortOrderSchema.optional(),
  mainTaskId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  todoId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => TaskCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => TaskAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => TaskMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => TaskMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => TaskSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const TaskOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.TaskOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskOrderByWithAggregationInput>;
export const TaskOrderByWithAggregationInputObjectZodSchema = makeSchema();
