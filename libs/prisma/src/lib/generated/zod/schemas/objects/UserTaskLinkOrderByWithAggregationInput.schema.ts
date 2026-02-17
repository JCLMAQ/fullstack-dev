import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserTaskLinkCountOrderByAggregateInputObjectSchema as UserTaskLinkCountOrderByAggregateInputObjectSchema } from './UserTaskLinkCountOrderByAggregateInput.schema';
import { UserTaskLinkMaxOrderByAggregateInputObjectSchema as UserTaskLinkMaxOrderByAggregateInputObjectSchema } from './UserTaskLinkMaxOrderByAggregateInput.schema';
import { UserTaskLinkMinOrderByAggregateInputObjectSchema as UserTaskLinkMinOrderByAggregateInputObjectSchema } from './UserTaskLinkMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  userId: SortOrderSchema.optional(),
  taskId: SortOrderSchema.optional(),
  isAuthor: SortOrderSchema.optional(),
  isAssigned: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  comment: SortOrderSchema.optional(),
  _count: z.lazy(() => UserTaskLinkCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => UserTaskLinkMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => UserTaskLinkMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const UserTaskLinkOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.UserTaskLinkOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.UserTaskLinkOrderByWithAggregationInput>;
export const UserTaskLinkOrderByWithAggregationInputObjectZodSchema = makeSchema();
