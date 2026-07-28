import * as z from 'zod';
import { StoryWhereInputObjectSchema as StoryWhereInputObjectSchema } from './StoryWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StoryWhereInputObjectSchema).optional()
}).strict();
export const UserCountOutputTypeCountStoriesArgsObjectSchema = makeSchema();
export const UserCountOutputTypeCountStoriesArgsObjectZodSchema = makeSchema();
