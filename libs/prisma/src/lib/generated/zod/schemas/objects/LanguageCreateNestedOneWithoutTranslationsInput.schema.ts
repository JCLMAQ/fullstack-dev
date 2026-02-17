import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { LanguageCreateWithoutTranslationsInputObjectSchema as LanguageCreateWithoutTranslationsInputObjectSchema } from './LanguageCreateWithoutTranslationsInput.schema';
import { LanguageUncheckedCreateWithoutTranslationsInputObjectSchema as LanguageUncheckedCreateWithoutTranslationsInputObjectSchema } from './LanguageUncheckedCreateWithoutTranslationsInput.schema';
import { LanguageCreateOrConnectWithoutTranslationsInputObjectSchema as LanguageCreateOrConnectWithoutTranslationsInputObjectSchema } from './LanguageCreateOrConnectWithoutTranslationsInput.schema';
import { LanguageWhereUniqueInputObjectSchema as LanguageWhereUniqueInputObjectSchema } from './LanguageWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => LanguageCreateWithoutTranslationsInputObjectSchema), z.lazy(() => LanguageUncheckedCreateWithoutTranslationsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => LanguageCreateOrConnectWithoutTranslationsInputObjectSchema).optional(),
  connect: z.lazy(() => LanguageWhereUniqueInputObjectSchema).optional()
}).strict();
export const LanguageCreateNestedOneWithoutTranslationsInputObjectSchema: z.ZodType<Prisma.LanguageCreateNestedOneWithoutTranslationsInput> = makeSchema() as unknown as z.ZodType<Prisma.LanguageCreateNestedOneWithoutTranslationsInput>;
export const LanguageCreateNestedOneWithoutTranslationsInputObjectZodSchema = makeSchema();
