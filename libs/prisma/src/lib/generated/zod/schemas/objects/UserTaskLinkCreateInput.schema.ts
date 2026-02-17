import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateNestedOneWithoutTasksInputObjectSchema as UserCreateNestedOneWithoutTasksInputObjectSchema } from './UserCreateNestedOneWithoutTasksInput.schema';
import { TaskCreateNestedOneWithoutUsersInputObjectSchema as TaskCreateNestedOneWithoutUsersInputObjectSchema } from './TaskCreateNestedOneWithoutUsersInput.schema'

const makeSchema = () => z.object({
  isAuthor: z.boolean().optional(),
  isAssigned: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  comment: z.string(),
  user: z.lazy(() => UserCreateNestedOneWithoutTasksInputObjectSchema),
  task: z.lazy(() => TaskCreateNestedOneWithoutUsersInputObjectSchema)
}).strict();
export const UserTaskLinkCreateInputObjectSchema: z.ZodType<Prisma.UserTaskLinkCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserTaskLinkCreateInput>;
export const UserTaskLinkCreateInputObjectZodSchema = makeSchema();
