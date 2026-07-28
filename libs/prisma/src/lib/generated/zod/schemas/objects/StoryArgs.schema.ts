import * as z from 'zod';
import { StorySelectObjectSchema as StorySelectObjectSchema } from './StorySelect.schema';
import { StoryIncludeObjectSchema as StoryIncludeObjectSchema } from './StoryInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => StorySelectObjectSchema).optional(),
  include: z.lazy(() => StoryIncludeObjectSchema).optional()
}).strict();
export const StoryArgsObjectSchema = makeSchema();
export const StoryArgsObjectZodSchema = makeSchema();
