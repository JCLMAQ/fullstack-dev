import * as z from 'zod';
import { ScopeWhereInputObjectSchema as ScopeWhereInputObjectSchema } from './ScopeWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ScopeWhereInputObjectSchema).optional()
}).strict();
export const ApiKeyCountOutputTypeCountScopesArgsObjectSchema = makeSchema();
export const ApiKeyCountOutputTypeCountScopesArgsObjectZodSchema = makeSchema();
