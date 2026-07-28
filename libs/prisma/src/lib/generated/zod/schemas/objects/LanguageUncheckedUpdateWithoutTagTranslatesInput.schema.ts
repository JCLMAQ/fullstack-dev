import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { TranslationUncheckedUpdateManyWithoutLanguageNestedInputObjectSchema as TranslationUncheckedUpdateManyWithoutLanguageNestedInputObjectSchema } from './TranslationUncheckedUpdateManyWithoutLanguageNestedInput.schema';
import { UserUncheckedUpdateManyWithoutLanguageNestedInputObjectSchema as UserUncheckedUpdateManyWithoutLanguageNestedInputObjectSchema } from './UserUncheckedUpdateManyWithoutLanguageNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  code: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  translations: z.lazy(() => TranslationUncheckedUpdateManyWithoutLanguageNestedInputObjectSchema).optional(),
  users: z.lazy(() => UserUncheckedUpdateManyWithoutLanguageNestedInputObjectSchema).optional()
}).strict();
export const LanguageUncheckedUpdateWithoutTagTranslatesInputObjectSchema: z.ZodType<Prisma.LanguageUncheckedUpdateWithoutTagTranslatesInput> = makeSchema() as unknown as z.ZodType<Prisma.LanguageUncheckedUpdateWithoutTagTranslatesInput>;
export const LanguageUncheckedUpdateWithoutTagTranslatesInputObjectZodSchema = makeSchema();
