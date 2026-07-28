import * as z from 'zod';
import { ScopeCountOutputTypeSelectObjectSchema as ScopeCountOutputTypeSelectObjectSchema } from './ScopeCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ScopeCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const ScopeCountOutputTypeArgsObjectSchema = makeSchema();
export const ScopeCountOutputTypeArgsObjectZodSchema = makeSchema();
