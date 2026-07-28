import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { ScopeWhereInputObjectSchema as ScopeWhereInputObjectSchema } from './ScopeWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => ScopeWhereInputObjectSchema).optional(),
  some: z.lazy(() => ScopeWhereInputObjectSchema).optional(),
  none: z.lazy(() => ScopeWhereInputObjectSchema).optional()
}).strict();
export const ScopeListRelationFilterObjectSchema: z.ZodType<Prisma.ScopeListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ScopeListRelationFilter>;
export const ScopeListRelationFilterObjectZodSchema = makeSchema();
