import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TranslationCreateNestedManyWithoutLanguageInputObjectSchema as TranslationCreateNestedManyWithoutLanguageInputObjectSchema } from './TranslationCreateNestedManyWithoutLanguageInput.schema';
import { TagTranslateCreateNestedManyWithoutLanguageInputObjectSchema as TagTranslateCreateNestedManyWithoutLanguageInputObjectSchema } from './TagTranslateCreateNestedManyWithoutLanguageInput.schema'

const makeSchema = () => z.object({
  code: z.string(),
  name: z.string(),
  translations: z.lazy(() => TranslationCreateNestedManyWithoutLanguageInputObjectSchema).optional(),
  tagTranslates: z.lazy(() => TagTranslateCreateNestedManyWithoutLanguageInputObjectSchema).optional()
}).strict();
export const LanguageCreateWithoutUsersInputObjectSchema: z.ZodType<Prisma.LanguageCreateWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.LanguageCreateWithoutUsersInput>;
export const LanguageCreateWithoutUsersInputObjectZodSchema = makeSchema();
