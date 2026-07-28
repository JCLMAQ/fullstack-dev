import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { ImageCreateManyOrgInputObjectSchema as ImageCreateManyOrgInputObjectSchema } from './ImageCreateManyOrgInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ImageCreateManyOrgInputObjectSchema), z.lazy(() => ImageCreateManyOrgInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ImageCreateManyOrgInputEnvelopeObjectSchema: z.ZodType<Prisma.ImageCreateManyOrgInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ImageCreateManyOrgInputEnvelope>;
export const ImageCreateManyOrgInputEnvelopeObjectZodSchema = makeSchema();
