import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TranslationCreateNestedManyWithoutLanguageInputObjectSchema as TranslationCreateNestedManyWithoutLanguageInputObjectSchema } from './TranslationCreateNestedManyWithoutLanguageInput.schema';
import { UserCreateNestedManyWithoutLanguageInputObjectSchema as UserCreateNestedManyWithoutLanguageInputObjectSchema } from './UserCreateNestedManyWithoutLanguageInput.schema';
import { TagTranslateCreateNestedManyWithoutLanguageInputObjectSchema as TagTranslateCreateNestedManyWithoutLanguageInputObjectSchema } from './TagTranslateCreateNestedManyWithoutLanguageInput.schema'

const makeSchema = () => z.object({
  code: z.string(),
  name: z.string(),
  translations: z.lazy(() => TranslationCreateNestedManyWithoutLanguageInputObjectSchema).optional(),
  users: z.lazy(() => UserCreateNestedManyWithoutLanguageInputObjectSchema).optional(),
  tagTranslates: z.lazy(() => TagTranslateCreateNestedManyWithoutLanguageInputObjectSchema).optional()
}).strict();
export const LanguageCreateInputObjectSchema: z.ZodType<Prisma.LanguageCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.LanguageCreateInput>;
export const LanguageCreateInputObjectZodSchema = makeSchema();
