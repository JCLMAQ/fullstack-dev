import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { EnumTaskStateFilterObjectSchema as EnumTaskStateFilterObjectSchema } from './EnumTaskStateFilter.schema';
import { TaskStateSchema } from '../enums/TaskState.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { OrganizationNullableScalarRelationFilterObjectSchema as OrganizationNullableScalarRelationFilterObjectSchema } from './OrganizationNullableScalarRelationFilter.schema';
import { OrganizationWhereInputObjectSchema as OrganizationWhereInputObjectSchema } from './OrganizationWhereInput.schema';
import { GroupListRelationFilterObjectSchema as GroupListRelationFilterObjectSchema } from './GroupListRelationFilter.schema';
import { TaskNullableScalarRelationFilterObjectSchema as TaskNullableScalarRelationFilterObjectSchema } from './TaskNullableScalarRelationFilter.schema';
import { TaskListRelationFilterObjectSchema as TaskListRelationFilterObjectSchema } from './TaskListRelationFilter.schema';
import { UserTaskLinkListRelationFilterObjectSchema as UserTaskLinkListRelationFilterObjectSchema } from './UserTaskLinkListRelationFilter.schema';
import { TodoNullableScalarRelationFilterObjectSchema as TodoNullableScalarRelationFilterObjectSchema } from './TodoNullableScalarRelationFilter.schema';
import { TodoWhereInputObjectSchema as TodoWhereInputObjectSchema } from './TodoWhereInput.schema';
import { TagValueListRelationFilterObjectSchema as TagValueListRelationFilterObjectSchema } from './TagValueListRelationFilter.schema'

const taskwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => TaskWhereInputObjectSchema), z.lazy(() => TaskWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TaskWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TaskWhereInputObjectSchema), z.lazy(() => TaskWhereInputObjectSchema).array()]).optional(),
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
  orderTask: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  title: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  content: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  taskState: z.union([z.lazy(() => EnumTaskStateFilterObjectSchema), TaskStateSchema]).optional(),
  mainTaskId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  todoId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  owner: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  org: z.union([z.lazy(() => OrganizationNullableScalarRelationFilterObjectSchema), z.lazy(() => OrganizationWhereInputObjectSchema)]).optional(),
  groups: z.lazy(() => GroupListRelationFilterObjectSchema).optional(),
  mainTask: z.union([z.lazy(() => TaskNullableScalarRelationFilterObjectSchema), z.lazy(() => TaskWhereInputObjectSchema)]).optional(),
  SubTasks: z.lazy(() => TaskListRelationFilterObjectSchema).optional(),
  Users: z.lazy(() => UserTaskLinkListRelationFilterObjectSchema).optional(),
  todo: z.union([z.lazy(() => TodoNullableScalarRelationFilterObjectSchema), z.lazy(() => TodoWhereInputObjectSchema)]).optional(),
  Tags: z.lazy(() => TagValueListRelationFilterObjectSchema).optional()
}).strict();
export const TaskWhereInputObjectSchema: z.ZodType<Prisma.TaskWhereInput> = taskwhereinputSchema as unknown as z.ZodType<Prisma.TaskWhereInput>;
export const TaskWhereInputObjectZodSchema = taskwhereinputSchema;
