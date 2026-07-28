import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserCreateNestedOneWithoutTodoInputObjectSchema as UserCreateNestedOneWithoutTodoInputObjectSchema } from './UserCreateNestedOneWithoutTodoInput.schema';
import { TodoCreateNestedOneWithoutUsersInputObjectSchema as TodoCreateNestedOneWithoutUsersInputObjectSchema } from './TodoCreateNestedOneWithoutUsersInput.schema'

const makeSchema = () => z.object({
  isAuthor: z.boolean().optional(),
  isAssigned: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  comment: z.string(),
  user: z.lazy(() => UserCreateNestedOneWithoutTodoInputObjectSchema),
  todo: z.lazy(() => TodoCreateNestedOneWithoutUsersInputObjectSchema)
}).strict();
export const UserTodoLinkCreateInputObjectSchema: z.ZodType<Prisma.UserTodoLinkCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserTodoLinkCreateInput>;
export const UserTodoLinkCreateInputObjectZodSchema = makeSchema();
