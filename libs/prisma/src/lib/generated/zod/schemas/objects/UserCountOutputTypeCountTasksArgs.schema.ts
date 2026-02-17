import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserTaskLinkWhereInputObjectSchema as UserTaskLinkWhereInputObjectSchema } from './UserTaskLinkWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserTaskLinkWhereInputObjectSchema).optional()
}).strict();
export const UserCountOutputTypeCountTasksArgsObjectSchema = makeSchema();
export const UserCountOutputTypeCountTasksArgsObjectZodSchema = makeSchema();
