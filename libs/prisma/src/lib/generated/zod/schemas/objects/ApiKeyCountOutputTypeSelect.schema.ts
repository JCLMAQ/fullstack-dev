import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ApiKeyCountOutputTypeCountScopesArgsObjectSchema as ApiKeyCountOutputTypeCountScopesArgsObjectSchema } from './ApiKeyCountOutputTypeCountScopesArgs.schema'

const makeSchema = () => z.object({
  Scopes: z.union([z.boolean(), z.lazy(() => ApiKeyCountOutputTypeCountScopesArgsObjectSchema)]).optional()
}).strict();
export const ApiKeyCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.ApiKeyCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.ApiKeyCountOutputTypeSelect>;
export const ApiKeyCountOutputTypeSelectObjectZodSchema = makeSchema();
