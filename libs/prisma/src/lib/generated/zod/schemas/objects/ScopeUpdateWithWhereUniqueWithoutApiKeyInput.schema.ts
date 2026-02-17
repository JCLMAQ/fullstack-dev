import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ScopeWhereUniqueInputObjectSchema as ScopeWhereUniqueInputObjectSchema } from './ScopeWhereUniqueInput.schema';
import { ScopeUpdateWithoutApiKeyInputObjectSchema as ScopeUpdateWithoutApiKeyInputObjectSchema } from './ScopeUpdateWithoutApiKeyInput.schema';
import { ScopeUncheckedUpdateWithoutApiKeyInputObjectSchema as ScopeUncheckedUpdateWithoutApiKeyInputObjectSchema } from './ScopeUncheckedUpdateWithoutApiKeyInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ScopeWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ScopeUpdateWithoutApiKeyInputObjectSchema), z.lazy(() => ScopeUncheckedUpdateWithoutApiKeyInputObjectSchema)])
}).strict();
export const ScopeUpdateWithWhereUniqueWithoutApiKeyInputObjectSchema: z.ZodType<Prisma.ScopeUpdateWithWhereUniqueWithoutApiKeyInput> = makeSchema() as unknown as z.ZodType<Prisma.ScopeUpdateWithWhereUniqueWithoutApiKeyInput>;
export const ScopeUpdateWithWhereUniqueWithoutApiKeyInputObjectZodSchema = makeSchema();
