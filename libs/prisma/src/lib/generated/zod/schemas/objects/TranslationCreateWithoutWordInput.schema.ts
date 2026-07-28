import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { LanguageCreateNestedOneWithoutTranslationsInputObjectSchema as LanguageCreateNestedOneWithoutTranslationsInputObjectSchema } from './LanguageCreateNestedOneWithoutTranslationsInput.schema'

const makeSchema = () => z.object({
  text: z.string(),
  definition: z.string().optional().nullable(),
  language: z.lazy(() => LanguageCreateNestedOneWithoutTranslationsInputObjectSchema)
}).strict();
export const TranslationCreateWithoutWordInputObjectSchema: z.ZodType<Prisma.TranslationCreateWithoutWordInput> = makeSchema() as unknown as z.ZodType<Prisma.TranslationCreateWithoutWordInput>;
export const TranslationCreateWithoutWordInputObjectZodSchema = makeSchema();
