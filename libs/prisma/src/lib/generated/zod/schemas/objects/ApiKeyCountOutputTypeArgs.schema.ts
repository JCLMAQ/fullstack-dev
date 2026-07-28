import * as z from 'zod';
import { ApiKeyCountOutputTypeSelectObjectSchema as ApiKeyCountOutputTypeSelectObjectSchema } from './ApiKeyCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ApiKeyCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const ApiKeyCountOutputTypeArgsObjectSchema = makeSchema();
export const ApiKeyCountOutputTypeArgsObjectZodSchema = makeSchema();
