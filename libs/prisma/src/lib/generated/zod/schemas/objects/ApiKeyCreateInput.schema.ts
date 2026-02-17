import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateNestedOneWithoutApiKeysInputObjectSchema as UserCreateNestedOneWithoutApiKeysInputObjectSchema } from './UserCreateNestedOneWithoutApiKeysInput.schema';
import { ScopeCreateNestedManyWithoutApiKeyInputObjectSchema as ScopeCreateNestedManyWithoutApiKeyInputObjectSchema } from './ScopeCreateNestedManyWithoutApiKeyInput.schema'

const makeSchema = () => z.object({
  createdAt: z.coerce.date().optional(),
  published: z.boolean().optional(),
  isPublic: z.boolean().optional(),
  isDeleted: z.number().int().optional(),
  isDeletedDT: z.coerce.date().optional().nullable(),
  key: z.string(),
  uuid: z.string(),
  user: z.lazy(() => UserCreateNestedOneWithoutApiKeysInputObjectSchema),
  Scopes: z.lazy(() => ScopeCreateNestedManyWithoutApiKeyInputObjectSchema).optional()
}).strict();
export const ApiKeyCreateInputObjectSchema: z.ZodType<Prisma.ApiKeyCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ApiKeyCreateInput>;
export const ApiKeyCreateInputObjectZodSchema = makeSchema();
