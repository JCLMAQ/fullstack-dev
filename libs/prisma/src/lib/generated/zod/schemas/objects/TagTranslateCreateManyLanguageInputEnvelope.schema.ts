import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TagTranslateCreateManyLanguageInputObjectSchema as TagTranslateCreateManyLanguageInputObjectSchema } from './TagTranslateCreateManyLanguageInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => TagTranslateCreateManyLanguageInputObjectSchema), z.lazy(() => TagTranslateCreateManyLanguageInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const TagTranslateCreateManyLanguageInputEnvelopeObjectSchema: z.ZodType<Prisma.TagTranslateCreateManyLanguageInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.TagTranslateCreateManyLanguageInputEnvelope>;
export const TagTranslateCreateManyLanguageInputEnvelopeObjectZodSchema = makeSchema();
