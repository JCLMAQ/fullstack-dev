import * as z from 'zod';
import { UserTodoLinkSelectObjectSchema as UserTodoLinkSelectObjectSchema } from './UserTodoLinkSelect.schema';
import { UserTodoLinkIncludeObjectSchema as UserTodoLinkIncludeObjectSchema } from './UserTodoLinkInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => UserTodoLinkSelectObjectSchema).optional(),
  include: z.lazy(() => UserTodoLinkIncludeObjectSchema).optional()
}).strict();
export const UserTodoLinkArgsObjectSchema = makeSchema();
export const UserTodoLinkArgsObjectZodSchema = makeSchema();
