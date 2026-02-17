import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { OrganizationArgsObjectSchema as OrganizationArgsObjectSchema } from './OrganizationArgs.schema';
import { GroupFindManySchema as GroupFindManySchema } from '../findManyGroup.schema';
import { TaskArgsObjectSchema as TaskArgsObjectSchema } from './TaskArgs.schema';
import { TaskFindManySchema as TaskFindManySchema } from '../findManyTask.schema';
import { UserTaskLinkFindManySchema as UserTaskLinkFindManySchema } from '../findManyUserTaskLink.schema';
import { TodoArgsObjectSchema as TodoArgsObjectSchema } from './TodoArgs.schema';
import { TagValueFindManySchema as TagValueFindManySchema } from '../findManyTagValue.schema';
import { TaskCountOutputTypeArgsObjectSchema as TaskCountOutputTypeArgsObjectSchema } from './TaskCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  owner: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  org: z.union([z.boolean(), z.lazy(() => OrganizationArgsObjectSchema)]).optional(),
  groups: z.union([z.boolean(), z.lazy(() => GroupFindManySchema)]).optional(),
  mainTask: z.union([z.boolean(), z.lazy(() => TaskArgsObjectSchema)]).optional(),
  SubTasks: z.union([z.boolean(), z.lazy(() => TaskFindManySchema)]).optional(),
  Users: z.union([z.boolean(), z.lazy(() => UserTaskLinkFindManySchema)]).optional(),
  todo: z.union([z.boolean(), z.lazy(() => TodoArgsObjectSchema)]).optional(),
  Tags: z.union([z.boolean(), z.lazy(() => TagValueFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => TaskCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const TaskIncludeObjectSchema: z.ZodType<Prisma.TaskInclude> = makeSchema() as unknown as z.ZodType<Prisma.TaskInclude>;
export const TaskIncludeObjectZodSchema = makeSchema();
