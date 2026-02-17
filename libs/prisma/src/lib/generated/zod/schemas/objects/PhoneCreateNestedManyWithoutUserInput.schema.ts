import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { PhoneCreateWithoutUserInputObjectSchema as PhoneCreateWithoutUserInputObjectSchema } from './PhoneCreateWithoutUserInput.schema';
import { PhoneUncheckedCreateWithoutUserInputObjectSchema as PhoneUncheckedCreateWithoutUserInputObjectSchema } from './PhoneUncheckedCreateWithoutUserInput.schema';
import { PhoneCreateOrConnectWithoutUserInputObjectSchema as PhoneCreateOrConnectWithoutUserInputObjectSchema } from './PhoneCreateOrConnectWithoutUserInput.schema';
import { PhoneCreateManyUserInputEnvelopeObjectSchema as PhoneCreateManyUserInputEnvelopeObjectSchema } from './PhoneCreateManyUserInputEnvelope.schema';
import { PhoneWhereUniqueInputObjectSchema as PhoneWhereUniqueInputObjectSchema } from './PhoneWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PhoneCreateWithoutUserInputObjectSchema), z.lazy(() => PhoneCreateWithoutUserInputObjectSchema).array(), z.lazy(() => PhoneUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => PhoneUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PhoneCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => PhoneCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => PhoneCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => PhoneWhereUniqueInputObjectSchema), z.lazy(() => PhoneWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const PhoneCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.PhoneCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.PhoneCreateNestedManyWithoutUserInput>;
export const PhoneCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
