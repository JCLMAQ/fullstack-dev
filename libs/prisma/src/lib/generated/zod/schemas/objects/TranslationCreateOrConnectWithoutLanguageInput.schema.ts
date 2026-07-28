import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TranslationWhereUniqueInputObjectSchema as TranslationWhereUniqueInputObjectSchema } from './TranslationWhereUniqueInput.schema';
import { TranslationCreateWithoutLanguageInputObjectSchema as TranslationCreateWithoutLanguageInputObjectSchema } from './TranslationCreateWithoutLanguageInput.schema';
import { TranslationUncheckedCreateWithoutLanguageInputObjectSchema as TranslationUncheckedCreateWithoutLanguageInputObjectSchema } from './TranslationUncheckedCreateWithoutLanguageInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TranslationWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TranslationCreateWithoutLanguageInputObjectSchema), z.lazy(() => TranslationUncheckedCreateWithoutLanguageInputObjectSchema)])
}).strict();
export const TranslationCreateOrConnectWithoutLanguageInputObjectSchema: z.ZodType<Prisma.TranslationCreateOrConnectWithoutLanguageInput> = makeSchema() as unknown as z.ZodType<Prisma.TranslationCreateOrConnectWithoutLanguageInput>;
export const TranslationCreateOrConnectWithoutLanguageInputObjectZodSchema = makeSchema();
