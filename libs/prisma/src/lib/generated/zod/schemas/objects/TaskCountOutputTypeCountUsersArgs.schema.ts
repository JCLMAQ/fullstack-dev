import * as z from 'zod';
import { UserTaskLinkWhereInputObjectSchema as UserTaskLinkWhereInputObjectSchema } from './UserTaskLinkWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserTaskLinkWhereInputObjectSchema).optional()
}).strict();
export const TaskCountOutputTypeCountUsersArgsObjectSchema = makeSchema();
export const TaskCountOutputTypeCountUsersArgsObjectZodSchema = makeSchema();
