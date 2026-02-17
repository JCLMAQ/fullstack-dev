import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TodoStateSchema } from '../enums/TodoState.schema';
import { TodoUncheckedCreateNestedManyWithoutMainTodoInputObjectSchema as TodoUncheckedCreateNestedManyWithoutMainTodoInputObjectSchema } from './TodoUncheckedCreateNestedManyWithoutMainTodoInput.schema';
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
  SubTodos: z.lazy(() => TodoUncheckedCreateNestedManyWithoutMainTodoInputObjectSchema).optional(),
  Users: z.lazy(() => UserTodoLinkUncheckedCreateNestedManyWithoutTodoInputObjectSchema).optional(),
  Tasks: z.lazy(() => TaskUncheckedCreateNestedManyWithoutTodoInputObjectSchema).optional(),
  Tags: z.lazy(() => TagValueUncheckedCreateNestedManyWithoutTodosInputObjectSchema).optional()
}).strict();
export const TodoUncheckedCreateWithoutGroupsInputObjectSchema: z.ZodType<Prisma.TodoUncheckedCreateWithoutGroupsInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoUncheckedCreateWithoutGroupsInput>;
export const TodoUncheckedCreateWithoutGroupsInputObjectZodSchema = makeSchema();
