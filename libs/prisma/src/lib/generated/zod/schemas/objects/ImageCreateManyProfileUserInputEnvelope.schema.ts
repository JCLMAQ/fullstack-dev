import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ImageCreateManyProfileUserInputObjectSchema as ImageCreateManyProfileUserInputObjectSchema } from './ImageCreateManyProfileUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ImageCreateManyProfileUserInputObjectSchema), z.lazy(() => ImageCreateManyProfileUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ImageCreateManyProfileUserInputEnvelopeObjectSchema: z.ZodType<Prisma.ImageCreateManyProfileUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ImageCreateManyProfileUserInputEnvelope>;
export const ImageCreateManyProfileUserInputEnvelopeObjectZodSchema = makeSchema();
