import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { FileCreateManyUploadedByInputObjectSchema as FileCreateManyUploadedByInputObjectSchema } from './FileCreateManyUploadedByInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => FileCreateManyUploadedByInputObjectSchema), z.lazy(() => FileCreateManyUploadedByInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const FileCreateManyUploadedByInputEnvelopeObjectSchema: z.ZodType<Prisma.FileCreateManyUploadedByInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.FileCreateManyUploadedByInputEnvelope>;
export const FileCreateManyUploadedByInputEnvelopeObjectZodSchema = makeSchema();
