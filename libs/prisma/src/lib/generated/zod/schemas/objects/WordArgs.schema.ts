import * as z from 'zod';
import { WordSelectObjectSchema as WordSelectObjectSchema } from './WordSelect.schema';
import { WordIncludeObjectSchema as WordIncludeObjectSchema } from './WordInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => WordSelectObjectSchema).optional(),
  include: z.lazy(() => WordIncludeObjectSchema).optional()
}).strict();
export const WordArgsObjectSchema = makeSchema();
export const WordArgsObjectZodSchema = makeSchema();
