import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateNestedOneWithoutGroupsInputObjectSchema as UserCreateNestedOneWithoutGroupsInputObjectSchema } from './UserCreateNestedOneWithoutGroupsInput.schema';
import { UserCreateNestedManyWithoutGroupInputObjectSchema as UserCreateNestedManyWithoutGroupInputObjectSchema } from './UserCreateNestedManyWithoutGroupInput.schema';
import { TodoCreateNestedManyWithoutGroupsInputObjectSchema as TodoCreateNestedManyWithoutGroupsInputObjectSchema } from './TodoCreateNestedManyWithoutGroupsInput.schema';
import { PostCreateNestedManyWithoutGroupsInputObjectSchema as PostCreateNestedManyWithoutGroupsInputObjectSchema } from './PostCreateNestedManyWithoutGroupsInput.schema';
import { FileCreateNestedManyWithoutGroupsInputObjectSchema as FileCreateNestedManyWithoutGroupsInputObjectSchema } from './FileCreateNestedManyWithoutGroupsInput.schema';
import { OrganizationCreateNestedOneWithoutGroupsInputObjectSchema as OrganizationCreateNestedOneWithoutGroupsInputObjectSchema } from './OrganizationCreateNestedOneWithoutGroupsInput.schema';
import { TagValueCreateNestedManyWithoutGroupsInputObjectSchema as TagValueCreateNestedManyWithoutGroupsInputObjectSchema } from './TagValueCreateNestedManyWithoutGroupsInput.schema'

const makeSchema = () => z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  published: z.boolean().optional(),
  isPublic: z.boolean().optional(),
  isDeleted: z.number().int().optional(),
  isDeletedDT: z.coerce.date().optional().nullable(),
  orderGroup: z.number().int(),
  name: z.string(),
  description: z.string().optional().nullable(),
  isActiv: z.coerce.date().optional().nullable(),
  owner: z.lazy(() => UserCreateNestedOneWithoutGroupsInputObjectSchema),
  Members: z.lazy(() => UserCreateNestedManyWithoutGroupInputObjectSchema).optional(),
  Todos: z.lazy(() => TodoCreateNestedManyWithoutGroupsInputObjectSchema).optional(),
  Posts: z.lazy(() => PostCreateNestedManyWithoutGroupsInputObjectSchema).optional(),
  Files: z.lazy(() => FileCreateNestedManyWithoutGroupsInputObjectSchema).optional(),
  org: z.lazy(() => OrganizationCreateNestedOneWithoutGroupsInputObjectSchema),
  Tags: z.lazy(() => TagValueCreateNestedManyWithoutGroupsInputObjectSchema).optional()
}).strict();
export const GroupCreateWithoutTasksInputObjectSchema: z.ZodType<Prisma.GroupCreateWithoutTasksInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupCreateWithoutTasksInput>;
export const GroupCreateWithoutTasksInputObjectZodSchema = makeSchema();
