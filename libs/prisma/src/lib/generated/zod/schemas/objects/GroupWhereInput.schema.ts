import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserListRelationFilterObjectSchema as UserListRelationFilterObjectSchema } from './UserListRelationFilter.schema';
import { TaskListRelationFilterObjectSchema as TaskListRelationFilterObjectSchema } from './TaskListRelationFilter.schema';
import { TodoListRelationFilterObjectSchema as TodoListRelationFilterObjectSchema } from './TodoListRelationFilter.schema';
import { PostListRelationFilterObjectSchema as PostListRelationFilterObjectSchema } from './PostListRelationFilter.schema';
import { FileListRelationFilterObjectSchema as FileListRelationFilterObjectSchema } from './FileListRelationFilter.schema';
import { OrganizationScalarRelationFilterObjectSchema as OrganizationScalarRelationFilterObjectSchema } from './OrganizationScalarRelationFilter.schema';
import { OrganizationWhereInputObjectSchema as OrganizationWhereInputObjectSchema } from './OrganizationWhereInput.schema';
import { TagValueListRelationFilterObjectSchema as TagValueListRelationFilterObjectSchema } from './TagValueListRelationFilter.schema'

const groupwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => GroupWhereInputObjectSchema), z.lazy(() => GroupWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => GroupWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => GroupWhereInputObjectSchema), z.lazy(() => GroupWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  published: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  isPublic: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  isDeleted: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  isDeletedDT: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  orderGroup: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  ownerId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  isActiv: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  orgId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  owner: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  Members: z.lazy(() => UserListRelationFilterObjectSchema).optional(),
  Tasks: z.lazy(() => TaskListRelationFilterObjectSchema).optional(),
  Todos: z.lazy(() => TodoListRelationFilterObjectSchema).optional(),
  Posts: z.lazy(() => PostListRelationFilterObjectSchema).optional(),
  Files: z.lazy(() => FileListRelationFilterObjectSchema).optional(),
  org: z.union([z.lazy(() => OrganizationScalarRelationFilterObjectSchema), z.lazy(() => OrganizationWhereInputObjectSchema)]).optional(),
  Tags: z.lazy(() => TagValueListRelationFilterObjectSchema).optional()
}).strict();
export const GroupWhereInputObjectSchema: z.ZodType<Prisma.GroupWhereInput> = groupwhereinputSchema as unknown as z.ZodType<Prisma.GroupWhereInput>;
export const GroupWhereInputObjectZodSchema = groupwhereinputSchema;
