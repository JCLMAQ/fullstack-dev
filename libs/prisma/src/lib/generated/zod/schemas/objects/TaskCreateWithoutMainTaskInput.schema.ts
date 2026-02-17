import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TaskStateSchema } from '../enums/TaskState.schema';
import { UserCreateNestedOneWithoutTasksAuthorInputObjectSchema as UserCreateNestedOneWithoutTasksAuthorInputObjectSchema } from './UserCreateNestedOneWithoutTasksAuthorInput.schema';
import { OrganizationCreateNestedOneWithoutTasksInputObjectSchema as OrganizationCreateNestedOneWithoutTasksInputObjectSchema } from './OrganizationCreateNestedOneWithoutTasksInput.schema';
import { GroupCreateNestedManyWithoutTasksInputObjectSchema as GroupCreateNestedManyWithoutTasksInputObjectSchema } from './GroupCreateNestedManyWithoutTasksInput.schema';
import { TaskCreateNestedManyWithoutMainTaskInputObjectSchema as TaskCreateNestedManyWithoutMainTaskInputObjectSchema } from './TaskCreateNestedManyWithoutMainTaskInput.schema';
import { UserTaskLinkCreateNestedManyWithoutTaskInputObjectSchema as UserTaskLinkCreateNestedManyWithoutTaskInputObjectSchema } from './UserTaskLinkCreateNestedManyWithoutTaskInput.schema';
import { TodoCreateNestedOneWithoutTasksInputObjectSchema as TodoCreateNestedOneWithoutTasksInputObjectSchema } from './TodoCreateNestedOneWithoutTasksInput.schema';
import { TagValueCreateNestedManyWithoutTasksInputObjectSchema as TagValueCreateNestedManyWithoutTasksInputObjectSchema } from './TagValueCreateNestedManyWithoutTasksInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  numSeq: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  published: z.boolean().optional(),
  isDeleted: z.number().int().optional(),
  isDeletedDT: z.coerce.date().optional().nullable(),
  isPublic: z.boolean().optional(),
  orderTask: z.number().int(),
  title: z.string(),
  content: z.string().optional().nullable(),
  taskState: TaskStateSchema.optional(),
  owner: z.lazy(() => UserCreateNestedOneWithoutTasksAuthorInputObjectSchema),
  org: z.lazy(() => OrganizationCreateNestedOneWithoutTasksInputObjectSchema).optional(),
  groups: z.lazy(() => GroupCreateNestedManyWithoutTasksInputObjectSchema).optional(),
  SubTasks: z.lazy(() => TaskCreateNestedManyWithoutMainTaskInputObjectSchema).optional(),
  Users: z.lazy(() => UserTaskLinkCreateNestedManyWithoutTaskInputObjectSchema).optional(),
  todo: z.lazy(() => TodoCreateNestedOneWithoutTasksInputObjectSchema).optional(),
  Tags: z.lazy(() => TagValueCreateNestedManyWithoutTasksInputObjectSchema).optional()
}).strict();
export const TaskCreateWithoutMainTaskInputObjectSchema: z.ZodType<Prisma.TaskCreateWithoutMainTaskInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskCreateWithoutMainTaskInput>;
export const TaskCreateWithoutMainTaskInputObjectZodSchema = makeSchema();
