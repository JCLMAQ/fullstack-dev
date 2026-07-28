import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { ImageCreateManyPostInputObjectSchema as ImageCreateManyPostInputObjectSchema } from './ImageCreateManyPostInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ImageCreateManyPostInputObjectSchema), z.lazy(() => ImageCreateManyPostInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ImageCreateManyPostInputEnvelopeObjectSchema: z.ZodType<Prisma.ImageCreateManyPostInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ImageCreateManyPostInputEnvelope>;
export const ImageCreateManyPostInputEnvelopeObjectZodSchema = makeSchema();
