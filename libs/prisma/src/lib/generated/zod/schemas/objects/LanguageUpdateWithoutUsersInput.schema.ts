import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { TranslationUpdateManyWithoutLanguageNestedInputObjectSchema as TranslationUpdateManyWithoutLanguageNestedInputObjectSchema } from './TranslationUpdateManyWithoutLanguageNestedInput.schema';
import { TagTranslateUpdateManyWithoutLanguageNestedInputObjectSchema as TagTranslateUpdateManyWithoutLanguageNestedInputObjectSchema } from './TagTranslateUpdateManyWithoutLanguageNestedInput.schema'

const makeSchema = () => z.object({
  code: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  translations: z.lazy(() => TranslationUpdateManyWithoutLanguageNestedInputObjectSchema).optional(),
  tagTranslates: z.lazy(() => TagTranslateUpdateManyWithoutLanguageNestedInputObjectSchema).optional()
}).strict();
export const LanguageUpdateWithoutUsersInputObjectSchema: z.ZodType<Prisma.LanguageUpdateWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.LanguageUpdateWithoutUsersInput>;
export const LanguageUpdateWithoutUsersInputObjectZodSchema = makeSchema();
