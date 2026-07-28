import * as z from 'zod';
import { UserTodoLinkWhereInputObjectSchema as UserTodoLinkWhereInputObjectSchema } from './UserTodoLinkWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserTodoLinkWhereInputObjectSchema).optional()
}).strict();
export const TodoCountOutputTypeCountUsersArgsObjectSchema = makeSchema();
export const TodoCountOutputTypeCountUsersArgsObjectZodSchema = makeSchema();
