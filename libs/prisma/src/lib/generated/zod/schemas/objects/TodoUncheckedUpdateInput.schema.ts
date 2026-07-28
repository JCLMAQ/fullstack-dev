import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { TodoStateSchema } from '../enums/TodoState.schema';
import { EnumTodoStateFieldUpdateOperationsInputObjectSchema as EnumTodoStateFieldUpdateOperationsInputObjectSchema } from './EnumTodoStateFieldUpdateOperationsInput.schema';
import { GroupUncheckedUpdateManyWithoutTodosNestedInputObjectSchema as GroupUncheckedUpdateManyWithoutTodosNestedInputObjectSchema } from './GroupUncheckedUpdateManyWithoutTodosNestedInput.schema';
import { TodoUncheckedUpdateManyWithoutMainTodoNestedInputObjectSchema as TodoUncheckedUpdateManyWithoutMainTodoNestedInputObjectSchema } from './TodoUncheckedUpdateManyWithoutMainTodoNestedInput.schema';
import { UserTodoLinkUncheckedUpdateManyWithoutTodoNestedInputObjectSchema as UserTodoLinkUncheckedUpdateManyWithoutTodoNestedInputObjectSchema } from './UserTodoLinkUncheckedUpdateManyWithoutTodoNestedInput.schema';
import { TaskUncheckedUpdateManyWithoutTodoNestedInputObjectSchema as TaskUncheckedUpdateManyWithoutTodoNestedInputObjectSchema } from './TaskUncheckedUpdateManyWithoutTodoNestedInput.schema';
import { TagValueUncheckedUpdateManyWithoutTodosNestedInputObjectSchema as TagValueUncheckedUpdateManyWithoutTodosNestedInputObjectSchema } from './TagValueUncheckedUpdateManyWithoutTodosNestedInput.schema'

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
  orderTodo: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  content: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  todoState: z.union([TodoStateSchema, z.lazy(() => EnumTodoStateFieldUpdateOperationsInputObjectSchema)]).optional(),
  mainTodoId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  groups: z.lazy(() => GroupUncheckedUpdateManyWithoutTodosNestedInputObjectSchema).optional(),
  SubTodos: z.lazy(() => TodoUncheckedUpdateManyWithoutMainTodoNestedInputObjectSchema).optional(),
  Users: z.lazy(() => UserTodoLinkUncheckedUpdateManyWithoutTodoNestedInputObjectSchema).optional(),
  Tasks: z.lazy(() => TaskUncheckedUpdateManyWithoutTodoNestedInputObjectSchema).optional(),
  Tags: z.lazy(() => TagValueUncheckedUpdateManyWithoutTodosNestedInputObjectSchema).optional()
}).strict();
export const TodoUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.TodoUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoUncheckedUpdateInput>;
export const TodoUncheckedUpdateInputObjectZodSchema = makeSchema();
