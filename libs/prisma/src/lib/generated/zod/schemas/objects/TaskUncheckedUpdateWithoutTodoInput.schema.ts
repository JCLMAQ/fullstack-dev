import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { TaskStateSchema } from '../enums/TaskState.schema';
import { EnumTaskStateFieldUpdateOperationsInputObjectSchema as EnumTaskStateFieldUpdateOperationsInputObjectSchema } from './EnumTaskStateFieldUpdateOperationsInput.schema';
import { GroupUncheckedUpdateManyWithoutTasksNestedInputObjectSchema as GroupUncheckedUpdateManyWithoutTasksNestedInputObjectSchema } from './GroupUncheckedUpdateManyWithoutTasksNestedInput.schema';
import { TaskUncheckedUpdateManyWithoutMainTaskNestedInputObjectSchema as TaskUncheckedUpdateManyWithoutMainTaskNestedInputObjectSchema } from './TaskUncheckedUpdateManyWithoutMainTaskNestedInput.schema';
import { UserTaskLinkUncheckedUpdateManyWithoutTaskNestedInputObjectSchema as UserTaskLinkUncheckedUpdateManyWithoutTaskNestedInputObjectSchema } from './UserTaskLinkUncheckedUpdateManyWithoutTaskNestedInput.schema';
import { TagValueUncheckedUpdateManyWithoutTasksNestedInputObjectSchema as TagValueUncheckedUpdateManyWithoutTasksNestedInputObjectSchema } from './TagValueUncheckedUpdateManyWithoutTasksNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  numSeq: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  published: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  isDeleted: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  isDeletedDT: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  isPublic: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  ownerId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  orgId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  orderTask: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  content: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  taskState: z.union([TaskStateSchema, z.lazy(() => EnumTaskStateFieldUpdateOperationsInputObjectSchema)]).optional(),
  mainTaskId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  groups: z.lazy(() => GroupUncheckedUpdateManyWithoutTasksNestedInputObjectSchema).optional(),
  SubTasks: z.lazy(() => TaskUncheckedUpdateManyWithoutMainTaskNestedInputObjectSchema).optional(),
  Users: z.lazy(() => UserTaskLinkUncheckedUpdateManyWithoutTaskNestedInputObjectSchema).optional(),
  Tags: z.lazy(() => TagValueUncheckedUpdateManyWithoutTasksNestedInputObjectSchema).optional()
}).strict();
export const TaskUncheckedUpdateWithoutTodoInputObjectSchema: z.ZodType<Prisma.TaskUncheckedUpdateWithoutTodoInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskUncheckedUpdateWithoutTodoInput>;
export const TaskUncheckedUpdateWithoutTodoInputObjectZodSchema = makeSchema();
