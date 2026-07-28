import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { LanguageUpdateWithoutTranslationsInputObjectSchema as LanguageUpdateWithoutTranslationsInputObjectSchema } from './LanguageUpdateWithoutTranslationsInput.schema';
import { LanguageUncheckedUpdateWithoutTranslationsInputObjectSchema as LanguageUncheckedUpdateWithoutTranslationsInputObjectSchema } from './LanguageUncheckedUpdateWithoutTranslationsInput.schema';
import { LanguageCreateWithoutTranslationsInputObjectSchema as LanguageCreateWithoutTranslationsInputObjectSchema } from './LanguageCreateWithoutTranslationsInput.schema';
import { LanguageUncheckedCreateWithoutTranslationsInputObjectSchema as LanguageUncheckedCreateWithoutTranslationsInputObjectSchema } from './LanguageUncheckedCreateWithoutTranslationsInput.schema';
import { LanguageWhereInputObjectSchema as LanguageWhereInputObjectSchema } from './LanguageWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => LanguageUpdateWithoutTranslationsInputObjectSchema), z.lazy(() => LanguageUncheckedUpdateWithoutTranslationsInputObjectSchema)]),
  create: z.union([z.lazy(() => LanguageCreateWithoutTranslationsInputObjectSchema), z.lazy(() => LanguageUncheckedCreateWithoutTranslationsInputObjectSchema)]),
  where: z.lazy(() => LanguageWhereInputObjectSchema).optional()
}).strict();
export const LanguageUpsertWithoutTranslationsInputObjectSchema: z.ZodType<Prisma.LanguageUpsertWithoutTranslationsInput> = makeSchema() as unknown as z.ZodType<Prisma.LanguageUpsertWithoutTranslationsInput>;
export const LanguageUpsertWithoutTranslationsInputObjectZodSchema = makeSchema();
