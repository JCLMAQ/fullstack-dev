import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { TodoArgsObjectSchema as TodoArgsObjectSchema } from './TodoArgs.schema'

const makeSchema = () => z.object({
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  userId: z.boolean().optional(),
  todo: z.union([z.boolean(), z.lazy(() => TodoArgsObjectSchema)]).optional(),
  todoId: z.boolean().optional(),
  isAuthor: z.boolean().optional(),
  isAssigned: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  comment: z.boolean().optional()
}).strict();
export const UserTodoLinkSelectObjectSchema: z.ZodType<Prisma.UserTodoLinkSelect> = makeSchema() as unknown as z.ZodType<Prisma.UserTodoLinkSelect>;
export const UserTodoLinkSelectObjectZodSchema = makeSchema();
