import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { OrganizationArgsObjectSchema as OrganizationArgsObjectSchema } from './OrganizationArgs.schema';
import { GroupFindManySchema as GroupFindManySchema } from '../findManyGroup.schema';
import { TodoArgsObjectSchema as TodoArgsObjectSchema } from './TodoArgs.schema';
import { TodoFindManySchema as TodoFindManySchema } from '../findManyTodo.schema';
import { UserTodoLinkFindManySchema as UserTodoLinkFindManySchema } from '../findManyUserTodoLink.schema';
import { TaskFindManySchema as TaskFindManySchema } from '../findManyTask.schema';
import { TagValueFindManySchema as TagValueFindManySchema } from '../findManyTagValue.schema';
import { TodoCountOutputTypeArgsObjectSchema as TodoCountOutputTypeArgsObjectSchema } from './TodoCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  numSeq: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  published: z.boolean().optional(),
  isDeleted: z.boolean().optional(),
  isDeletedDT: z.boolean().optional(),
  isPublic: z.boolean().optional(),
  owner: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  ownerId: z.boolean().optional(),
  org: z.union([z.boolean(), z.lazy(() => OrganizationArgsObjectSchema)]).optional(),
  orgId: z.boolean().optional(),
  groups: z.union([z.boolean(), z.lazy(() => GroupFindManySchema)]).optional(),
  orderTodo: z.boolean().optional(),
  title: z.boolean().optional(),
  content: z.boolean().optional(),
  todoState: z.boolean().optional(),
  mainTodo: z.union([z.boolean(), z.lazy(() => TodoArgsObjectSchema)]).optional(),
  mainTodoId: z.boolean().optional(),
  SubTodos: z.union([z.boolean(), z.lazy(() => TodoFindManySchema)]).optional(),
  Users: z.union([z.boolean(), z.lazy(() => UserTodoLinkFindManySchema)]).optional(),
  Tasks: z.union([z.boolean(), z.lazy(() => TaskFindManySchema)]).optional(),
  Tags: z.union([z.boolean(), z.lazy(() => TagValueFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => TodoCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const TodoSelectObjectSchema: z.ZodType<Prisma.TodoSelect> = makeSchema() as unknown as z.ZodType<Prisma.TodoSelect>;
export const TodoSelectObjectZodSchema = makeSchema();
