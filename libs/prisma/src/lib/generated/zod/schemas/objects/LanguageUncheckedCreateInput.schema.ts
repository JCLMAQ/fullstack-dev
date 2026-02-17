import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TranslationUncheckedCreateNestedManyWithoutLanguageInputObjectSchema as TranslationUncheckedCreateNestedManyWithoutLanguageInputObjectSchema } from './TranslationUncheckedCreateNestedManyWithoutLanguageInput.schema';
import { UserUncheckedCreateNestedManyWithoutLanguageInputObjectSchema as UserUncheckedCreateNestedManyWithoutLanguageInputObjectSchema } from './UserUncheckedCreateNestedManyWithoutLanguageInput.schema';
import { TagTranslateUncheckedCreateNestedManyWithoutLanguageInputObjectSchema as TagTranslateUncheckedCreateNestedManyWithoutLanguageInputObjectSchema } from './TagTranslateUncheckedCreateNestedManyWithoutLanguageInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  code: z.string(),
  name: z.string(),
  translations: z.lazy(() => TranslationUncheckedCreateNestedManyWithoutLanguageInputObjectSchema).optional(),
  users: z.lazy(() => UserUncheckedCreateNestedManyWithoutLanguageInputObjectSchema).optional(),
  tagTranslates: z.lazy(() => TagTranslateUncheckedCreateNestedManyWithoutLanguageInputObjectSchema).optional()
}).strict();
export const LanguageUncheckedCreateInputObjectSchema: z.ZodType<Prisma.LanguageUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.LanguageUncheckedCreateInput>;
export const LanguageUncheckedCreateInputObjectZodSchema = makeSchema();
