import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserPostLikeLinkWhereInputObjectSchema as UserPostLikeLinkWhereInputObjectSchema } from './UserPostLikeLinkWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserPostLikeLinkWhereInputObjectSchema).optional()
}).strict();
export const UserCountOutputTypeCountPostsLikedArgsObjectSchema = makeSchema();
export const UserCountOutputTypeCountPostsLikedArgsObjectZodSchema = makeSchema();
