import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ScopeCreateNestedManyWithoutApiKeyInputObjectSchema as ScopeCreateNestedManyWithoutApiKeyInputObjectSchema } from './ScopeCreateNestedManyWithoutApiKeyInput.schema'

const makeSchema = () => z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  published: z.boolean().optional(),
  isPublic: z.boolean().optional(),
  isDeleted: z.number().int().optional(),
  isDeletedDT: z.coerce.date().optional().nullable(),
  key: z.string(),
  uuid: z.string(),
  Scopes: z.lazy(() => ScopeCreateNestedManyWithoutApiKeyInputObjectSchema).optional()
}).strict();
export const ApiKeyCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.ApiKeyCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ApiKeyCreateWithoutUserInput>;
export const ApiKeyCreateWithoutUserInputObjectZodSchema = makeSchema();
