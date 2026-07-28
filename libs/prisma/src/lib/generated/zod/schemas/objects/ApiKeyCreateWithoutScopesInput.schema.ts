import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserCreateNestedOneWithoutApiKeysInputObjectSchema as UserCreateNestedOneWithoutApiKeysInputObjectSchema } from './UserCreateNestedOneWithoutApiKeysInput.schema'

const makeSchema = () => z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  published: z.boolean().optional(),
  isPublic: z.boolean().optional(),
  isDeleted: z.number().int().optional(),
  isDeletedDT: z.coerce.date().optional().nullable(),
  key: z.string(),
  uuid: z.string(),
  user: z.lazy(() => UserCreateNestedOneWithoutApiKeysInputObjectSchema)
}).strict();
export const ApiKeyCreateWithoutScopesInputObjectSchema: z.ZodType<Prisma.ApiKeyCreateWithoutScopesInput> = makeSchema() as unknown as z.ZodType<Prisma.ApiKeyCreateWithoutScopesInput>;
export const ApiKeyCreateWithoutScopesInputObjectZodSchema = makeSchema();
