import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
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
  owner: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  org: z.union([z.boolean(), z.lazy(() => OrganizationArgsObjectSchema)]).optional(),
  groups: z.union([z.boolean(), z.lazy(() => GroupFindManySchema)]).optional(),
  mainTodo: z.union([z.boolean(), z.lazy(() => TodoArgsObjectSchema)]).optional(),
  SubTodos: z.union([z.boolean(), z.lazy(() => TodoFindManySchema)]).optional(),
  Users: z.union([z.boolean(), z.lazy(() => UserTodoLinkFindManySchema)]).optional(),
  Tasks: z.union([z.boolean(), z.lazy(() => TaskFindManySchema)]).optional(),
  Tags: z.union([z.boolean(), z.lazy(() => TagValueFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => TodoCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const TodoIncludeObjectSchema: z.ZodType<Prisma.TodoInclude> = makeSchema() as unknown as z.ZodType<Prisma.TodoInclude>;
export const TodoIncludeObjectZodSchema = makeSchema();
