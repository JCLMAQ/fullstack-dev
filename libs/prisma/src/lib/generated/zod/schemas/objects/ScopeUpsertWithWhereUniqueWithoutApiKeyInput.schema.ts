import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { ScopeWhereUniqueInputObjectSchema as ScopeWhereUniqueInputObjectSchema } from './ScopeWhereUniqueInput.schema';
import { ScopeUpdateWithoutApiKeyInputObjectSchema as ScopeUpdateWithoutApiKeyInputObjectSchema } from './ScopeUpdateWithoutApiKeyInput.schema';
import { ScopeUncheckedUpdateWithoutApiKeyInputObjectSchema as ScopeUncheckedUpdateWithoutApiKeyInputObjectSchema } from './ScopeUncheckedUpdateWithoutApiKeyInput.schema';
import { ScopeCreateWithoutApiKeyInputObjectSchema as ScopeCreateWithoutApiKeyInputObjectSchema } from './ScopeCreateWithoutApiKeyInput.schema';
import { ScopeUncheckedCreateWithoutApiKeyInputObjectSchema as ScopeUncheckedCreateWithoutApiKeyInputObjectSchema } from './ScopeUncheckedCreateWithoutApiKeyInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ScopeWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ScopeUpdateWithoutApiKeyInputObjectSchema), z.lazy(() => ScopeUncheckedUpdateWithoutApiKeyInputObjectSchema)]),
  create: z.union([z.lazy(() => ScopeCreateWithoutApiKeyInputObjectSchema), z.lazy(() => ScopeUncheckedCreateWithoutApiKeyInputObjectSchema)])
}).strict();
export const ScopeUpsertWithWhereUniqueWithoutApiKeyInputObjectSchema: z.ZodType<Prisma.ScopeUpsertWithWhereUniqueWithoutApiKeyInput> = makeSchema() as unknown as z.ZodType<Prisma.ScopeUpsertWithWhereUniqueWithoutApiKeyInput>;
export const ScopeUpsertWithWhereUniqueWithoutApiKeyInputObjectZodSchema = makeSchema();
