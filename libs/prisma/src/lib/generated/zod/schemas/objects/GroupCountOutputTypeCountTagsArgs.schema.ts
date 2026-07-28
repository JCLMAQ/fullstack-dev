import * as z from 'zod';
import { TagValueWhereInputObjectSchema as TagValueWhereInputObjectSchema } from './TagValueWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TagValueWhereInputObjectSchema).optional()
}).strict();
export const GroupCountOutputTypeCountTagsArgsObjectSchema = makeSchema();
export const GroupCountOutputTypeCountTagsArgsObjectZodSchema = makeSchema();
