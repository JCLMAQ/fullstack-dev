import * as z from 'zod';
import { UserFollowerLinkWhereInputObjectSchema as UserFollowerLinkWhereInputObjectSchema } from './UserFollowerLinkWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserFollowerLinkWhereInputObjectSchema).optional()
}).strict();
export const UserCountOutputTypeCountFollowingsArgsObjectSchema = makeSchema();
export const UserCountOutputTypeCountFollowingsArgsObjectZodSchema = makeSchema();
