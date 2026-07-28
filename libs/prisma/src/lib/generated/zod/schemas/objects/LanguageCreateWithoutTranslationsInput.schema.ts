import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserCreateNestedManyWithoutLanguageInputObjectSchema as UserCreateNestedManyWithoutLanguageInputObjectSchema } from './UserCreateNestedManyWithoutLanguageInput.schema';
import { TagTranslateCreateNestedManyWithoutLanguageInputObjectSchema as TagTranslateCreateNestedManyWithoutLanguageInputObjectSchema } from './TagTranslateCreateNestedManyWithoutLanguageInput.schema'

const makeSchema = () => z.object({
  code: z.string(),
  name: z.string(),
  users: z.lazy(() => UserCreateNestedManyWithoutLanguageInputObjectSchema).optional(),
  tagTranslates: z.lazy(() => TagTranslateCreateNestedManyWithoutLanguageInputObjectSchema).optional()
}).strict();
export const LanguageCreateWithoutTranslationsInputObjectSchema: z.ZodType<Prisma.LanguageCreateWithoutTranslationsInput> = makeSchema() as unknown as z.ZodType<Prisma.LanguageCreateWithoutTranslationsInput>;
export const LanguageCreateWithoutTranslationsInputObjectZodSchema = makeSchema();
