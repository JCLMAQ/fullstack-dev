import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { WordUpdateOneRequiredWithoutTranslationsNestedInputObjectSchema as WordUpdateOneRequiredWithoutTranslationsNestedInputObjectSchema } from './WordUpdateOneRequiredWithoutTranslationsNestedInput.schema';
import { LanguageUpdateOneRequiredWithoutTranslationsNestedInputObjectSchema as LanguageUpdateOneRequiredWithoutTranslationsNestedInputObjectSchema } from './LanguageUpdateOneRequiredWithoutTranslationsNestedInput.schema'

const makeSchema = () => z.object({
  text: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  definition: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  word: z.lazy(() => WordUpdateOneRequiredWithoutTranslationsNestedInputObjectSchema).optional(),
  language: z.lazy(() => LanguageUpdateOneRequiredWithoutTranslationsNestedInputObjectSchema).optional()
}).strict();
export const TranslationUpdateInputObjectSchema: z.ZodType<Prisma.TranslationUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.TranslationUpdateInput>;
export const TranslationUpdateInputObjectZodSchema = makeSchema();
