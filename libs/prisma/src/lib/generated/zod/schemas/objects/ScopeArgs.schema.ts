import * as z from 'zod';
import { ScopeSelectObjectSchema as ScopeSelectObjectSchema } from './ScopeSelect.schema';
import { ScopeIncludeObjectSchema as ScopeIncludeObjectSchema } from './ScopeInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ScopeSelectObjectSchema).optional(),
  include: z.lazy(() => ScopeIncludeObjectSchema).optional()
}).strict();
export const ScopeArgsObjectSchema = makeSchema();
export const ScopeArgsObjectZodSchema = makeSchema();
