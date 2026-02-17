import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ScopeWhereInputObjectSchema as ScopeWhereInputObjectSchema } from './ScopeWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ScopeWhereInputObjectSchema).optional()
}).strict();
export const ApiKeyCountOutputTypeCountScopesArgsObjectSchema = makeSchema();
export const ApiKeyCountOutputTypeCountScopesArgsObjectZodSchema = makeSchema();
