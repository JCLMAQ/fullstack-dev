import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { TaskStateSchema } from '../enums/TaskState.schema';
import { EnumTaskStateFieldUpdateOperationsInputObjectSchema as EnumTaskStateFieldUpdateOperationsInputObjectSchema } from './EnumTaskStateFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutTasksAuthorNestedInputObjectSchema as UserUpdateOneRequiredWithoutTasksAuthorNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutTasksAuthorNestedInput.schema';
import { OrganizationUpdateOneWithoutTasksNestedInputObjectSchema as OrganizationUpdateOneWithoutTasksNestedInputObjectSchema } from './OrganizationUpdateOneWithoutTasksNestedInput.schema';
import { GroupUpdateManyWithoutTasksNestedInputObjectSchema as GroupUpdateManyWithoutTasksNestedInputObjectSchema } from './GroupUpdateManyWithoutTasksNestedInput.schema';
import { TaskUpdateOneWithoutSubTasksNestedInputObjectSchema as TaskUpdateOneWithoutSubTasksNestedInputObjectSchema } from './TaskUpdateOneWithoutSubTasksNestedInput.schema';
import { TaskUpdateManyWithoutMainTaskNestedInputObjectSchema as TaskUpdateManyWithoutMainTaskNestedInputObjectSchema } from './TaskUpdateManyWithoutMainTaskNestedInput.schema';
import { UserTaskLinkUpdateManyWithoutTaskNestedInputObjectSchema as UserTaskLinkUpdateManyWithoutTaskNestedInputObjectSchema } from './UserTaskLinkUpdateManyWithoutTaskNestedInput.schema';
import { TodoUpdateOneWithoutTasksNestedInputObjectSchema as TodoUpdateOneWithoutTasksNestedInputObjectSchema } from './TodoUpdateOneWithoutTasksNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  numSeq: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  published: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  isDeleted: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  isDeletedDT: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  isPublic: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  orderTask: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  content: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  taskState: z.union([TaskStateSchema, z.lazy(() => EnumTaskStateFieldUpdateOperationsInputObjectSchema)]).optional(),
  owner: z.lazy(() => UserUpdateOneRequiredWithoutTasksAuthorNestedInputObjectSchema).optional(),
  org: z.lazy(() => OrganizationUpdateOneWithoutTasksNestedInputObjectSchema).optional(),
  groups: z.lazy(() => GroupUpdateManyWithoutTasksNestedInputObjectSchema).optional(),
  mainTask: z.lazy(() => TaskUpdateOneWithoutSubTasksNestedInputObjectSchema).optional(),
  SubTasks: z.lazy(() => TaskUpdateManyWithoutMainTaskNestedInputObjectSchema).optional(),
  Users: z.lazy(() => UserTaskLinkUpdateManyWithoutTaskNestedInputObjectSchema).optional(),
  todo: z.lazy(() => TodoUpdateOneWithoutTasksNestedInputObjectSchema).optional()
}).strict();
export const TaskUpdateWithoutTagsInputObjectSchema: z.ZodType<Prisma.TaskUpdateWithoutTagsInput> = makeSchema() as unknown as z.ZodType<Prisma.TaskUpdateWithoutTagsInput>;
export const TaskUpdateWithoutTagsInputObjectZodSchema = makeSchema();
