import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { ApiKeyCreateWithoutUserInputObjectSchema as ApiKeyCreateWithoutUserInputObjectSchema } from './ApiKeyCreateWithoutUserInput.schema';
import { ApiKeyUncheckedCreateWithoutUserInputObjectSchema as ApiKeyUncheckedCreateWithoutUserInputObjectSchema } from './ApiKeyUncheckedCreateWithoutUserInput.schema';
import { ApiKeyCreateOrConnectWithoutUserInputObjectSchema as ApiKeyCreateOrConnectWithoutUserInputObjectSchema } from './ApiKeyCreateOrConnectWithoutUserInput.schema';
import { ApiKeyUpsertWithWhereUniqueWithoutUserInputObjectSchema as ApiKeyUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './ApiKeyUpsertWithWhereUniqueWithoutUserInput.schema';
import { ApiKeyCreateManyUserInputEnvelopeObjectSchema as ApiKeyCreateManyUserInputEnvelopeObjectSchema } from './ApiKeyCreateManyUserInputEnvelope.schema';
import { ApiKeyWhereUniqueInputObjectSchema as ApiKeyWhereUniqueInputObjectSchema } from './ApiKeyWhereUniqueInput.schema';
import { ApiKeyUpdateWithWhereUniqueWithoutUserInputObjectSchema as ApiKeyUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './ApiKeyUpdateWithWhereUniqueWithoutUserInput.schema';
import { ApiKeyUpdateManyWithWhereWithoutUserInputObjectSchema as ApiKeyUpdateManyWithWhereWithoutUserInputObjectSchema } from './ApiKeyUpdateManyWithWhereWithoutUserInput.schema';
import { ApiKeyScalarWhereInputObjectSchema as ApiKeyScalarWhereInputObjectSchema } from './ApiKeyScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ApiKeyCreateWithoutUserInputObjectSchema), z.lazy(() => ApiKeyCreateWithoutUserInputObjectSchema).array(), z.lazy(() => ApiKeyUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => ApiKeyUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ApiKeyCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => ApiKeyCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ApiKeyUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => ApiKeyUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ApiKeyCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ApiKeyWhereUniqueInputObjectSchema), z.lazy(() => ApiKeyWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ApiKeyWhereUniqueInputObjectSchema), z.lazy(() => ApiKeyWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ApiKeyWhereUniqueInputObjectSchema), z.lazy(() => ApiKeyWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ApiKeyWhereUniqueInputObjectSchema), z.lazy(() => ApiKeyWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ApiKeyUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => ApiKeyUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ApiKeyUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => ApiKeyUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ApiKeyScalarWhereInputObjectSchema), z.lazy(() => ApiKeyScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ApiKeyUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.ApiKeyUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ApiKeyUpdateManyWithoutUserNestedInput>;
export const ApiKeyUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
