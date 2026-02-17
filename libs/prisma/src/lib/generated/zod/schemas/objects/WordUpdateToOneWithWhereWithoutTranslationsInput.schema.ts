import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WordWhereInputObjectSchema as WordWhereInputObjectSchema } from './WordWhereInput.schema';
import { WordUpdateWithoutTranslationsInputObjectSchema as WordUpdateWithoutTranslationsInputObjectSchema } from './WordUpdateWithoutTranslationsInput.schema';
import { WordUncheckedUpdateWithoutTranslationsInputObjectSchema as WordUncheckedUpdateWithoutTranslationsInputObjectSchema } from './WordUncheckedUpdateWithoutTranslationsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WordWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => WordUpdateWithoutTranslationsInputObjectSchema), z.lazy(() => WordUncheckedUpdateWithoutTranslationsInputObjectSchema)])
}).strict();
export const WordUpdateToOneWithWhereWithoutTranslationsInputObjectSchema: z.ZodType<Prisma.WordUpdateToOneWithWhereWithoutTranslationsInput> = makeSchema() as unknown as z.ZodType<Prisma.WordUpdateToOneWithWhereWithoutTranslationsInput>;
export const WordUpdateToOneWithWhereWithoutTranslationsInputObjectZodSchema = makeSchema();
