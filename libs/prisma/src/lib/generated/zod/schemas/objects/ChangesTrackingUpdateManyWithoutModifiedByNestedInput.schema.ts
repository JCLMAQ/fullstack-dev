import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { ChangesTrackingCreateWithoutModifiedByInputObjectSchema as ChangesTrackingCreateWithoutModifiedByInputObjectSchema } from './ChangesTrackingCreateWithoutModifiedByInput.schema';
import { ChangesTrackingUncheckedCreateWithoutModifiedByInputObjectSchema as ChangesTrackingUncheckedCreateWithoutModifiedByInputObjectSchema } from './ChangesTrackingUncheckedCreateWithoutModifiedByInput.schema';
import { ChangesTrackingCreateOrConnectWithoutModifiedByInputObjectSchema as ChangesTrackingCreateOrConnectWithoutModifiedByInputObjectSchema } from './ChangesTrackingCreateOrConnectWithoutModifiedByInput.schema';
import { ChangesTrackingUpsertWithWhereUniqueWithoutModifiedByInputObjectSchema as ChangesTrackingUpsertWithWhereUniqueWithoutModifiedByInputObjectSchema } from './ChangesTrackingUpsertWithWhereUniqueWithoutModifiedByInput.schema';
import { ChangesTrackingCreateManyModifiedByInputEnvelopeObjectSchema as ChangesTrackingCreateManyModifiedByInputEnvelopeObjectSchema } from './ChangesTrackingCreateManyModifiedByInputEnvelope.schema';
import { ChangesTrackingWhereUniqueInputObjectSchema as ChangesTrackingWhereUniqueInputObjectSchema } from './ChangesTrackingWhereUniqueInput.schema';
import { ChangesTrackingUpdateWithWhereUniqueWithoutModifiedByInputObjectSchema as ChangesTrackingUpdateWithWhereUniqueWithoutModifiedByInputObjectSchema } from './ChangesTrackingUpdateWithWhereUniqueWithoutModifiedByInput.schema';
import { ChangesTrackingUpdateManyWithWhereWithoutModifiedByInputObjectSchema as ChangesTrackingUpdateManyWithWhereWithoutModifiedByInputObjectSchema } from './ChangesTrackingUpdateManyWithWhereWithoutModifiedByInput.schema';
import { ChangesTrackingScalarWhereInputObjectSchema as ChangesTrackingScalarWhereInputObjectSchema } from './ChangesTrackingScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ChangesTrackingCreateWithoutModifiedByInputObjectSchema), z.lazy(() => ChangesTrackingCreateWithoutModifiedByInputObjectSchema).array(), z.lazy(() => ChangesTrackingUncheckedCreateWithoutModifiedByInputObjectSchema), z.lazy(() => ChangesTrackingUncheckedCreateWithoutModifiedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ChangesTrackingCreateOrConnectWithoutModifiedByInputObjectSchema), z.lazy(() => ChangesTrackingCreateOrConnectWithoutModifiedByInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ChangesTrackingUpsertWithWhereUniqueWithoutModifiedByInputObjectSchema), z.lazy(() => ChangesTrackingUpsertWithWhereUniqueWithoutModifiedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ChangesTrackingCreateManyModifiedByInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ChangesTrackingWhereUniqueInputObjectSchema), z.lazy(() => ChangesTrackingWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ChangesTrackingWhereUniqueInputObjectSchema), z.lazy(() => ChangesTrackingWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ChangesTrackingWhereUniqueInputObjectSchema), z.lazy(() => ChangesTrackingWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ChangesTrackingWhereUniqueInputObjectSchema), z.lazy(() => ChangesTrackingWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ChangesTrackingUpdateWithWhereUniqueWithoutModifiedByInputObjectSchema), z.lazy(() => ChangesTrackingUpdateWithWhereUniqueWithoutModifiedByInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ChangesTrackingUpdateManyWithWhereWithoutModifiedByInputObjectSchema), z.lazy(() => ChangesTrackingUpdateManyWithWhereWithoutModifiedByInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ChangesTrackingScalarWhereInputObjectSchema), z.lazy(() => ChangesTrackingScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ChangesTrackingUpdateManyWithoutModifiedByNestedInputObjectSchema: z.ZodType<Prisma.ChangesTrackingUpdateManyWithoutModifiedByNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ChangesTrackingUpdateManyWithoutModifiedByNestedInput>;
export const ChangesTrackingUpdateManyWithoutModifiedByNestedInputObjectZodSchema = makeSchema();
