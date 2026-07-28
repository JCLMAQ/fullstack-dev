import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { UserOrderByRelationAggregateInputObjectSchema as UserOrderByRelationAggregateInputObjectSchema } from './UserOrderByRelationAggregateInput.schema';
import { TaskOrderByRelationAggregateInputObjectSchema as TaskOrderByRelationAggregateInputObjectSchema } from './TaskOrderByRelationAggregateInput.schema';
import { TodoOrderByRelationAggregateInputObjectSchema as TodoOrderByRelationAggregateInputObjectSchema } from './TodoOrderByRelationAggregateInput.schema';
import { PostOrderByRelationAggregateInputObjectSchema as PostOrderByRelationAggregateInputObjectSchema } from './PostOrderByRelationAggregateInput.schema';
import { FileOrderByRelationAggregateInputObjectSchema as FileOrderByRelationAggregateInputObjectSchema } from './FileOrderByRelationAggregateInput.schema';
import { OrganizationOrderByWithRelationInputObjectSchema as OrganizationOrderByWithRelationInputObjectSchema } from './OrganizationOrderByWithRelationInput.schema';
import { TagValueOrderByRelationAggregateInputObjectSchema as TagValueOrderByRelationAggregateInputObjectSchema } from './TagValueOrderByRelationAggregateInput.schema'

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
  owner: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  Members: z.lazy(() => UserOrderByRelationAggregateInputObjectSchema).optional(),
  Tasks: z.lazy(() => TaskOrderByRelationAggregateInputObjectSchema).optional(),
  Todos: z.lazy(() => TodoOrderByRelationAggregateInputObjectSchema).optional(),
  Posts: z.lazy(() => PostOrderByRelationAggregateInputObjectSchema).optional(),
  Files: z.lazy(() => FileOrderByRelationAggregateInputObjectSchema).optional(),
  org: z.lazy(() => OrganizationOrderByWithRelationInputObjectSchema).optional(),
  Tags: z.lazy(() => TagValueOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const GroupOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.GroupOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupOrderByWithRelationInput>;
export const GroupOrderByWithRelationInputObjectZodSchema = makeSchema();
