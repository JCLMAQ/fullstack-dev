import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TodoCountOutputTypeCountGroupsArgsObjectSchema as TodoCountOutputTypeCountGroupsArgsObjectSchema } from './TodoCountOutputTypeCountGroupsArgs.schema';
import { TodoCountOutputTypeCountSubTodosArgsObjectSchema as TodoCountOutputTypeCountSubTodosArgsObjectSchema } from './TodoCountOutputTypeCountSubTodosArgs.schema';
import { TodoCountOutputTypeCountUsersArgsObjectSchema as TodoCountOutputTypeCountUsersArgsObjectSchema } from './TodoCountOutputTypeCountUsersArgs.schema';
import { TodoCountOutputTypeCountTasksArgsObjectSchema as TodoCountOutputTypeCountTasksArgsObjectSchema } from './TodoCountOutputTypeCountTasksArgs.schema';
import { TodoCountOutputTypeCountTagsArgsObjectSchema as TodoCountOutputTypeCountTagsArgsObjectSchema } from './TodoCountOutputTypeCountTagsArgs.schema'

const makeSchema = () => z.object({
  groups: z.union([z.boolean(), z.lazy(() => TodoCountOutputTypeCountGroupsArgsObjectSchema)]).optional(),
  SubTodos: z.union([z.boolean(), z.lazy(() => TodoCountOutputTypeCountSubTodosArgsObjectSchema)]).optional(),
  Users: z.union([z.boolean(), z.lazy(() => TodoCountOutputTypeCountUsersArgsObjectSchema)]).optional(),
  Tasks: z.union([z.boolean(), z.lazy(() => TodoCountOutputTypeCountTasksArgsObjectSchema)]).optional(),
  Tags: z.union([z.boolean(), z.lazy(() => TodoCountOutputTypeCountTagsArgsObjectSchema)]).optional()
}).strict();
export const TodoCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.TodoCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.TodoCountOutputTypeSelect>;
export const TodoCountOutputTypeSelectObjectZodSchema = makeSchema();
