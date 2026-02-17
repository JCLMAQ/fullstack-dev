import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ScopeCountOutputTypeSelectObjectSchema as ScopeCountOutputTypeSelectObjectSchema } from './ScopeCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ScopeCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const ScopeCountOutputTypeArgsObjectSchema = makeSchema();
export const ScopeCountOutputTypeArgsObjectZodSchema = makeSchema();
