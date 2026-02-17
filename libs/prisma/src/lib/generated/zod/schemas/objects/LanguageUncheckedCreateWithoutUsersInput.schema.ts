import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TranslationUncheckedCreateNestedManyWithoutLanguageInputObjectSchema as TranslationUncheckedCreateNestedManyWithoutLanguageInputObjectSchema } from './TranslationUncheckedCreateNestedManyWithoutLanguageInput.schema';
import { TagTranslateUncheckedCreateNestedManyWithoutLanguageInputObjectSchema as TagTranslateUncheckedCreateNestedManyWithoutLanguageInputObjectSchema } from './TagTranslateUncheckedCreateNestedManyWithoutLanguageInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  code: z.string(),
  name: z.string(),
  translations: z.lazy(() => TranslationUncheckedCreateNestedManyWithoutLanguageInputObjectSchema).optional(),
  tagTranslates: z.lazy(() => TagTranslateUncheckedCreateNestedManyWithoutLanguageInputObjectSchema).optional()
}).strict();
export const LanguageUncheckedCreateWithoutUsersInputObjectSchema: z.ZodType<Prisma.LanguageUncheckedCreateWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.LanguageUncheckedCreateWithoutUsersInput>;
export const LanguageUncheckedCreateWithoutUsersInputObjectZodSchema = makeSchema();
