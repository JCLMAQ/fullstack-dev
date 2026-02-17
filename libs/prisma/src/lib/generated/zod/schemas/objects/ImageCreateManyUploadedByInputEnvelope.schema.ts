import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ImageCreateManyUploadedByInputObjectSchema as ImageCreateManyUploadedByInputObjectSchema } from './ImageCreateManyUploadedByInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ImageCreateManyUploadedByInputObjectSchema), z.lazy(() => ImageCreateManyUploadedByInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ImageCreateManyUploadedByInputEnvelopeObjectSchema: z.ZodType<Prisma.ImageCreateManyUploadedByInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ImageCreateManyUploadedByInputEnvelope>;
export const ImageCreateManyUploadedByInputEnvelopeObjectZodSchema = makeSchema();
