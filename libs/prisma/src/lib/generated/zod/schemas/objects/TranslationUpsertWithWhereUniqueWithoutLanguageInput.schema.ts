import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TranslationWhereUniqueInputObjectSchema as TranslationWhereUniqueInputObjectSchema } from './TranslationWhereUniqueInput.schema';
import { TranslationUpdateWithoutLanguageInputObjectSchema as TranslationUpdateWithoutLanguageInputObjectSchema } from './TranslationUpdateWithoutLanguageInput.schema';
import { TranslationUncheckedUpdateWithoutLanguageInputObjectSchema as TranslationUncheckedUpdateWithoutLanguageInputObjectSchema } from './TranslationUncheckedUpdateWithoutLanguageInput.schema';
import { TranslationCreateWithoutLanguageInputObjectSchema as TranslationCreateWithoutLanguageInputObjectSchema } from './TranslationCreateWithoutLanguageInput.schema';
import { TranslationUncheckedCreateWithoutLanguageInputObjectSchema as TranslationUncheckedCreateWithoutLanguageInputObjectSchema } from './TranslationUncheckedCreateWithoutLanguageInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TranslationWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => TranslationUpdateWithoutLanguageInputObjectSchema), z.lazy(() => TranslationUncheckedUpdateWithoutLanguageInputObjectSchema)]),
  create: z.union([z.lazy(() => TranslationCreateWithoutLanguageInputObjectSchema), z.lazy(() => TranslationUncheckedCreateWithoutLanguageInputObjectSchema)])
}).strict();
export const TranslationUpsertWithWhereUniqueWithoutLanguageInputObjectSchema: z.ZodType<Prisma.TranslationUpsertWithWhereUniqueWithoutLanguageInput> = makeSchema() as unknown as z.ZodType<Prisma.TranslationUpsertWithWhereUniqueWithoutLanguageInput>;
export const TranslationUpsertWithWhereUniqueWithoutLanguageInputObjectZodSchema = makeSchema();
