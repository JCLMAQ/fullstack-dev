import * as z from 'zod';
import { TagValueWhereInputObjectSchema as TagValueWhereInputObjectSchema } from './TagValueWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TagValueWhereInputObjectSchema).optional()
}).strict();
export const TagValueCountOutputTypeCountSubTagsArgsObjectSchema = makeSchema();
export const TagValueCountOutputTypeCountSubTagsArgsObjectZodSchema = makeSchema();
