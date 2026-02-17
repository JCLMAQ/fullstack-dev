import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TaskStateSchema } from '../enums/TaskState.schema';
import { GroupUncheckedCreateNestedManyWithoutTasksInputObjectSchema as GroupUncheckedCreateNestedManyWithoutTasksInputObjectSchema } from './GroupUncheckedCreateNestedManyWithoutTasksInput.schema';
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
export const TaskUncheckedCreateWithoutOrgInputObjectSchema: z.ZodType<Prisma.TaskUncheckedCreateWithoutOrgInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskUncheckedCreateWithoutOrgInput>;
export const TaskUncheckedCreateWithoutOrgInputObjectZodSchema = makeSchema();
