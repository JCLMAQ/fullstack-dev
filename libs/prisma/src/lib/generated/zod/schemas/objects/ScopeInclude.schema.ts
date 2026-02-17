import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ApiKeyFindManySchema as ApiKeyFindManySchema } from '../findManyApiKey.schema';
import { ScopeCountOutputTypeArgsObjectSchema as ScopeCountOutputTypeArgsObjectSchema } from './ScopeCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  ApiKey: z.union([z.boolean(), z.lazy(() => ApiKeyFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ScopeCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ScopeIncludeObjectSchema: z.ZodType<Prisma.ScopeInclude> = makeSchema() as unknown as z.ZodType<Prisma.ScopeInclude>;
export const ScopeIncludeObjectZodSchema = makeSchema();
