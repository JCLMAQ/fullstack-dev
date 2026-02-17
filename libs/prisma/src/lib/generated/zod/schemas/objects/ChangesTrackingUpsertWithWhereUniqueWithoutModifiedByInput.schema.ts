import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ChangesTrackingWhereUniqueInputObjectSchema as ChangesTrackingWhereUniqueInputObjectSchema } from './ChangesTrackingWhereUniqueInput.schema';
import { ChangesTrackingUpdateWithoutModifiedByInputObjectSchema as ChangesTrackingUpdateWithoutModifiedByInputObjectSchema } from './ChangesTrackingUpdateWithoutModifiedByInput.schema';
import { ChangesTrackingUncheckedUpdateWithoutModifiedByInputObjectSchema as ChangesTrackingUncheckedUpdateWithoutModifiedByInputObjectSchema } from './ChangesTrackingUncheckedUpdateWithoutModifiedByInput.schema';
import { ChangesTrackingCreateWithoutModifiedByInputObjectSchema as ChangesTrackingCreateWithoutModifiedByInputObjectSchema } from './ChangesTrackingCreateWithoutModifiedByInput.schema';
import { ChangesTrackingUncheckedCreateWithoutModifiedByInputObjectSchema as ChangesTrackingUncheckedCreateWithoutModifiedByInputObjectSchema } from './ChangesTrackingUncheckedCreateWithoutModifiedByInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ChangesTrackingWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ChangesTrackingUpdateWithoutModifiedByInputObjectSchema), z.lazy(() => ChangesTrackingUncheckedUpdateWithoutModifiedByInputObjectSchema)]),
  create: z.union([z.lazy(() => ChangesTrackingCreateWithoutModifiedByInputObjectSchema), z.lazy(() => ChangesTrackingUncheckedCreateWithoutModifiedByInputObjectSchema)])
}).strict();
export const ChangesTrackingUpsertWithWhereUniqueWithoutModifiedByInputObjectSchema: z.ZodType<Prisma.ChangesTrackingUpsertWithWhereUniqueWithoutModifiedByInput> = makeSchema() as unknown as z.ZodType<Prisma.ChangesTrackingUpsertWithWhereUniqueWithoutModifiedByInput>;
export const ChangesTrackingUpsertWithWhereUniqueWithoutModifiedByInputObjectZodSchema = makeSchema();
