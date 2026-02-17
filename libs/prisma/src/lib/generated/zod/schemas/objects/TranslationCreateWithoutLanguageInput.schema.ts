import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WordCreateNestedOneWithoutTranslationsInputObjectSchema as WordCreateNestedOneWithoutTranslationsInputObjectSchema } from './WordCreateNestedOneWithoutTranslationsInput.schema'

const makeSchema = () => z.object({
  text: z.string(),
  definition: z.string().optional().nullable(),
  word: z.lazy(() => WordCreateNestedOneWithoutTranslationsInputObjectSchema)
}).strict();
export const TranslationCreateWithoutLanguageInputObjectSchema: z.ZodType<Prisma.TranslationCreateWithoutLanguageInput> = makeSchema() as unknown as z.ZodType<Prisma.TranslationCreateWithoutLanguageInput>;
export const TranslationCreateWithoutLanguageInputObjectZodSchema = makeSchema();
