import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { ScopeUncheckedCreateNestedManyWithoutApiKeyInputObjectSchema as ScopeUncheckedCreateNestedManyWithoutApiKeyInputObjectSchema } from './ScopeUncheckedCreateNestedManyWithoutApiKeyInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  published: z.boolean().optional(),
  isPublic: z.boolean().optional(),
  isDeleted: z.number().int().optional(),
  isDeletedDT: z.coerce.date().optional().nullable(),
  key: z.string(),
  uuid: z.string(),
  Scopes: z.lazy(() => ScopeUncheckedCreateNestedManyWithoutApiKeyInputObjectSchema).optional()
}).strict();
export const ApiKeyUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.ApiKeyUncheckedCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ApiKeyUncheckedCreateWithoutUserInput>;
export const ApiKeyUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
