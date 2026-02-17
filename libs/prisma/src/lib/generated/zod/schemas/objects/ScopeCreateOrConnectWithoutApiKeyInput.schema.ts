import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ScopeWhereUniqueInputObjectSchema as ScopeWhereUniqueInputObjectSchema } from './ScopeWhereUniqueInput.schema';
import { ScopeCreateWithoutApiKeyInputObjectSchema as ScopeCreateWithoutApiKeyInputObjectSchema } from './ScopeCreateWithoutApiKeyInput.schema';
import { ScopeUncheckedCreateWithoutApiKeyInputObjectSchema as ScopeUncheckedCreateWithoutApiKeyInputObjectSchema } from './ScopeUncheckedCreateWithoutApiKeyInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ScopeWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ScopeCreateWithoutApiKeyInputObjectSchema), z.lazy(() => ScopeUncheckedCreateWithoutApiKeyInputObjectSchema)])
}).strict();
export const ScopeCreateOrConnectWithoutApiKeyInputObjectSchema: z.ZodType<Prisma.ScopeCreateOrConnectWithoutApiKeyInput> = makeSchema() as unknown as z.ZodType<Prisma.ScopeCreateOrConnectWithoutApiKeyInput>;
export const ScopeCreateOrConnectWithoutApiKeyInputObjectZodSchema = makeSchema();
