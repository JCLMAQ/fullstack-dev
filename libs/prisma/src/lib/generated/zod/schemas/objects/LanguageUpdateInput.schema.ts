import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { TranslationUpdateManyWithoutLanguageNestedInputObjectSchema as TranslationUpdateManyWithoutLanguageNestedInputObjectSchema } from './TranslationUpdateManyWithoutLanguageNestedInput.schema';
import { UserUpdateManyWithoutLanguageNestedInputObjectSchema as UserUpdateManyWithoutLanguageNestedInputObjectSchema } from './UserUpdateManyWithoutLanguageNestedInput.schema';
import { TagTranslateUpdateManyWithoutLanguageNestedInputObjectSchema as TagTranslateUpdateManyWithoutLanguageNestedInputObjectSchema } from './TagTranslateUpdateManyWithoutLanguageNestedInput.schema'

const makeSchema = () => z.object({
  code: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  translations: z.lazy(() => TranslationUpdateManyWithoutLanguageNestedInputObjectSchema).optional(),
  users: z.lazy(() => UserUpdateManyWithoutLanguageNestedInputObjectSchema).optional(),
  tagTranslates: z.lazy(() => TagTranslateUpdateManyWithoutLanguageNestedInputObjectSchema).optional()
}).strict();
export const LanguageUpdateInputObjectSchema: z.ZodType<Prisma.LanguageUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.LanguageUpdateInput>;
export const LanguageUpdateInputObjectZodSchema = makeSchema();
