import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TaskCountOutputTypeCountGroupsArgsObjectSchema as TaskCountOutputTypeCountGroupsArgsObjectSchema } from './TaskCountOutputTypeCountGroupsArgs.schema';
import { TaskCountOutputTypeCountSubTasksArgsObjectSchema as TaskCountOutputTypeCountSubTasksArgsObjectSchema } from './TaskCountOutputTypeCountSubTasksArgs.schema';
import { TaskCountOutputTypeCountUsersArgsObjectSchema as TaskCountOutputTypeCountUsersArgsObjectSchema } from './TaskCountOutputTypeCountUsersArgs.schema';
import { TaskCountOutputTypeCountTagsArgsObjectSchema as TaskCountOutputTypeCountTagsArgsObjectSchema } from './TaskCountOutputTypeCountTagsArgs.schema'

const makeSchema = () => z.object({
  groups: z.union([z.boolean(), z.lazy(() => TaskCountOutputTypeCountGroupsArgsObjectSchema)]).optional(),
  SubTasks: z.union([z.boolean(), z.lazy(() => TaskCountOutputTypeCountSubTasksArgsObjectSchema)]).optional(),
  Users: z.union([z.boolean(), z.lazy(() => TaskCountOutputTypeCountUsersArgsObjectSchema)]).optional(),
  Tags: z.union([z.boolean(), z.lazy(() => TaskCountOutputTypeCountTagsArgsObjectSchema)]).optional()
}).strict();
export const TaskCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.TaskCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.TaskCountOutputTypeSelect>;
export const TaskCountOutputTypeSelectObjectZodSchema = makeSchema();
