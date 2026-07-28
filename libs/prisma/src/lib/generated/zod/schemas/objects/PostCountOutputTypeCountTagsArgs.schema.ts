import * as z from 'zod';
import { TagValueWhereInputObjectSchema as TagValueWhereInputObjectSchema } from './TagValueWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TagValueWhereInputObjectSchema).optional()
}).strict();
export const PostCountOutputTypeCountTagsArgsObjectSchema = makeSchema();
export const PostCountOutputTypeCountTagsArgsObjectZodSchema = makeSchema();
