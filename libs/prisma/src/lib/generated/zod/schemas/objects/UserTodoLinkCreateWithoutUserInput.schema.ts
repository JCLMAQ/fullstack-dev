import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TodoCreateNestedOneWithoutUsersInputObjectSchema as TodoCreateNestedOneWithoutUsersInputObjectSchema } from './TodoCreateNestedOneWithoutUsersInput.schema'

const makeSchema = () => z.object({
  isAuthor: z.boolean().optional(),
  isAssigned: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  comment: z.string(),
  todo: z.lazy(() => TodoCreateNestedOneWithoutUsersInputObjectSchema)
}).strict();
export const UserTodoLinkCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.UserTodoLinkCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.UserTodoLinkCreateWithoutUserInput>;
export const UserTodoLinkCreateWithoutUserInputObjectZodSchema = makeSchema();
