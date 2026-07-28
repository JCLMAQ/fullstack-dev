import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { EnumTodoStateFilterObjectSchema as EnumTodoStateFilterObjectSchema } from './EnumTodoStateFilter.schema';
import { TodoStateSchema } from '../enums/TodoState.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { OrganizationNullableScalarRelationFilterObjectSchema as OrganizationNullableScalarRelationFilterObjectSchema } from './OrganizationNullableScalarRelationFilter.schema';
import { OrganizationWhereInputObjectSchema as OrganizationWhereInputObjectSchema } from './OrganizationWhereInput.schema';
import { GroupListRelationFilterObjectSchema as GroupListRelationFilterObjectSchema } from './GroupListRelationFilter.schema';
import { TodoNullableScalarRelationFilterObjectSchema as TodoNullableScalarRelationFilterObjectSchema } from './TodoNullableScalarRelationFilter.schema';
import { TodoListRelationFilterObjectSchema as TodoListRelationFilterObjectSchema } from './TodoListRelationFilter.schema';
import { UserTodoLinkListRelationFilterObjectSchema as UserTodoLinkListRelationFilterObjectSchema } from './UserTodoLinkListRelationFilter.schema';
import { TaskListRelationFilterObjectSchema as TaskListRelationFilterObjectSchema } from './TaskListRelationFilter.schema';
import { TagValueListRelationFilterObjectSchema as TagValueListRelationFilterObjectSchema } from './TagValueListRelationFilter.schema'

const todowhereinputSchema = z.object({
  AND: z.union([z.lazy(() => TodoWhereInputObjectSchema), z.lazy(() => TodoWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TodoWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TodoWhereInputObjectSchema), z.lazy(() => TodoWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  numSeq: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  published: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  isDeleted: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  isDeletedDT: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  isPublic: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  ownerId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  orgId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  orderTodo: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  title: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  content: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  todoState: z.union([z.lazy(() => EnumTodoStateFilterObjectSchema), TodoStateSchema]).optional(),
  mainTodoId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  owner: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  org: z.union([z.lazy(() => OrganizationNullableScalarRelationFilterObjectSchema), z.lazy(() => OrganizationWhereInputObjectSchema)]).optional(),
  groups: z.lazy(() => GroupListRelationFilterObjectSchema).optional(),
  mainTodo: z.union([z.lazy(() => TodoNullableScalarRelationFilterObjectSchema), z.lazy(() => TodoWhereInputObjectSchema)]).optional(),
  SubTodos: z.lazy(() => TodoListRelationFilterObjectSchema).optional(),
  Users: z.lazy(() => UserTodoLinkListRelationFilterObjectSchema).optional(),
  Tasks: z.lazy(() => TaskListRelationFilterObjectSchema).optional(),
  Tags: z.lazy(() => TagValueListRelationFilterObjectSchema).optional()
}).strict();
export const TodoWhereInputObjectSchema: z.ZodType<Prisma.TodoWhereInput> = todowhereinputSchema as unknown as z.ZodType<Prisma.TodoWhereInput>;
export const TodoWhereInputObjectZodSchema = todowhereinputSchema;
