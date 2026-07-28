import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { UserUpdateManyWithoutLanguageNestedInputObjectSchema as UserUpdateManyWithoutLanguageNestedInputObjectSchema } from './UserUpdateManyWithoutLanguageNestedInput.schema';
import { TagTranslateUpdateManyWithoutLanguageNestedInputObjectSchema as TagTranslateUpdateManyWithoutLanguageNestedInputObjectSchema } from './TagTranslateUpdateManyWithoutLanguageNestedInput.schema'

const makeSchema = () => z.object({
  code: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  users: z.lazy(() => UserUpdateManyWithoutLanguageNestedInputObjectSchema).optional(),
  tagTranslates: z.lazy(() => TagTranslateUpdateManyWithoutLanguageNestedInputObjectSchema).optional()
}).strict();
export const LanguageUpdateWithoutTranslationsInputObjectSchema: z.ZodType<Prisma.LanguageUpdateWithoutTranslationsInput> = makeSchema() as unknown as z.ZodType<Prisma.LanguageUpdateWithoutTranslationsInput>;
export const LanguageUpdateWithoutTranslationsInputObjectZodSchema = makeSchema();
