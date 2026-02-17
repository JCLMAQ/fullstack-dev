import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WordCreateNestedOneWithoutTranslationsInputObjectSchema as WordCreateNestedOneWithoutTranslationsInputObjectSchema } from './WordCreateNestedOneWithoutTranslationsInput.schema';
import { LanguageCreateNestedOneWithoutTranslationsInputObjectSchema as LanguageCreateNestedOneWithoutTranslationsInputObjectSchema } from './LanguageCreateNestedOneWithoutTranslationsInput.schema'

const makeSchema = () => z.object({
  text: z.string(),
  definition: z.string().optional().nullable(),
  word: z.lazy(() => WordCreateNestedOneWithoutTranslationsInputObjectSchema),
  language: z.lazy(() => LanguageCreateNestedOneWithoutTranslationsInputObjectSchema)
}).strict();
export const TranslationCreateInputObjectSchema: z.ZodType<Prisma.TranslationCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.TranslationCreateInput>;
export const TranslationCreateInputObjectZodSchema = makeSchema();
