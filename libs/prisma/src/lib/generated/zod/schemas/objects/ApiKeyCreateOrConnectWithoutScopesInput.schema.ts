import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ApiKeyWhereUniqueInputObjectSchema as ApiKeyWhereUniqueInputObjectSchema } from './ApiKeyWhereUniqueInput.schema';
import { ApiKeyCreateWithoutScopesInputObjectSchema as ApiKeyCreateWithoutScopesInputObjectSchema } from './ApiKeyCreateWithoutScopesInput.schema';
import { ApiKeyUncheckedCreateWithoutScopesInputObjectSchema as ApiKeyUncheckedCreateWithoutScopesInputObjectSchema } from './ApiKeyUncheckedCreateWithoutScopesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ApiKeyWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ApiKeyCreateWithoutScopesInputObjectSchema), z.lazy(() => ApiKeyUncheckedCreateWithoutScopesInputObjectSchema)])
}).strict();
export const ApiKeyCreateOrConnectWithoutScopesInputObjectSchema: z.ZodType<Prisma.ApiKeyCreateOrConnectWithoutScopesInput> = makeSchema() as unknown as z.ZodType<Prisma.ApiKeyCreateOrConnectWithoutScopesInput>;
export const ApiKeyCreateOrConnectWithoutScopesInputObjectZodSchema = makeSchema();
