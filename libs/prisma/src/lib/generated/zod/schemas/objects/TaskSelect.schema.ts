import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
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
  orderTask: z.boolean().optional(),
  title: z.boolean().optional(),
  content: z.boolean().optional(),
  taskState: z.boolean().optional(),
  mainTask: z.union([z.boolean(), z.lazy(() => TaskArgsObjectSchema)]).optional(),
  mainTaskId: z.boolean().optional(),
  SubTasks: z.union([z.boolean(), z.lazy(() => TaskFindManySchema)]).optional(),
  Users: z.union([z.boolean(), z.lazy(() => UserTaskLinkFindManySchema)]).optional(),
  todo: z.union([z.boolean(), z.lazy(() => TodoArgsObjectSchema)]).optional(),
  todoId: z.boolean().optional(),
  Tags: z.union([z.boolean(), z.lazy(() => TagValueFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => TaskCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const TaskSelectObjectSchema: z.ZodType<Prisma.TaskSelect> = makeSchema() as unknown as z.ZodType<Prisma.TaskSelect>;
export const TaskSelectObjectZodSchema = makeSchema();
