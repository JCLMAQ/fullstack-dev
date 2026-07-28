import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { ApiKeyCreateWithoutScopesInputObjectSchema as ApiKeyCreateWithoutScopesInputObjectSchema } from './ApiKeyCreateWithoutScopesInput.schema';
import { ApiKeyUncheckedCreateWithoutScopesInputObjectSchema as ApiKeyUncheckedCreateWithoutScopesInputObjectSchema } from './ApiKeyUncheckedCreateWithoutScopesInput.schema';
import { ApiKeyCreateOrConnectWithoutScopesInputObjectSchema as ApiKeyCreateOrConnectWithoutScopesInputObjectSchema } from './ApiKeyCreateOrConnectWithoutScopesInput.schema';
import { ApiKeyWhereUniqueInputObjectSchema as ApiKeyWhereUniqueInputObjectSchema } from './ApiKeyWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ApiKeyCreateWithoutScopesInputObjectSchema), z.lazy(() => ApiKeyCreateWithoutScopesInputObjectSchema).array(), z.lazy(() => ApiKeyUncheckedCreateWithoutScopesInputObjectSchema), z.lazy(() => ApiKeyUncheckedCreateWithoutScopesInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ApiKeyCreateOrConnectWithoutScopesInputObjectSchema), z.lazy(() => ApiKeyCreateOrConnectWithoutScopesInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ApiKeyWhereUniqueInputObjectSchema), z.lazy(() => ApiKeyWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ApiKeyUncheckedCreateNestedManyWithoutScopesInputObjectSchema: z.ZodType<Prisma.ApiKeyUncheckedCreateNestedManyWithoutScopesInput> = makeSchema() as unknown as z.ZodType<Prisma.ApiKeyUncheckedCreateNestedManyWithoutScopesInput>;
export const ApiKeyUncheckedCreateNestedManyWithoutScopesInputObjectZodSchema = makeSchema();
