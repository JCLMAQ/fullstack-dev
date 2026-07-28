import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { ScopeCreateWithoutApiKeyInputObjectSchema as ScopeCreateWithoutApiKeyInputObjectSchema } from './ScopeCreateWithoutApiKeyInput.schema';
import { ScopeUncheckedCreateWithoutApiKeyInputObjectSchema as ScopeUncheckedCreateWithoutApiKeyInputObjectSchema } from './ScopeUncheckedCreateWithoutApiKeyInput.schema';
import { ScopeCreateOrConnectWithoutApiKeyInputObjectSchema as ScopeCreateOrConnectWithoutApiKeyInputObjectSchema } from './ScopeCreateOrConnectWithoutApiKeyInput.schema';
import { ScopeWhereUniqueInputObjectSchema as ScopeWhereUniqueInputObjectSchema } from './ScopeWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ScopeCreateWithoutApiKeyInputObjectSchema), z.lazy(() => ScopeCreateWithoutApiKeyInputObjectSchema).array(), z.lazy(() => ScopeUncheckedCreateWithoutApiKeyInputObjectSchema), z.lazy(() => ScopeUncheckedCreateWithoutApiKeyInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ScopeCreateOrConnectWithoutApiKeyInputObjectSchema), z.lazy(() => ScopeCreateOrConnectWithoutApiKeyInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ScopeWhereUniqueInputObjectSchema), z.lazy(() => ScopeWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ScopeUncheckedCreateNestedManyWithoutApiKeyInputObjectSchema: z.ZodType<Prisma.ScopeUncheckedCreateNestedManyWithoutApiKeyInput> = makeSchema() as unknown as z.ZodType<Prisma.ScopeUncheckedCreateNestedManyWithoutApiKeyInput>;
export const ScopeUncheckedCreateNestedManyWithoutApiKeyInputObjectZodSchema = makeSchema();
