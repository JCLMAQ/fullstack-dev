import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserCreateNestedOneWithoutGroupsInputObjectSchema as UserCreateNestedOneWithoutGroupsInputObjectSchema } from './UserCreateNestedOneWithoutGroupsInput.schema';
import { UserCreateNestedManyWithoutGroupInputObjectSchema as UserCreateNestedManyWithoutGroupInputObjectSchema } from './UserCreateNestedManyWithoutGroupInput.schema';
import { TaskCreateNestedManyWithoutGroupsInputObjectSchema as TaskCreateNestedManyWithoutGroupsInputObjectSchema } from './TaskCreateNestedManyWithoutGroupsInput.schema';
import { TodoCreateNestedManyWithoutGroupsInputObjectSchema as TodoCreateNestedManyWithoutGroupsInputObjectSchema } from './TodoCreateNestedManyWithoutGroupsInput.schema';
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
  Tasks: z.lazy(() => TaskCreateNestedManyWithoutGroupsInputObjectSchema).optional(),
  Todos: z.lazy(() => TodoCreateNestedManyWithoutGroupsInputObjectSchema).optional(),
  Files: z.lazy(() => FileCreateNestedManyWithoutGroupsInputObjectSchema).optional(),
  org: z.lazy(() => OrganizationCreateNestedOneWithoutGroupsInputObjectSchema),
  Tags: z.lazy(() => TagValueCreateNestedManyWithoutGroupsInputObjectSchema).optional()
}).strict();
export const GroupCreateWithoutPostsInputObjectSchema: z.ZodType<Prisma.GroupCreateWithoutPostsInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupCreateWithoutPostsInput>;
export const GroupCreateWithoutPostsInputObjectZodSchema = makeSchema();
