import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TagValueCreateManyMainTagInputObjectSchema as TagValueCreateManyMainTagInputObjectSchema } from './TagValueCreateManyMainTagInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => TagValueCreateManyMainTagInputObjectSchema), z.lazy(() => TagValueCreateManyMainTagInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const TagValueCreateManyMainTagInputEnvelopeObjectSchema: z.ZodType<Prisma.TagValueCreateManyMainTagInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.TagValueCreateManyMainTagInputEnvelope>;
export const TagValueCreateManyMainTagInputEnvelopeObjectZodSchema = makeSchema();
