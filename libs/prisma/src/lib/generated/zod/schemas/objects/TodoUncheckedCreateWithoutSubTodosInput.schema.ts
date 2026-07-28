import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TodoStateSchema } from '../enums/TodoState.schema';
import { GroupUncheckedCreateNestedManyWithoutTodosInputObjectSchema as GroupUncheckedCreateNestedManyWithoutTodosInputObjectSchema } from './GroupUncheckedCreateNestedManyWithoutTodosInput.schema';
import { UserTodoLinkUncheckedCreateNestedManyWithoutTodoInputObjectSchema as UserTodoLinkUncheckedCreateNestedManyWithoutTodoInputObjectSchema } from './UserTodoLinkUncheckedCreateNestedManyWithoutTodoInput.schema';
import { TaskUncheckedCreateNestedManyWithoutTodoInputObjectSchema as TaskUncheckedCreateNestedManyWithoutTodoInputObjectSchema } from './TaskUncheckedCreateNestedManyWithoutTodoInput.schema';
import { TagValueUncheckedCreateNestedManyWithoutTodosInputObjectSchema as TagValueUncheckedCreateNestedManyWithoutTodosInputObjectSchema } from './TagValueUncheckedCreateNestedManyWithoutTodosInput.schema'

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
  orderTodo: z.number().int(),
  title: z.string(),
  content: z.string().optional().nullable(),
  todoState: TodoStateSchema.optional(),
  mainTodoId: z.string().optional().nullable(),
  groups: z.lazy(() => GroupUncheckedCreateNestedManyWithoutTodosInputObjectSchema).optional(),
  Users: z.lazy(() => UserTodoLinkUncheckedCreateNestedManyWithoutTodoInputObjectSchema).optional(),
  Tasks: z.lazy(() => TaskUncheckedCreateNestedManyWithoutTodoInputObjectSchema).optional(),
  Tags: z.lazy(() => TagValueUncheckedCreateNestedManyWithoutTodosInputObjectSchema).optional()
}).strict();
export const TodoUncheckedCreateWithoutSubTodosInputObjectSchema: z.ZodType<Prisma.TodoUncheckedCreateWithoutSubTodosInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoUncheckedCreateWithoutSubTodosInput>;
export const TodoUncheckedCreateWithoutSubTodosInputObjectZodSchema = makeSchema();
