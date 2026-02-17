import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ApiKeyWhereUniqueInputObjectSchema as ApiKeyWhereUniqueInputObjectSchema } from './ApiKeyWhereUniqueInput.schema';
import { ApiKeyUpdateWithoutScopesInputObjectSchema as ApiKeyUpdateWithoutScopesInputObjectSchema } from './ApiKeyUpdateWithoutScopesInput.schema';
import { ApiKeyUncheckedUpdateWithoutScopesInputObjectSchema as ApiKeyUncheckedUpdateWithoutScopesInputObjectSchema } from './ApiKeyUncheckedUpdateWithoutScopesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ApiKeyWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ApiKeyUpdateWithoutScopesInputObjectSchema), z.lazy(() => ApiKeyUncheckedUpdateWithoutScopesInputObjectSchema)])
}).strict();
export const ApiKeyUpdateWithWhereUniqueWithoutScopesInputObjectSchema: z.ZodType<Prisma.ApiKeyUpdateWithWhereUniqueWithoutScopesInput> = makeSchema() as unknown as z.ZodType<Prisma.ApiKeyUpdateWithWhereUniqueWithoutScopesInput>;
export const ApiKeyUpdateWithWhereUniqueWithoutScopesInputObjectZodSchema = makeSchema();
