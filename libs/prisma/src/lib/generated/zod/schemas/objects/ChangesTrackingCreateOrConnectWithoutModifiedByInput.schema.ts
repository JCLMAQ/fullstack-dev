import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ChangesTrackingWhereUniqueInputObjectSchema as ChangesTrackingWhereUniqueInputObjectSchema } from './ChangesTrackingWhereUniqueInput.schema';
import { ChangesTrackingCreateWithoutModifiedByInputObjectSchema as ChangesTrackingCreateWithoutModifiedByInputObjectSchema } from './ChangesTrackingCreateWithoutModifiedByInput.schema';
import { ChangesTrackingUncheckedCreateWithoutModifiedByInputObjectSchema as ChangesTrackingUncheckedCreateWithoutModifiedByInputObjectSchema } from './ChangesTrackingUncheckedCreateWithoutModifiedByInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ChangesTrackingWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ChangesTrackingCreateWithoutModifiedByInputObjectSchema), z.lazy(() => ChangesTrackingUncheckedCreateWithoutModifiedByInputObjectSchema)])
}).strict();
export const ChangesTrackingCreateOrConnectWithoutModifiedByInputObjectSchema: z.ZodType<Prisma.ChangesTrackingCreateOrConnectWithoutModifiedByInput> = makeSchema() as unknown as z.ZodType<Prisma.ChangesTrackingCreateOrConnectWithoutModifiedByInput>;
export const ChangesTrackingCreateOrConnectWithoutModifiedByInputObjectZodSchema = makeSchema();
