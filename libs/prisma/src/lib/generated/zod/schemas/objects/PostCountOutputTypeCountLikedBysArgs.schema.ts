import * as z from 'zod';
import { UserPostLikeLinkWhereInputObjectSchema as UserPostLikeLinkWhereInputObjectSchema } from './UserPostLikeLinkWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserPostLikeLinkWhereInputObjectSchema).optional()
}).strict();
export const PostCountOutputTypeCountLikedBysArgsObjectSchema = makeSchema();
export const PostCountOutputTypeCountLikedBysArgsObjectZodSchema = makeSchema();
