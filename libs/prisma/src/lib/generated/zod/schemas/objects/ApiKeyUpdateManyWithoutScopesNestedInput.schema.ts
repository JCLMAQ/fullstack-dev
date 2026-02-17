import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ApiKeyCreateWithoutScopesInputObjectSchema as ApiKeyCreateWithoutScopesInputObjectSchema } from './ApiKeyCreateWithoutScopesInput.schema';
import { ApiKeyUncheckedCreateWithoutScopesInputObjectSchema as ApiKeyUncheckedCreateWithoutScopesInputObjectSchema } from './ApiKeyUncheckedCreateWithoutScopesInput.schema';
import { ApiKeyCreateOrConnectWithoutScopesInputObjectSchema as ApiKeyCreateOrConnectWithoutScopesInputObjectSchema } from './ApiKeyCreateOrConnectWithoutScopesInput.schema';
import { ApiKeyUpsertWithWhereUniqueWithoutScopesInputObjectSchema as ApiKeyUpsertWithWhereUniqueWithoutScopesInputObjectSchema } from './ApiKeyUpsertWithWhereUniqueWithoutScopesInput.schema';
import { ApiKeyWhereUniqueInputObjectSchema as ApiKeyWhereUniqueInputObjectSchema } from './ApiKeyWhereUniqueInput.schema';
import { ApiKeyUpdateWithWhereUniqueWithoutScopesInputObjectSchema as ApiKeyUpdateWithWhereUniqueWithoutScopesInputObjectSchema } from './ApiKeyUpdateWithWhereUniqueWithoutScopesInput.schema';
import { ApiKeyUpdateManyWithWhereWithoutScopesInputObjectSchema as ApiKeyUpdateManyWithWhereWithoutScopesInputObjectSchema } from './ApiKeyUpdateManyWithWhereWithoutScopesInput.schema';
import { ApiKeyScalarWhereInputObjectSchema as ApiKeyScalarWhereInputObjectSchema } from './ApiKeyScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ApiKeyCreateWithoutScopesInputObjectSchema), z.lazy(() => ApiKeyCreateWithoutScopesInputObjectSchema).array(), z.lazy(() => ApiKeyUncheckedCreateWithoutScopesInputObjectSchema), z.lazy(() => ApiKeyUncheckedCreateWithoutScopesInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ApiKeyCreateOrConnectWithoutScopesInputObjectSchema), z.lazy(() => ApiKeyCreateOrConnectWithoutScopesInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ApiKeyUpsertWithWhereUniqueWithoutScopesInputObjectSchema), z.lazy(() => ApiKeyUpsertWithWhereUniqueWithoutScopesInputObjectSchema).array()]).optional(),
  set: z.union([z.lazy(() => ApiKeyWhereUniqueInputObjectSchema), z.lazy(() => ApiKeyWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ApiKeyWhereUniqueInputObjectSchema), z.lazy(() => ApiKeyWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ApiKeyWhereUniqueInputObjectSchema), z.lazy(() => ApiKeyWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ApiKeyWhereUniqueInputObjectSchema), z.lazy(() => ApiKeyWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ApiKeyUpdateWithWhereUniqueWithoutScopesInputObjectSchema), z.lazy(() => ApiKeyUpdateWithWhereUniqueWithoutScopesInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ApiKeyUpdateManyWithWhereWithoutScopesInputObjectSchema), z.lazy(() => ApiKeyUpdateManyWithWhereWithoutScopesInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ApiKeyScalarWhereInputObjectSchema), z.lazy(() => ApiKeyScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ApiKeyUpdateManyWithoutScopesNestedInputObjectSchema: z.ZodType<Prisma.ApiKeyUpdateManyWithoutScopesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ApiKeyUpdateManyWithoutScopesNestedInput>;
export const ApiKeyUpdateManyWithoutScopesNestedInputObjectZodSchema = makeSchema();
