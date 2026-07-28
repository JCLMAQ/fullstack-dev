import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { TranslationUncheckedUpdateManyWithoutLanguageNestedInputObjectSchema as TranslationUncheckedUpdateManyWithoutLanguageNestedInputObjectSchema } from './TranslationUncheckedUpdateManyWithoutLanguageNestedInput.schema';
import { TagTranslateUncheckedUpdateManyWithoutLanguageNestedInputObjectSchema as TagTranslateUncheckedUpdateManyWithoutLanguageNestedInputObjectSchema } from './TagTranslateUncheckedUpdateManyWithoutLanguageNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  code: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  translations: z.lazy(() => TranslationUncheckedUpdateManyWithoutLanguageNestedInputObjectSchema).optional(),
  tagTranslates: z.lazy(() => TagTranslateUncheckedUpdateManyWithoutLanguageNestedInputObjectSchema).optional()
}).strict();
export const LanguageUncheckedUpdateWithoutUsersInputObjectSchema: z.ZodType<Prisma.LanguageUncheckedUpdateWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.LanguageUncheckedUpdateWithoutUsersInput>;
export const LanguageUncheckedUpdateWithoutUsersInputObjectZodSchema = makeSchema();
