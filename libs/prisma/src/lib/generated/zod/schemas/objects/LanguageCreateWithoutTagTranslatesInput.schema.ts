import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TranslationCreateNestedManyWithoutLanguageInputObjectSchema as TranslationCreateNestedManyWithoutLanguageInputObjectSchema } from './TranslationCreateNestedManyWithoutLanguageInput.schema';
import { UserCreateNestedManyWithoutLanguageInputObjectSchema as UserCreateNestedManyWithoutLanguageInputObjectSchema } from './UserCreateNestedManyWithoutLanguageInput.schema'

const makeSchema = () => z.object({
  code: z.string(),
  name: z.string(),
  translations: z.lazy(() => TranslationCreateNestedManyWithoutLanguageInputObjectSchema).optional(),
  users: z.lazy(() => UserCreateNestedManyWithoutLanguageInputObjectSchema).optional()
}).strict();
export const LanguageCreateWithoutTagTranslatesInputObjectSchema: z.ZodType<Prisma.LanguageCreateWithoutTagTranslatesInput> = makeSchema() as unknown as z.ZodType<Prisma.LanguageCreateWithoutTagTranslatesInput>;
export const LanguageCreateWithoutTagTranslatesInputObjectZodSchema = makeSchema();
