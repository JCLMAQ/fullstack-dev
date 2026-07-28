import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { ApiKeyWhereUniqueInputObjectSchema as ApiKeyWhereUniqueInputObjectSchema } from './ApiKeyWhereUniqueInput.schema';
import { ApiKeyUpdateWithoutScopesInputObjectSchema as ApiKeyUpdateWithoutScopesInputObjectSchema } from './ApiKeyUpdateWithoutScopesInput.schema';
import { ApiKeyUncheckedUpdateWithoutScopesInputObjectSchema as ApiKeyUncheckedUpdateWithoutScopesInputObjectSchema } from './ApiKeyUncheckedUpdateWithoutScopesInput.schema';
import { ApiKeyCreateWithoutScopesInputObjectSchema as ApiKeyCreateWithoutScopesInputObjectSchema } from './ApiKeyCreateWithoutScopesInput.schema';
import { ApiKeyUncheckedCreateWithoutScopesInputObjectSchema as ApiKeyUncheckedCreateWithoutScopesInputObjectSchema } from './ApiKeyUncheckedCreateWithoutScopesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ApiKeyWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ApiKeyUpdateWithoutScopesInputObjectSchema), z.lazy(() => ApiKeyUncheckedUpdateWithoutScopesInputObjectSchema)]),
  create: z.union([z.lazy(() => ApiKeyCreateWithoutScopesInputObjectSchema), z.lazy(() => ApiKeyUncheckedCreateWithoutScopesInputObjectSchema)])
}).strict();
export const ApiKeyUpsertWithWhereUniqueWithoutScopesInputObjectSchema: z.ZodType<Prisma.ApiKeyUpsertWithWhereUniqueWithoutScopesInput> = makeSchema() as unknown as z.ZodType<Prisma.ApiKeyUpsertWithWhereUniqueWithoutScopesInput>;
export const ApiKeyUpsertWithWhereUniqueWithoutScopesInputObjectZodSchema = makeSchema();
