import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TranslationCreateManyLanguageInputObjectSchema as TranslationCreateManyLanguageInputObjectSchema } from './TranslationCreateManyLanguageInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => TranslationCreateManyLanguageInputObjectSchema), z.lazy(() => TranslationCreateManyLanguageInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const TranslationCreateManyLanguageInputEnvelopeObjectSchema: z.ZodType<Prisma.TranslationCreateManyLanguageInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.TranslationCreateManyLanguageInputEnvelope>;
export const TranslationCreateManyLanguageInputEnvelopeObjectZodSchema = makeSchema();
