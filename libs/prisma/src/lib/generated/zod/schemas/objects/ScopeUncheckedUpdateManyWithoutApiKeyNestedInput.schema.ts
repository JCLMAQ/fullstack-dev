import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ScopeCreateWithoutApiKeyInputObjectSchema as ScopeCreateWithoutApiKeyInputObjectSchema } from './ScopeCreateWithoutApiKeyInput.schema';
import { ScopeUncheckedCreateWithoutApiKeyInputObjectSchema as ScopeUncheckedCreateWithoutApiKeyInputObjectSchema } from './ScopeUncheckedCreateWithoutApiKeyInput.schema';
import { ScopeCreateOrConnectWithoutApiKeyInputObjectSchema as ScopeCreateOrConnectWithoutApiKeyInputObjectSchema } from './ScopeCreateOrConnectWithoutApiKeyInput.schema';
import { ScopeUpsertWithWhereUniqueWithoutApiKeyInputObjectSchema as ScopeUpsertWithWhereUniqueWithoutApiKeyInputObjectSchema } from './ScopeUpsertWithWhereUniqueWithoutApiKeyInput.schema';
import { ScopeWhereUniqueInputObjectSchema as ScopeWhereUniqueInputObjectSchema } from './ScopeWhereUniqueInput.schema';
import { ScopeUpdateWithWhereUniqueWithoutApiKeyInputObjectSchema as ScopeUpdateWithWhereUniqueWithoutApiKeyInputObjectSchema } from './ScopeUpdateWithWhereUniqueWithoutApiKeyInput.schema';
import { ScopeUpdateManyWithWhereWithoutApiKeyInputObjectSchema as ScopeUpdateManyWithWhereWithoutApiKeyInputObjectSchema } from './ScopeUpdateManyWithWhereWithoutApiKeyInput.schema';
import { ScopeScalarWhereInputObjectSchema as ScopeScalarWhereInputObjectSchema } from './ScopeScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ScopeCreateWithoutApiKeyInputObjectSchema), z.lazy(() => ScopeCreateWithoutApiKeyInputObjectSchema).array(), z.lazy(() => ScopeUncheckedCreateWithoutApiKeyInputObjectSchema), z.lazy(() => ScopeUncheckedCreateWithoutApiKeyInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ScopeCreateOrConnectWithoutApiKeyInputObjectSchema), z.lazy(() => ScopeCreateOrConnectWithoutApiKeyInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ScopeUpsertWithWhereUniqueWithoutApiKeyInputObjectSchema), z.lazy(() => ScopeUpsertWithWhereUniqueWithoutApiKeyInputObjectSchema).array()]).optional(),
  set: z.union([z.lazy(() => ScopeWhereUniqueInputObjectSchema), z.lazy(() => ScopeWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ScopeWhereUniqueInputObjectSchema), z.lazy(() => ScopeWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ScopeWhereUniqueInputObjectSchema), z.lazy(() => ScopeWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ScopeWhereUniqueInputObjectSchema), z.lazy(() => ScopeWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ScopeUpdateWithWhereUniqueWithoutApiKeyInputObjectSchema), z.lazy(() => ScopeUpdateWithWhereUniqueWithoutApiKeyInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ScopeUpdateManyWithWhereWithoutApiKeyInputObjectSchema), z.lazy(() => ScopeUpdateManyWithWhereWithoutApiKeyInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ScopeScalarWhereInputObjectSchema), z.lazy(() => ScopeScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ScopeUncheckedUpdateManyWithoutApiKeyNestedInputObjectSchema: z.ZodType<Prisma.ScopeUncheckedUpdateManyWithoutApiKeyNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ScopeUncheckedUpdateManyWithoutApiKeyNestedInput>;
export const ScopeUncheckedUpdateManyWithoutApiKeyNestedInputObjectZodSchema = makeSchema();
