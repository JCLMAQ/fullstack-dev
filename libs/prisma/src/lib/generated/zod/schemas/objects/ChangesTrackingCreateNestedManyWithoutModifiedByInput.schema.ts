import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { ChangesTrackingCreateWithoutModifiedByInputObjectSchema as ChangesTrackingCreateWithoutModifiedByInputObjectSchema } from './ChangesTrackingCreateWithoutModifiedByInput.schema';
import { ChangesTrackingUncheckedCreateWithoutModifiedByInputObjectSchema as ChangesTrackingUncheckedCreateWithoutModifiedByInputObjectSchema } from './ChangesTrackingUncheckedCreateWithoutModifiedByInput.schema';
import { ChangesTrackingCreateOrConnectWithoutModifiedByInputObjectSchema as ChangesTrackingCreateOrConnectWithoutModifiedByInputObjectSchema } from './ChangesTrackingCreateOrConnectWithoutModifiedByInput.schema';
import { ChangesTrackingCreateManyModifiedByInputEnvelopeObjectSchema as ChangesTrackingCreateManyModifiedByInputEnvelopeObjectSchema } from './ChangesTrackingCreateManyModifiedByInputEnvelope.schema';
import { ChangesTrackingWhereUniqueInputObjectSchema as ChangesTrackingWhereUniqueInputObjectSchema } from './ChangesTrackingWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ChangesTrackingCreateWithoutModifiedByInputObjectSchema), z.lazy(() => ChangesTrackingCreateWithoutModifiedByInputObjectSchema).array(), z.lazy(() => ChangesTrackingUncheckedCreateWithoutModifiedByInputObjectSchema), z.lazy(() => ChangesTrackingUncheckedCreateWithoutModifiedByInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ChangesTrackingCreateOrConnectWithoutModifiedByInputObjectSchema), z.lazy(() => ChangesTrackingCreateOrConnectWithoutModifiedByInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ChangesTrackingCreateManyModifiedByInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ChangesTrackingWhereUniqueInputObjectSchema), z.lazy(() => ChangesTrackingWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ChangesTrackingCreateNestedManyWithoutModifiedByInputObjectSchema: z.ZodType<Prisma.ChangesTrackingCreateNestedManyWithoutModifiedByInput> = makeSchema() as unknown as z.ZodType<Prisma.ChangesTrackingCreateNestedManyWithoutModifiedByInput>;
export const ChangesTrackingCreateNestedManyWithoutModifiedByInputObjectZodSchema = makeSchema();
