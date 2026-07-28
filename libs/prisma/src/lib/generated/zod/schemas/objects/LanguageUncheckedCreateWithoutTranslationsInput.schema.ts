import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserUncheckedCreateNestedManyWithoutLanguageInputObjectSchema as UserUncheckedCreateNestedManyWithoutLanguageInputObjectSchema } from './UserUncheckedCreateNestedManyWithoutLanguageInput.schema';
import { TagTranslateUncheckedCreateNestedManyWithoutLanguageInputObjectSchema as TagTranslateUncheckedCreateNestedManyWithoutLanguageInputObjectSchema } from './TagTranslateUncheckedCreateNestedManyWithoutLanguageInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  code: z.string(),
  name: z.string(),
  users: z.lazy(() => UserUncheckedCreateNestedManyWithoutLanguageInputObjectSchema).optional(),
  tagTranslates: z.lazy(() => TagTranslateUncheckedCreateNestedManyWithoutLanguageInputObjectSchema).optional()
}).strict();
export const LanguageUncheckedCreateWithoutTranslationsInputObjectSchema: z.ZodType<Prisma.LanguageUncheckedCreateWithoutTranslationsInput> = makeSchema() as unknown as z.ZodType<Prisma.LanguageUncheckedCreateWithoutTranslationsInput>;
export const LanguageUncheckedCreateWithoutTranslationsInputObjectZodSchema = makeSchema();
