import * as z from 'zod';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserCountOutputTypeCountTeamArgsObjectSchema = makeSchema();
export const UserCountOutputTypeCountTeamArgsObjectZodSchema = makeSchema();
