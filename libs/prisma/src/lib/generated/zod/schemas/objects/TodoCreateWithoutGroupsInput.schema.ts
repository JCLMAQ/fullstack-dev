import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TodoStateSchema } from '../enums/TodoState.schema';
import { UserCreateNestedOneWithoutTodosAuthorInputObjectSchema as UserCreateNestedOneWithoutTodosAuthorInputObjectSchema } from './UserCreateNestedOneWithoutTodosAuthorInput.schema';
import { OrganizationCreateNestedOneWithoutTodosInputObjectSchema as OrganizationCreateNestedOneWithoutTodosInputObjectSchema } from './OrganizationCreateNestedOneWithoutTodosInput.schema';
import { TodoCreateNestedOneWithoutSubTodosInputObjectSchema as TodoCreateNestedOneWithoutSubTodosInputObjectSchema } from './TodoCreateNestedOneWithoutSubTodosInput.schema';
import { TodoCreateNestedManyWithoutMainTodoInputObjectSchema as TodoCreateNestedManyWithoutMainTodoInputObjectSchema } from './TodoCreateNestedManyWithoutMainTodoInput.schema';
import { UserTodoLinkCreateNestedManyWithoutTodoInputObjectSchema as UserTodoLinkCreateNestedManyWithoutTodoInputObjectSchema } from './UserTodoLinkCreateNestedManyWithoutTodoInput.schema';
import { TaskCreateNestedManyWithoutTodoInputObjectSchema as TaskCreateNestedManyWithoutTodoInputObjectSchema } from './TaskCreateNestedManyWithoutTodoInput.schema';
import { TagValueCreateNestedManyWithoutTodosInputObjectSchema as TagValueCreateNestedManyWithoutTodosInputObjectSchema } from './TagValueCreateNestedManyWithoutTodosInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  numSeq: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  published: z.boolean().optional(),
  isDeleted: z.number().int().optional(),
  isDeletedDT: z.coerce.date().optional().nullable(),
  isPublic: z.boolean().optional(),
  orderTodo: z.number().int(),
  title: z.string(),
  content: z.string().optional().nullable(),
  todoState: TodoStateSchema.optional(),
  owner: z.lazy(() => UserCreateNestedOneWithoutTodosAuthorInputObjectSchema),
  org: z.lazy(() => OrganizationCreateNestedOneWithoutTodosInputObjectSchema).optional(),
  mainTodo: z.lazy(() => TodoCreateNestedOneWithoutSubTodosInputObjectSchema).optional(),
  SubTodos: z.lazy(() => TodoCreateNestedManyWithoutMainTodoInputObjectSchema).optional(),
  Users: z.lazy(() => UserTodoLinkCreateNestedManyWithoutTodoInputObjectSchema).optional(),
  Tasks: z.lazy(() => TaskCreateNestedManyWithoutTodoInputObjectSchema).optional(),
  Tags: z.lazy(() => TagValueCreateNestedManyWithoutTodosInputObjectSchema).optional()
}).strict();
export const TodoCreateWithoutGroupsInputObjectSchema: z.ZodType<Prisma.TodoCreateWithoutGroupsInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoCreateWithoutGroupsInput>;
export const TodoCreateWithoutGroupsInputObjectZodSchema = makeSchema();
