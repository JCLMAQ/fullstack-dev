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
  orderTodo: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  content: SortOrderSchema.optional(),
  todoState: SortOrderSchema.optional(),
  mainTodoId: SortOrderSchema.optional()
}).strict();
export const TodoCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TodoCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoCountOrderByAggregateInput>;
export const TodoCountOrderByAggregateInputObjectZodSchema = makeSchema();
