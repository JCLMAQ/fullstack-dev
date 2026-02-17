import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ImageCreateManyStoryInputObjectSchema as ImageCreateManyStoryInputObjectSchema } from './ImageCreateManyStoryInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ImageCreateManyStoryInputObjectSchema), z.lazy(() => ImageCreateManyStoryInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ImageCreateManyStoryInputEnvelopeObjectSchema: z.ZodType<Prisma.ImageCreateManyStoryInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ImageCreateManyStoryInputEnvelope>;
export const ImageCreateManyStoryInputEnvelopeObjectZodSchema = makeSchema();
