import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { ChangesTrackingScalarWhereInputObjectSchema as ChangesTrackingScalarWhereInputObjectSchema } from './ChangesTrackingScalarWhereInput.schema';
import { ChangesTrackingUpdateManyMutationInputObjectSchema as ChangesTrackingUpdateManyMutationInputObjectSchema } from './ChangesTrackingUpdateManyMutationInput.schema';
import { ChangesTrackingUncheckedUpdateManyWithoutModifiedByInputObjectSchema as ChangesTrackingUncheckedUpdateManyWithoutModifiedByInputObjectSchema } from './ChangesTrackingUncheckedUpdateManyWithoutModifiedByInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ChangesTrackingScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ChangesTrackingUpdateManyMutationInputObjectSchema), z.lazy(() => ChangesTrackingUncheckedUpdateManyWithoutModifiedByInputObjectSchema)])
}).strict();
export const ChangesTrackingUpdateManyWithWhereWithoutModifiedByInputObjectSchema: z.ZodType<Prisma.ChangesTrackingUpdateManyWithWhereWithoutModifiedByInput> = makeSchema() as unknown as z.ZodType<Prisma.ChangesTrackingUpdateManyWithWhereWithoutModifiedByInput>;
export const ChangesTrackingUpdateManyWithWhereWithoutModifiedByInputObjectZodSchema = makeSchema();
