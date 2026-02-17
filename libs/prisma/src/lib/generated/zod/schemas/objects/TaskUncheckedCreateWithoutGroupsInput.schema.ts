import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TaskStateSchema } from '../enums/TaskState.schema';
import { TaskUncheckedCreateNestedManyWithoutMainTaskInputObjectSchema as TaskUncheckedCreateNestedManyWithoutMainTaskInputObjectSchema } from './TaskUncheckedCreateNestedManyWithoutMainTaskInput.schema';
import { UserTaskLinkUncheckedCreateNestedManyWithoutTaskInputObjectSchema as UserTaskLinkUncheckedCreateNestedManyWithoutTaskInputObjectSchema } from './UserTaskLinkUncheckedCreateNestedManyWithoutTaskInput.schema';
import { TagValueUncheckedCreateNestedManyWithoutTasksInputObjectSchema as TagValueUncheckedCreateNestedManyWithoutTasksInputObjectSchema } from './TagValueUncheckedCreateNestedManyWithoutTasksInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  numSeq: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
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
  SubTasks: z.lazy(() => TaskUncheckedCreateNestedManyWithoutMainTaskInputObjectSchema).optional(),
  Users: z.lazy(() => UserTaskLinkUncheckedCreateNestedManyWithoutTaskInputObjectSchema).optional(),
  Tags: z.lazy(() => TagValueUncheckedCreateNestedManyWithoutTasksInputObjectSchema).optional()
}).strict();
export const TaskUncheckedCreateWithoutGroupsInputObjectSchema: z.ZodType<Prisma.TaskUncheckedCreateWithoutGroupsInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskUncheckedCreateWithoutGroupsInput>;
export const TaskUncheckedCreateWithoutGroupsInputObjectZodSchema = makeSchema();
