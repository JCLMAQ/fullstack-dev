import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserCreateNestedOneWithoutTodoInputObjectSchema as UserCreateNestedOneWithoutTodoInputObjectSchema } from './UserCreateNestedOneWithoutTodoInput.schema'

const makeSchema = () => z.object({
  isAuthor: z.boolean().optional(),
  isAssigned: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  comment: z.string(),
  user: z.lazy(() => UserCreateNestedOneWithoutTodoInputObjectSchema)
}).strict();
export const UserTodoLinkCreateWithoutTodoInputObjectSchema: z.ZodType<Prisma.UserTodoLinkCreateWithoutTodoInput> = makeSchema() as unknown as z.ZodType<Prisma.UserTodoLinkCreateWithoutTodoInput>;
export const UserTodoLinkCreateWithoutTodoInputObjectZodSchema = makeSchema();
