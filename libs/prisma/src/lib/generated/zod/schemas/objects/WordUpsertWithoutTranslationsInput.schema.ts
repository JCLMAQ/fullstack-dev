import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WordUpdateWithoutTranslationsInputObjectSchema as WordUpdateWithoutTranslationsInputObjectSchema } from './WordUpdateWithoutTranslationsInput.schema';
import { WordUncheckedUpdateWithoutTranslationsInputObjectSchema as WordUncheckedUpdateWithoutTranslationsInputObjectSchema } from './WordUncheckedUpdateWithoutTranslationsInput.schema';
import { WordCreateWithoutTranslationsInputObjectSchema as WordCreateWithoutTranslationsInputObjectSchema } from './WordCreateWithoutTranslationsInput.schema';
import { WordUncheckedCreateWithoutTranslationsInputObjectSchema as WordUncheckedCreateWithoutTranslationsInputObjectSchema } from './WordUncheckedCreateWithoutTranslationsInput.schema';
import { WordWhereInputObjectSchema as WordWhereInputObjectSchema } from './WordWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => WordUpdateWithoutTranslationsInputObjectSchema), z.lazy(() => WordUncheckedUpdateWithoutTranslationsInputObjectSchema)]),
  create: z.union([z.lazy(() => WordCreateWithoutTranslationsInputObjectSchema), z.lazy(() => WordUncheckedCreateWithoutTranslationsInputObjectSchema)]),
  where: z.lazy(() => WordWhereInputObjectSchema).optional()
}).strict();
export const WordUpsertWithoutTranslationsInputObjectSchema: z.ZodType<Prisma.WordUpsertWithoutTranslationsInput> = makeSchema() as unknown as z.ZodType<Prisma.WordUpsertWithoutTranslationsInput>;
export const WordUpsertWithoutTranslationsInputObjectZodSchema = makeSchema();
