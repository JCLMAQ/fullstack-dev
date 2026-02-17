import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserTodoLinkCountOrderByAggregateInputObjectSchema as UserTodoLinkCountOrderByAggregateInputObjectSchema } from './UserTodoLinkCountOrderByAggregateInput.schema';
import { UserTodoLinkMaxOrderByAggregateInputObjectSchema as UserTodoLinkMaxOrderByAggregateInputObjectSchema } from './UserTodoLinkMaxOrderByAggregateInput.schema';
import { UserTodoLinkMinOrderByAggregateInputObjectSchema as UserTodoLinkMinOrderByAggregateInputObjectSchema } from './UserTodoLinkMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  userId: SortOrderSchema.optional(),
  todoId: SortOrderSchema.optional(),
  isAuthor: SortOrderSchema.optional(),
  isAssigned: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  comment: SortOrderSchema.optional(),
  _count: z.lazy(() => UserTodoLinkCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => UserTodoLinkMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => UserTodoLinkMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const UserTodoLinkOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.UserTodoLinkOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.UserTodoLinkOrderByWithAggregationInput>;
export const UserTodoLinkOrderByWithAggregationInputObjectZodSchema = makeSchema();
