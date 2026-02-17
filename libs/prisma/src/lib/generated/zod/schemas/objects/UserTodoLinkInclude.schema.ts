import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { TodoArgsObjectSchema as TodoArgsObjectSchema } from './TodoArgs.schema'

const makeSchema = () => z.object({
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  todo: z.union([z.boolean(), z.lazy(() => TodoArgsObjectSchema)]).optional()
}).strict();
export const UserTodoLinkIncludeObjectSchema: z.ZodType<Prisma.UserTodoLinkInclude> = makeSchema() as unknown as z.ZodType<Prisma.UserTodoLinkInclude>;
export const UserTodoLinkIncludeObjectZodSchema = makeSchema();
