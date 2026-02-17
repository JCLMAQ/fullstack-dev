import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { OrganizationOrderByWithRelationInputObjectSchema as OrganizationOrderByWithRelationInputObjectSchema } from './OrganizationOrderByWithRelationInput.schema';
import { GroupOrderByRelationAggregateInputObjectSchema as GroupOrderByRelationAggregateInputObjectSchema } from './GroupOrderByRelationAggregateInput.schema';
import { TodoOrderByRelationAggregateInputObjectSchema as TodoOrderByRelationAggregateInputObjectSchema } from './TodoOrderByRelationAggregateInput.schema';
import { UserTodoLinkOrderByRelationAggregateInputObjectSchema as UserTodoLinkOrderByRelationAggregateInputObjectSchema } from './UserTodoLinkOrderByRelationAggregateInput.schema';
import { TaskOrderByRelationAggregateInputObjectSchema as TaskOrderByRelationAggregateInputObjectSchema } from './TaskOrderByRelationAggregateInput.schema';
import { TagValueOrderByRelationAggregateInputObjectSchema as TagValueOrderByRelationAggregateInputObjectSchema } from './TagValueOrderByRelationAggregateInput.schema'

const todoorderbywithrelationinputSchema = z.object({
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
  orderTodo: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  content: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  todoState: SortOrderSchema.optional(),
  mainTodoId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  owner: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  org: z.lazy(() => OrganizationOrderByWithRelationInputObjectSchema).optional(),
  groups: z.lazy(() => GroupOrderByRelationAggregateInputObjectSchema).optional(),
  mainTodo: z.lazy(() => TodoOrderByWithRelationInputObjectSchema).optional(),
  SubTodos: z.lazy(() => TodoOrderByRelationAggregateInputObjectSchema).optional(),
  Users: z.lazy(() => UserTodoLinkOrderByRelationAggregateInputObjectSchema).optional(),
  Tasks: z.lazy(() => TaskOrderByRelationAggregateInputObjectSchema).optional(),
  Tags: z.lazy(() => TagValueOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const TodoOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.TodoOrderByWithRelationInput> = todoorderbywithrelationinputSchema as unknown as z.ZodType<Prisma.TodoOrderByWithRelationInput>;
export const TodoOrderByWithRelationInputObjectZodSchema = todoorderbywithrelationinputSchema;
