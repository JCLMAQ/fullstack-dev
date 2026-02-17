import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ApiKeyCreateWithoutUserInputObjectSchema as ApiKeyCreateWithoutUserInputObjectSchema } from './ApiKeyCreateWithoutUserInput.schema';
import { ApiKeyUncheckedCreateWithoutUserInputObjectSchema as ApiKeyUncheckedCreateWithoutUserInputObjectSchema } from './ApiKeyUncheckedCreateWithoutUserInput.schema';
import { ApiKeyCreateOrConnectWithoutUserInputObjectSchema as ApiKeyCreateOrConnectWithoutUserInputObjectSchema } from './ApiKeyCreateOrConnectWithoutUserInput.schema';
import { ApiKeyCreateManyUserInputEnvelopeObjectSchema as ApiKeyCreateManyUserInputEnvelopeObjectSchema } from './ApiKeyCreateManyUserInputEnvelope.schema';
import { ApiKeyWhereUniqueInputObjectSchema as ApiKeyWhereUniqueInputObjectSchema } from './ApiKeyWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ApiKeyCreateWithoutUserInputObjectSchema), z.lazy(() => ApiKeyCreateWithoutUserInputObjectSchema).array(), z.lazy(() => ApiKeyUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => ApiKeyUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ApiKeyCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => ApiKeyCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ApiKeyCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ApiKeyWhereUniqueInputObjectSchema), z.lazy(() => ApiKeyWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ApiKeyUncheckedCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.ApiKeyUncheckedCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ApiKeyUncheckedCreateNestedManyWithoutUserInput>;
export const ApiKeyUncheckedCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
