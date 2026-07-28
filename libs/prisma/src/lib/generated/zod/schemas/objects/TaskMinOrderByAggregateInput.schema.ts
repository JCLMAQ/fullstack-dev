import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  numSeq: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  published: SortOrderSchema.optional(),
  isDeleted: SortOrderSchema.optional(),
  isDeletedDT: SortOrderSchema.optional(),
  isPublic: SortOrderSchema.optional(),
  ownerId: SortOrderSchema.optional(),
  orgId: SortOrderSchema.optional(),
  orderTask: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  content: SortOrderSchema.optional(),
  taskState: SortOrderSchema.optional(),
  mainTaskId: SortOrderSchema.optional(),
  todoId: SortOrderSchema.optional()
}).strict();
export const TaskMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TaskMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskMinOrderByAggregateInput>;
export const TaskMinOrderByAggregateInputObjectZodSchema = makeSchema();
