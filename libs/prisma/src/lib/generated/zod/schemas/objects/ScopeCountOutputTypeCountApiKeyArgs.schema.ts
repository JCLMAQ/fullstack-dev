import * as z from 'zod';
import { ApiKeyWhereInputObjectSchema as ApiKeyWhereInputObjectSchema } from './ApiKeyWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ApiKeyWhereInputObjectSchema).optional()
}).strict();
export const ScopeCountOutputTypeCountApiKeyArgsObjectSchema = makeSchema();
export const ScopeCountOutputTypeCountApiKeyArgsObjectZodSchema = makeSchema();
