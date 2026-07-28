import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { LanguageCreateWithoutTranslationsInputObjectSchema as LanguageCreateWithoutTranslationsInputObjectSchema } from './LanguageCreateWithoutTranslationsInput.schema';
import { LanguageUncheckedCreateWithoutTranslationsInputObjectSchema as LanguageUncheckedCreateWithoutTranslationsInputObjectSchema } from './LanguageUncheckedCreateWithoutTranslationsInput.schema';
import { LanguageCreateOrConnectWithoutTranslationsInputObjectSchema as LanguageCreateOrConnectWithoutTranslationsInputObjectSchema } from './LanguageCreateOrConnectWithoutTranslationsInput.schema';
import { LanguageUpsertWithoutTranslationsInputObjectSchema as LanguageUpsertWithoutTranslationsInputObjectSchema } from './LanguageUpsertWithoutTranslationsInput.schema';
import { LanguageWhereUniqueInputObjectSchema as LanguageWhereUniqueInputObjectSchema } from './LanguageWhereUniqueInput.schema';
import { LanguageUpdateToOneWithWhereWithoutTranslationsInputObjectSchema as LanguageUpdateToOneWithWhereWithoutTranslationsInputObjectSchema } from './LanguageUpdateToOneWithWhereWithoutTranslationsInput.schema';
import { LanguageUpdateWithoutTranslationsInputObjectSchema as LanguageUpdateWithoutTranslationsInputObjectSchema } from './LanguageUpdateWithoutTranslationsInput.schema';
import { LanguageUncheckedUpdateWithoutTranslationsInputObjectSchema as LanguageUncheckedUpdateWithoutTranslationsInputObjectSchema } from './LanguageUncheckedUpdateWithoutTranslationsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => LanguageCreateWithoutTranslationsInputObjectSchema), z.lazy(() => LanguageUncheckedCreateWithoutTranslationsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => LanguageCreateOrConnectWithoutTranslationsInputObjectSchema).optional(),
  upsert: z.lazy(() => LanguageUpsertWithoutTranslationsInputObjectSchema).optional(),
  connect: z.lazy(() => LanguageWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => LanguageUpdateToOneWithWhereWithoutTranslationsInputObjectSchema), z.lazy(() => LanguageUpdateWithoutTranslationsInputObjectSchema), z.lazy(() => LanguageUncheckedUpdateWithoutTranslationsInputObjectSchema)]).optional()
}).strict();
export const LanguageUpdateOneRequiredWithoutTranslationsNestedInputObjectSchema: z.ZodType<Prisma.LanguageUpdateOneRequiredWithoutTranslationsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.LanguageUpdateOneRequiredWithoutTranslationsNestedInput>;
export const LanguageUpdateOneRequiredWithoutTranslationsNestedInputObjectZodSchema = makeSchema();
