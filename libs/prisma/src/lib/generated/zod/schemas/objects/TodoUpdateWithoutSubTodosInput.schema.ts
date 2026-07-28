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
import { UserUpdateOneRequiredWithoutTodosAuthorNestedInputObjectSchema as UserUpdateOneRequiredWithoutTodosAuthorNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutTodosAuthorNestedInput.schema';
import { OrganizationUpdateOneWithoutTodosNestedInputObjectSchema as OrganizationUpdateOneWithoutTodosNestedInputObjectSchema } from './OrganizationUpdateOneWithoutTodosNestedInput.schema';
import { GroupUpdateManyWithoutTodosNestedInputObjectSchema as GroupUpdateManyWithoutTodosNestedInputObjectSchema } from './GroupUpdateManyWithoutTodosNestedInput.schema';
import { TodoUpdateOneWithoutSubTodosNestedInputObjectSchema as TodoUpdateOneWithoutSubTodosNestedInputObjectSchema } from './TodoUpdateOneWithoutSubTodosNestedInput.schema';
import { UserTodoLinkUpdateManyWithoutTodoNestedInputObjectSchema as UserTodoLinkUpdateManyWithoutTodoNestedInputObjectSchema } from './UserTodoLinkUpdateManyWithoutTodoNestedInput.schema';
import { TaskUpdateManyWithoutTodoNestedInputObjectSchema as TaskUpdateManyWithoutTodoNestedInputObjectSchema } from './TaskUpdateManyWithoutTodoNestedInput.schema';
import { TagValueUpdateManyWithoutTodosNestedInputObjectSchema as TagValueUpdateManyWithoutTodosNestedInputObjectSchema } from './TagValueUpdateManyWithoutTodosNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  numSeq: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  published: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  isDeleted: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  isDeletedDT: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  isPublic: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  orderTodo: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  content: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  todoState: z.union([TodoStateSchema, z.lazy(() => EnumTodoStateFieldUpdateOperationsInputObjectSchema)]).optional(),
  owner: z.lazy(() => UserUpdateOneRequiredWithoutTodosAuthorNestedInputObjectSchema).optional(),
  org: z.lazy(() => OrganizationUpdateOneWithoutTodosNestedInputObjectSchema).optional(),
  groups: z.lazy(() => GroupUpdateManyWithoutTodosNestedInputObjectSchema).optional(),
  mainTodo: z.lazy(() => TodoUpdateOneWithoutSubTodosNestedInputObjectSchema).optional(),
  Users: z.lazy(() => UserTodoLinkUpdateManyWithoutTodoNestedInputObjectSchema).optional(),
  Tasks: z.lazy(() => TaskUpdateManyWithoutTodoNestedInputObjectSchema).optional(),
  Tags: z.lazy(() => TagValueUpdateManyWithoutTodosNestedInputObjectSchema).optional()
}).strict();
export const TodoUpdateWithoutSubTodosInputObjectSchema: z.ZodType<Prisma.TodoUpdateWithoutSubTodosInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoUpdateWithoutSubTodosInput>;
export const TodoUpdateWithoutSubTodosInputObjectZodSchema = makeSchema();
