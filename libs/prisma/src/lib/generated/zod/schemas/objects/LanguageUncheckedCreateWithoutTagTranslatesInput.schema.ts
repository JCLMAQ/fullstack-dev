import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TranslationUncheckedCreateNestedManyWithoutLanguageInputObjectSchema as TranslationUncheckedCreateNestedManyWithoutLanguageInputObjectSchema } from './TranslationUncheckedCreateNestedManyWithoutLanguageInput.schema';
import { UserUncheckedCreateNestedManyWithoutLanguageInputObjectSchema as UserUncheckedCreateNestedManyWithoutLanguageInputObjectSchema } from './UserUncheckedCreateNestedManyWithoutLanguageInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  code: z.string(),
  name: z.string(),
  translations: z.lazy(() => TranslationUncheckedCreateNestedManyWithoutLanguageInputObjectSchema).optional(),
  users: z.lazy(() => UserUncheckedCreateNestedManyWithoutLanguageInputObjectSchema).optional()
}).strict();
export const LanguageUncheckedCreateWithoutTagTranslatesInputObjectSchema: z.ZodType<Prisma.LanguageUncheckedCreateWithoutTagTranslatesInput> = makeSchema() as unknown as z.ZodType<Prisma.LanguageUncheckedCreateWithoutTagTranslatesInput>;
export const LanguageUncheckedCreateWithoutTagTranslatesInputObjectZodSchema = makeSchema();
