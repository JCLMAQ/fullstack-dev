import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { TranslationUpdateManyWithoutLanguageNestedInputObjectSchema as TranslationUpdateManyWithoutLanguageNestedInputObjectSchema } from './TranslationUpdateManyWithoutLanguageNestedInput.schema';
import { UserUpdateManyWithoutLanguageNestedInputObjectSchema as UserUpdateManyWithoutLanguageNestedInputObjectSchema } from './UserUpdateManyWithoutLanguageNestedInput.schema'

const makeSchema = () => z.object({
  code: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  translations: z.lazy(() => TranslationUpdateManyWithoutLanguageNestedInputObjectSchema).optional(),
  users: z.lazy(() => UserUpdateManyWithoutLanguageNestedInputObjectSchema).optional()
}).strict();
export const LanguageUpdateWithoutTagTranslatesInputObjectSchema: z.ZodType<Prisma.LanguageUpdateWithoutTagTranslatesInput> = makeSchema() as unknown as z.ZodType<Prisma.LanguageUpdateWithoutTagTranslatesInput>;
export const LanguageUpdateWithoutTagTranslatesInputObjectZodSchema = makeSchema();
