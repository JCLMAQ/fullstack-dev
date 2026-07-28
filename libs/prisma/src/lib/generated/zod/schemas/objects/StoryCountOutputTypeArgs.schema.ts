import * as z from 'zod';
import { StoryCountOutputTypeSelectObjectSchema as StoryCountOutputTypeSelectObjectSchema } from './StoryCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => StoryCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const StoryCountOutputTypeArgsObjectSchema = makeSchema();
export const StoryCountOutputTypeArgsObjectZodSchema = makeSchema();
