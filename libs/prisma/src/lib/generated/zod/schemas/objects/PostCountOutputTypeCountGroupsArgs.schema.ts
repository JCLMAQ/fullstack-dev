import * as z from 'zod';
import { GroupWhereInputObjectSchema as GroupWhereInputObjectSchema } from './GroupWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GroupWhereInputObjectSchema).optional()
}).strict();
export const PostCountOutputTypeCountGroupsArgsObjectSchema = makeSchema();
export const PostCountOutputTypeCountGroupsArgsObjectZodSchema = makeSchema();
