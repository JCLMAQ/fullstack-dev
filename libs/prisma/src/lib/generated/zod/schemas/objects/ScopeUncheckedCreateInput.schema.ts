import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { ApiKeyUncheckedCreateNestedManyWithoutScopesInputObjectSchema as ApiKeyUncheckedCreateNestedManyWithoutScopesInputObjectSchema } from './ApiKeyUncheckedCreateNestedManyWithoutScopesInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  published: z.boolean().optional(),
  isPublic: z.boolean().optional(),
  isDeleted: z.number().int().optional(),
  isDeletedDT: z.coerce.date().optional().nullable(),
  scope: z.string(),
  ApiKey: z.lazy(() => ApiKeyUncheckedCreateNestedManyWithoutScopesInputObjectSchema).optional()
}).strict();
export const ScopeUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ScopeUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ScopeUncheckedCreateInput>;
export const ScopeUncheckedCreateInputObjectZodSchema = makeSchema();
