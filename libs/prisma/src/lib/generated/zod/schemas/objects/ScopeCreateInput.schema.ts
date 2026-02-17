import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ApiKeyCreateNestedManyWithoutScopesInputObjectSchema as ApiKeyCreateNestedManyWithoutScopesInputObjectSchema } from './ApiKeyCreateNestedManyWithoutScopesInput.schema'

const makeSchema = () => z.object({
  createdAt: z.coerce.date().optional(),
  published: z.boolean().optional(),
  isPublic: z.boolean().optional(),
  isDeleted: z.number().int().optional(),
  isDeletedDT: z.coerce.date().optional().nullable(),
  scope: z.string(),
  ApiKey: z.lazy(() => ApiKeyCreateNestedManyWithoutScopesInputObjectSchema).optional()
}).strict();
export const ScopeCreateInputObjectSchema: z.ZodType<Prisma.ScopeCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ScopeCreateInput>;
export const ScopeCreateInputObjectZodSchema = makeSchema();
