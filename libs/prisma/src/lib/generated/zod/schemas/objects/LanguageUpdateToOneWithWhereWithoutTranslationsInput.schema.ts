import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { LanguageWhereInputObjectSchema as LanguageWhereInputObjectSchema } from './LanguageWhereInput.schema';
import { LanguageUpdateWithoutTranslationsInputObjectSchema as LanguageUpdateWithoutTranslationsInputObjectSchema } from './LanguageUpdateWithoutTranslationsInput.schema';
import { LanguageUncheckedUpdateWithoutTranslationsInputObjectSchema as LanguageUncheckedUpdateWithoutTranslationsInputObjectSchema } from './LanguageUncheckedUpdateWithoutTranslationsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => LanguageWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => LanguageUpdateWithoutTranslationsInputObjectSchema), z.lazy(() => LanguageUncheckedUpdateWithoutTranslationsInputObjectSchema)])
}).strict();
export const LanguageUpdateToOneWithWhereWithoutTranslationsInputObjectSchema: z.ZodType<Prisma.LanguageUpdateToOneWithWhereWithoutTranslationsInput> = makeSchema() as unknown as z.ZodType<Prisma.LanguageUpdateToOneWithWhereWithoutTranslationsInput>;
export const LanguageUpdateToOneWithWhereWithoutTranslationsInputObjectZodSchema = makeSchema();
