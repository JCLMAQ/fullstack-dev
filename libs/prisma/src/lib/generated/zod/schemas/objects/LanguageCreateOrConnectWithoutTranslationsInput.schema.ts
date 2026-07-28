import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { LanguageWhereUniqueInputObjectSchema as LanguageWhereUniqueInputObjectSchema } from './LanguageWhereUniqueInput.schema';
import { LanguageCreateWithoutTranslationsInputObjectSchema as LanguageCreateWithoutTranslationsInputObjectSchema } from './LanguageCreateWithoutTranslationsInput.schema';
import { LanguageUncheckedCreateWithoutTranslationsInputObjectSchema as LanguageUncheckedCreateWithoutTranslationsInputObjectSchema } from './LanguageUncheckedCreateWithoutTranslationsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => LanguageWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => LanguageCreateWithoutTranslationsInputObjectSchema), z.lazy(() => LanguageUncheckedCreateWithoutTranslationsInputObjectSchema)])
}).strict();
export const LanguageCreateOrConnectWithoutTranslationsInputObjectSchema: z.ZodType<Prisma.LanguageCreateOrConnectWithoutTranslationsInput> = makeSchema() as unknown as z.ZodType<Prisma.LanguageCreateOrConnectWithoutTranslationsInput>;
export const LanguageCreateOrConnectWithoutTranslationsInputObjectZodSchema = makeSchema();
