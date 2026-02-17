import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { WordWhereUniqueInputObjectSchema as WordWhereUniqueInputObjectSchema } from './WordWhereUniqueInput.schema';
import { WordCreateWithoutTranslationsInputObjectSchema as WordCreateWithoutTranslationsInputObjectSchema } from './WordCreateWithoutTranslationsInput.schema';
import { WordUncheckedCreateWithoutTranslationsInputObjectSchema as WordUncheckedCreateWithoutTranslationsInputObjectSchema } from './WordUncheckedCreateWithoutTranslationsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WordWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => WordCreateWithoutTranslationsInputObjectSchema), z.lazy(() => WordUncheckedCreateWithoutTranslationsInputObjectSchema)])
}).strict();
export const WordCreateOrConnectWithoutTranslationsInputObjectSchema: z.ZodType<Prisma.WordCreateOrConnectWithoutTranslationsInput> = makeSchema() as unknown as z.ZodType<Prisma.WordCreateOrConnectWithoutTranslationsInput>;
export const WordCreateOrConnectWithoutTranslationsInputObjectZodSchema = makeSchema();
