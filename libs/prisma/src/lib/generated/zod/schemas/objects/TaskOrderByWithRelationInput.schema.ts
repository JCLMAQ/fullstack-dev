import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { OrganizationOrderByWithRelationInputObjectSchema as OrganizationOrderByWithRelationInputObjectSchema } from './OrganizationOrderByWithRelationInput.schema';
import { GroupOrderByRelationAggregateInputObjectSchema as GroupOrderByRelationAggregateInputObjectSchema } from './GroupOrderByRelationAggregateInput.schema';
import { TaskOrderByRelationAggregateInputObjectSchema as TaskOrderByRelationAggregateInputObjectSchema } from './TaskOrderByRelationAggregateInput.schema';
import { UserTaskLinkOrderByRelationAggregateInputObjectSchema as UserTaskLinkOrderByRelationAggregateInputObjectSchema } from './UserTaskLinkOrderByRelationAggregateInput.schema';
import { TodoOrderByWithRelationInputObjectSchema as TodoOrderByWithRelationInputObjectSchema } from './TodoOrderByWithRelationInput.schema';
import { TagValueOrderByRelationAggregateInputObjectSchema as TagValueOrderByRelationAggregateInputObjectSchema } from './TagValueOrderByRelationAggregateInput.schema'

const taskorderbywithrelationinputSchema = z.object({
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
  owner: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  org: z.lazy(() => OrganizationOrderByWithRelationInputObjectSchema).optional(),
  groups: z.lazy(() => GroupOrderByRelationAggregateInputObjectSchema).optional(),
  mainTask: z.lazy(() => TaskOrderByWithRelationInputObjectSchema).optional(),
  SubTasks: z.lazy(() => TaskOrderByRelationAggregateInputObjectSchema).optional(),
  Users: z.lazy(() => UserTaskLinkOrderByRelationAggregateInputObjectSchema).optional(),
  todo: z.lazy(() => TodoOrderByWithRelationInputObjectSchema).optional(),
  Tags: z.lazy(() => TagValueOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const TaskOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.TaskOrderByWithRelationInput> = taskorderbywithrelationinputSchema as unknown as z.ZodType<Prisma.TaskOrderByWithRelationInput>;
export const TaskOrderByWithRelationInputObjectZodSchema = taskorderbywithrelationinputSchema;
