import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserTodoLinkWhereInputObjectSchema as UserTodoLinkWhereInputObjectSchema } from './UserTodoLinkWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserTodoLinkWhereInputObjectSchema).optional()
}).strict();
export const UserCountOutputTypeCountTodoArgsObjectSchema = makeSchema();
export const UserCountOutputTypeCountTodoArgsObjectZodSchema = makeSchema();
