import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { ApiKeyFindManySchema as ApiKeyFindManySchema } from '../findManyApiKey.schema';
import { ScopeCountOutputTypeArgsObjectSchema as ScopeCountOutputTypeArgsObjectSchema } from './ScopeCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  published: z.boolean().optional(),
  isPublic: z.boolean().optional(),
  isDeleted: z.boolean().optional(),
  isDeletedDT: z.boolean().optional(),
  scope: z.boolean().optional(),
  ApiKey: z.union([z.boolean(), z.lazy(() => ApiKeyFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ScopeCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ScopeSelectObjectSchema: z.ZodType<Prisma.ScopeSelect> = makeSchema() as unknown as z.ZodType<Prisma.ScopeSelect>;
export const ScopeSelectObjectZodSchema = makeSchema();
