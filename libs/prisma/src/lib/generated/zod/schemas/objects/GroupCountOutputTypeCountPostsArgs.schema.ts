import * as z from 'zod';
import { PostWhereInputObjectSchema as PostWhereInputObjectSchema } from './PostWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PostWhereInputObjectSchema).optional()
}).strict();
export const GroupCountOutputTypeCountPostsArgsObjectSchema = makeSchema();
export const GroupCountOutputTypeCountPostsArgsObjectZodSchema = makeSchema();
