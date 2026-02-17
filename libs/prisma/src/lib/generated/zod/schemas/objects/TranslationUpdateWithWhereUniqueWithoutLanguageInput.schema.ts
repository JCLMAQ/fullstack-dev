import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TranslationWhereUniqueInputObjectSchema as TranslationWhereUniqueInputObjectSchema } from './TranslationWhereUniqueInput.schema';
import { TranslationUpdateWithoutLanguageInputObjectSchema as TranslationUpdateWithoutLanguageInputObjectSchema } from './TranslationUpdateWithoutLanguageInput.schema';
import { TranslationUncheckedUpdateWithoutLanguageInputObjectSchema as TranslationUncheckedUpdateWithoutLanguageInputObjectSchema } from './TranslationUncheckedUpdateWithoutLanguageInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TranslationWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => TranslationUpdateWithoutLanguageInputObjectSchema), z.lazy(() => TranslationUncheckedUpdateWithoutLanguageInputObjectSchema)])
}).strict();
export const TranslationUpdateWithWhereUniqueWithoutLanguageInputObjectSchema: z.ZodType<Prisma.TranslationUpdateWithWhereUniqueWithoutLanguageInput> = makeSchema() as unknown as z.ZodType<Prisma.TranslationUpdateWithWhereUniqueWithoutLanguageInput>;
export const TranslationUpdateWithWhereUniqueWithoutLanguageInputObjectZodSchema = makeSchema();
