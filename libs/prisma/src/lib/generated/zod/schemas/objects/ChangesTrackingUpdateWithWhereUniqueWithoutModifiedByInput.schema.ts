import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { ChangesTrackingWhereUniqueInputObjectSchema as ChangesTrackingWhereUniqueInputObjectSchema } from './ChangesTrackingWhereUniqueInput.schema';
import { ChangesTrackingUpdateWithoutModifiedByInputObjectSchema as ChangesTrackingUpdateWithoutModifiedByInputObjectSchema } from './ChangesTrackingUpdateWithoutModifiedByInput.schema';
import { ChangesTrackingUncheckedUpdateWithoutModifiedByInputObjectSchema as ChangesTrackingUncheckedUpdateWithoutModifiedByInputObjectSchema } from './ChangesTrackingUncheckedUpdateWithoutModifiedByInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ChangesTrackingWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ChangesTrackingUpdateWithoutModifiedByInputObjectSchema), z.lazy(() => ChangesTrackingUncheckedUpdateWithoutModifiedByInputObjectSchema)])
}).strict();
export const ChangesTrackingUpdateWithWhereUniqueWithoutModifiedByInputObjectSchema: z.ZodType<Prisma.ChangesTrackingUpdateWithWhereUniqueWithoutModifiedByInput> = makeSchema() as unknown as z.ZodType<Prisma.ChangesTrackingUpdateWithWhereUniqueWithoutModifiedByInput>;
export const ChangesTrackingUpdateWithWhereUniqueWithoutModifiedByInputObjectZodSchema = makeSchema();
