import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TaskStateSchema } from '../enums/TaskState.schema';
import { GroupUncheckedCreateNestedManyWithoutTasksInputObjectSchema as GroupUncheckedCreateNestedManyWithoutTasksInputObjectSchema } from './GroupUncheckedCreateNestedManyWithoutTasksInput.schema';
import { TaskUncheckedCreateNestedManyWithoutMainTaskInputObjectSchema as TaskUncheckedCreateNestedManyWithoutMainTaskInputObjectSchema } from './TaskUncheckedCreateNestedManyWithoutMainTaskInput.schema';
import { UserTaskLinkUncheckedCreateNestedManyWithoutTaskInputObjectSchema as UserTaskLinkUncheckedCreateNestedManyWithoutTaskInputObjectSchema } from './UserTaskLinkUncheckedCreateNestedManyWithoutTaskInput.schema';
import { TagValueUncheckedCreateNestedManyWithoutTasksInputObjectSchema as TagValueUncheckedCreateNestedManyWithoutTasksInputObjectSchema } from './TagValueUncheckedCreateNestedManyWithoutTasksInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  numSeq: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  published: z.boolean().optional(),
  isDeleted: z.number().int().optional(),
  isDeletedDT: z.coerce.date().optional().nullable(),
  isPublic: z.boolean().optional(),
  ownerId: z.string(),
  orgId: z.string().optional().nullable(),
  orderTask: z.number().int(),
  title: z.string(),
  content: z.string().optional().nullable(),
  taskState: TaskStateSchema.optional(),
  mainTaskId: z.string().optional().nullable(),
  todoId: z.string().optional().nullable(),
  groups: z.lazy(() => GroupUncheckedCreateNestedManyWithoutTasksInputObjectSchema).optional(),
  SubTasks: z.lazy(() => TaskUncheckedCreateNestedManyWithoutMainTaskInputObjectSchema).optional(),
  Users: z.lazy(() => UserTaskLinkUncheckedCreateNestedManyWithoutTaskInputObjectSchema).optional(),
  Tags: z.lazy(() => TagValueUncheckedCreateNestedManyWithoutTasksInputObjectSchema).optional()
}).strict();
export const TaskUncheckedCreateInputObjectSchema: z.ZodType<Prisma.TaskUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskUncheckedCreateInput>;
export const TaskUncheckedCreateInputObjectZodSchema = makeSchema();
