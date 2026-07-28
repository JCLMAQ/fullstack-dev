import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { TodoOrderByWithRelationInputObjectSchema as TodoOrderByWithRelationInputObjectSchema } from './TodoOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  userId: SortOrderSchema.optional(),
  todoId: SortOrderSchema.optional(),
  isAuthor: SortOrderSchema.optional(),
  isAssigned: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  comment: SortOrderSchema.optional(),
  user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  todo: z.lazy(() => TodoOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const UserTodoLinkOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.UserTodoLinkOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.UserTodoLinkOrderByWithRelationInput>;
export const UserTodoLinkOrderByWithRelationInputObjectZodSchema = makeSchema();
