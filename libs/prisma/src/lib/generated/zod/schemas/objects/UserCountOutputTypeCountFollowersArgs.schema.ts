import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserFollowerLinkWhereInputObjectSchema as UserFollowerLinkWhereInputObjectSchema } from './UserFollowerLinkWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserFollowerLinkWhereInputObjectSchema).optional()
}).strict();
export const UserCountOutputTypeCountFollowersArgsObjectSchema = makeSchema();
export const UserCountOutputTypeCountFollowersArgsObjectZodSchema = makeSchema();
