import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { WordCreateWithoutTranslationsInputObjectSchema as WordCreateWithoutTranslationsInputObjectSchema } from './WordCreateWithoutTranslationsInput.schema';
import { WordUncheckedCreateWithoutTranslationsInputObjectSchema as WordUncheckedCreateWithoutTranslationsInputObjectSchema } from './WordUncheckedCreateWithoutTranslationsInput.schema';
import { WordCreateOrConnectWithoutTranslationsInputObjectSchema as WordCreateOrConnectWithoutTranslationsInputObjectSchema } from './WordCreateOrConnectWithoutTranslationsInput.schema';
import { WordWhereUniqueInputObjectSchema as WordWhereUniqueInputObjectSchema } from './WordWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => WordCreateWithoutTranslationsInputObjectSchema), z.lazy(() => WordUncheckedCreateWithoutTranslationsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => WordCreateOrConnectWithoutTranslationsInputObjectSchema).optional(),
  connect: z.lazy(() => WordWhereUniqueInputObjectSchema).optional()
}).strict();
export const WordCreateNestedOneWithoutTranslationsInputObjectSchema: z.ZodType<Prisma.WordCreateNestedOneWithoutTranslationsInput> = makeSchema() as unknown as z.ZodType<Prisma.WordCreateNestedOneWithoutTranslationsInput>;
export const WordCreateNestedOneWithoutTranslationsInputObjectZodSchema = makeSchema();
