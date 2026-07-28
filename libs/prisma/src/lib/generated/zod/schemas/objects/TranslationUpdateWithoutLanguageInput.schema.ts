import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { WordUpdateOneRequiredWithoutTranslationsNestedInputObjectSchema as WordUpdateOneRequiredWithoutTranslationsNestedInputObjectSchema } from './WordUpdateOneRequiredWithoutTranslationsNestedInput.schema'

const makeSchema = () => z.object({
  text: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  definition: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  word: z.lazy(() => WordUpdateOneRequiredWithoutTranslationsNestedInputObjectSchema).optional()
}).strict();
export const TranslationUpdateWithoutLanguageInputObjectSchema: z.ZodType<Prisma.TranslationUpdateWithoutLanguageInput> = makeSchema() as unknown as z.ZodType<Prisma.TranslationUpdateWithoutLanguageInput>;
export const TranslationUpdateWithoutLanguageInputObjectZodSchema = makeSchema();
