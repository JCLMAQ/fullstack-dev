import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ScopeCountOutputTypeCountApiKeyArgsObjectSchema as ScopeCountOutputTypeCountApiKeyArgsObjectSchema } from './ScopeCountOutputTypeCountApiKeyArgs.schema'

const makeSchema = () => z.object({
  ApiKey: z.union([z.boolean(), z.lazy(() => ScopeCountOutputTypeCountApiKeyArgsObjectSchema)]).optional()
}).strict();
export const ScopeCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.ScopeCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.ScopeCountOutputTypeSelect>;
export const ScopeCountOutputTypeSelectObjectZodSchema = makeSchema();
