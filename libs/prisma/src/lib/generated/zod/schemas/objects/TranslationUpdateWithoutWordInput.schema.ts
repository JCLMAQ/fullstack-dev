import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { LanguageUpdateOneRequiredWithoutTranslationsNestedInputObjectSchema as LanguageUpdateOneRequiredWithoutTranslationsNestedInputObjectSchema } from './LanguageUpdateOneRequiredWithoutTranslationsNestedInput.schema'

const makeSchema = () => z.object({
  text: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  definition: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  language: z.lazy(() => LanguageUpdateOneRequiredWithoutTranslationsNestedInputObjectSchema).optional()
}).strict();
export const TranslationUpdateWithoutWordInputObjectSchema: z.ZodType<Prisma.TranslationUpdateWithoutWordInput> = makeSchema() as unknown as z.ZodType<Prisma.TranslationUpdateWithoutWordInput>;
export const TranslationUpdateWithoutWordInputObjectZodSchema = makeSchema();
