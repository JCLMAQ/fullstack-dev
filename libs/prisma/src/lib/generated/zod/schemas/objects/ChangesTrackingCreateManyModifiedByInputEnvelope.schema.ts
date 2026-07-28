import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { ChangesTrackingCreateManyModifiedByInputObjectSchema as ChangesTrackingCreateManyModifiedByInputObjectSchema } from './ChangesTrackingCreateManyModifiedByInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ChangesTrackingCreateManyModifiedByInputObjectSchema), z.lazy(() => ChangesTrackingCreateManyModifiedByInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ChangesTrackingCreateManyModifiedByInputEnvelopeObjectSchema: z.ZodType<Prisma.ChangesTrackingCreateManyModifiedByInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ChangesTrackingCreateManyModifiedByInputEnvelope>;
export const ChangesTrackingCreateManyModifiedByInputEnvelopeObjectZodSchema = makeSchema();
