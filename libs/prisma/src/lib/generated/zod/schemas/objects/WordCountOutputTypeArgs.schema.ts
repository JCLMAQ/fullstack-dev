import * as z from 'zod';
import { WordCountOutputTypeSelectObjectSchema as WordCountOutputTypeSelectObjectSchema } from './WordCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => WordCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const WordCountOutputTypeArgsObjectSchema = makeSchema();
export const WordCountOutputTypeArgsObjectZodSchema = makeSchema();
