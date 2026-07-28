import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { UserUncheckedUpdateManyWithoutLanguageNestedInputObjectSchema as UserUncheckedUpdateManyWithoutLanguageNestedInputObjectSchema } from './UserUncheckedUpdateManyWithoutLanguageNestedInput.schema';
import { TagTranslateUncheckedUpdateManyWithoutLanguageNestedInputObjectSchema as TagTranslateUncheckedUpdateManyWithoutLanguageNestedInputObjectSchema } from './TagTranslateUncheckedUpdateManyWithoutLanguageNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  code: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  users: z.lazy(() => UserUncheckedUpdateManyWithoutLanguageNestedInputObjectSchema).optional(),
  tagTranslates: z.lazy(() => TagTranslateUncheckedUpdateManyWithoutLanguageNestedInputObjectSchema).optional()
}).strict();
export const LanguageUncheckedUpdateWithoutTranslationsInputObjectSchema: z.ZodType<Prisma.LanguageUncheckedUpdateWithoutTranslationsInput> = makeSchema() as unknown as z.ZodType<Prisma.LanguageUncheckedUpdateWithoutTranslationsInput>;
export const LanguageUncheckedUpdateWithoutTranslationsInputObjectZodSchema = makeSchema();
