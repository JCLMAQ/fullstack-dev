import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { PhoneCreateWithoutUserInputObjectSchema as PhoneCreateWithoutUserInputObjectSchema } from './PhoneCreateWithoutUserInput.schema';
import { PhoneUncheckedCreateWithoutUserInputObjectSchema as PhoneUncheckedCreateWithoutUserInputObjectSchema } from './PhoneUncheckedCreateWithoutUserInput.schema';
import { PhoneCreateOrConnectWithoutUserInputObjectSchema as PhoneCreateOrConnectWithoutUserInputObjectSchema } from './PhoneCreateOrConnectWithoutUserInput.schema';
import { PhoneUpsertWithWhereUniqueWithoutUserInputObjectSchema as PhoneUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './PhoneUpsertWithWhereUniqueWithoutUserInput.schema';
import { PhoneCreateManyUserInputEnvelopeObjectSchema as PhoneCreateManyUserInputEnvelopeObjectSchema } from './PhoneCreateManyUserInputEnvelope.schema';
import { PhoneWhereUniqueInputObjectSchema as PhoneWhereUniqueInputObjectSchema } from './PhoneWhereUniqueInput.schema';
import { PhoneUpdateWithWhereUniqueWithoutUserInputObjectSchema as PhoneUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './PhoneUpdateWithWhereUniqueWithoutUserInput.schema';
import { PhoneUpdateManyWithWhereWithoutUserInputObjectSchema as PhoneUpdateManyWithWhereWithoutUserInputObjectSchema } from './PhoneUpdateManyWithWhereWithoutUserInput.schema';
import { PhoneScalarWhereInputObjectSchema as PhoneScalarWhereInputObjectSchema } from './PhoneScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PhoneCreateWithoutUserInputObjectSchema), z.lazy(() => PhoneCreateWithoutUserInputObjectSchema).array(), z.lazy(() => PhoneUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => PhoneUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PhoneCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => PhoneCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => PhoneUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => PhoneUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => PhoneCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => PhoneWhereUniqueInputObjectSchema), z.lazy(() => PhoneWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => PhoneWhereUniqueInputObjectSchema), z.lazy(() => PhoneWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => PhoneWhereUniqueInputObjectSchema), z.lazy(() => PhoneWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => PhoneWhereUniqueInputObjectSchema), z.lazy(() => PhoneWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => PhoneUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => PhoneUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => PhoneUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => PhoneUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => PhoneScalarWhereInputObjectSchema), z.lazy(() => PhoneScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const PhoneUncheckedUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.PhoneUncheckedUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.PhoneUncheckedUpdateManyWithoutUserNestedInput>;
export const PhoneUncheckedUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
