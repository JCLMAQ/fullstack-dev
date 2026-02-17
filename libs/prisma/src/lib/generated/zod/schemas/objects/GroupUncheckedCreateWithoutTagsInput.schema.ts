import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserUncheckedCreateNestedManyWithoutGroupInputObjectSchema as UserUncheckedCreateNestedManyWithoutGroupInputObjectSchema } from './UserUncheckedCreateNestedManyWithoutGroupInput.schema';
import { TaskUncheckedCreateNestedManyWithoutGroupsInputObjectSchema as TaskUncheckedCreateNestedManyWithoutGroupsInputObjectSchema } from './TaskUncheckedCreateNestedManyWithoutGroupsInput.schema';
import { TodoUncheckedCreateNestedManyWithoutGroupsInputObjectSchema as TodoUncheckedCreateNestedManyWithoutGroupsInputObjectSchema } from './TodoUncheckedCreateNestedManyWithoutGroupsInput.schema';
import { PostUncheckedCreateNestedManyWithoutGroupsInputObjectSchema as PostUncheckedCreateNestedManyWithoutGroupsInputObjectSchema } from './PostUncheckedCreateNestedManyWithoutGroupsInput.schema';
import { FileUncheckedCreateNestedManyWithoutGroupsInputObjectSchema as FileUncheckedCreateNestedManyWithoutGroupsInputObjectSchema } from './FileUncheckedCreateNestedManyWithoutGroupsInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  published: z.boolean().optional(),
  isPublic: z.boolean().optional(),
  isDeleted: z.number().int().optional(),
  isDeletedDT: z.coerce.date().optional().nullable(),
  orderGroup: z.number().int(),
  name: z.string(),
  description: z.string().optional().nullable(),
  ownerId: z.string(),
  isActiv: z.coerce.date().optional().nullable(),
  orgId: z.string(),
  Members: z.lazy(() => UserUncheckedCreateNestedManyWithoutGroupInputObjectSchema).optional(),
  Tasks: z.lazy(() => TaskUncheckedCreateNestedManyWithoutGroupsInputObjectSchema).optional(),
  Todos: z.lazy(() => TodoUncheckedCreateNestedManyWithoutGroupsInputObjectSchema).optional(),
  Posts: z.lazy(() => PostUncheckedCreateNestedManyWithoutGroupsInputObjectSchema).optional(),
  Files: z.lazy(() => FileUncheckedCreateNestedManyWithoutGroupsInputObjectSchema).optional()
}).strict();
export const GroupUncheckedCreateWithoutTagsInputObjectSchema: z.ZodType<Prisma.GroupUncheckedCreateWithoutTagsInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupUncheckedCreateWithoutTagsInput>;
export const GroupUncheckedCreateWithoutTagsInputObjectZodSchema = makeSchema();
