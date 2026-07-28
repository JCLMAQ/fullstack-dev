import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { WordCreateWithoutTranslationsInputObjectSchema as WordCreateWithoutTranslationsInputObjectSchema } from './WordCreateWithoutTranslationsInput.schema';
import { WordUncheckedCreateWithoutTranslationsInputObjectSchema as WordUncheckedCreateWithoutTranslationsInputObjectSchema } from './WordUncheckedCreateWithoutTranslationsInput.schema';
import { WordCreateOrConnectWithoutTranslationsInputObjectSchema as WordCreateOrConnectWithoutTranslationsInputObjectSchema } from './WordCreateOrConnectWithoutTranslationsInput.schema';
import { WordUpsertWithoutTranslationsInputObjectSchema as WordUpsertWithoutTranslationsInputObjectSchema } from './WordUpsertWithoutTranslationsInput.schema';
import { WordWhereUniqueInputObjectSchema as WordWhereUniqueInputObjectSchema } from './WordWhereUniqueInput.schema';
import { WordUpdateToOneWithWhereWithoutTranslationsInputObjectSchema as WordUpdateToOneWithWhereWithoutTranslationsInputObjectSchema } from './WordUpdateToOneWithWhereWithoutTranslationsInput.schema';
import { WordUpdateWithoutTranslationsInputObjectSchema as WordUpdateWithoutTranslationsInputObjectSchema } from './WordUpdateWithoutTranslationsInput.schema';
import { WordUncheckedUpdateWithoutTranslationsInputObjectSchema as WordUncheckedUpdateWithoutTranslationsInputObjectSchema } from './WordUncheckedUpdateWithoutTranslationsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => WordCreateWithoutTranslationsInputObjectSchema), z.lazy(() => WordUncheckedCreateWithoutTranslationsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => WordCreateOrConnectWithoutTranslationsInputObjectSchema).optional(),
  upsert: z.lazy(() => WordUpsertWithoutTranslationsInputObjectSchema).optional(),
  connect: z.lazy(() => WordWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => WordUpdateToOneWithWhereWithoutTranslationsInputObjectSchema), z.lazy(() => WordUpdateWithoutTranslationsInputObjectSchema), z.lazy(() => WordUncheckedUpdateWithoutTranslationsInputObjectSchema)]).optional()
}).strict();
export const WordUpdateOneRequiredWithoutTranslationsNestedInputObjectSchema: z.ZodType<Prisma.WordUpdateOneRequiredWithoutTranslationsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.WordUpdateOneRequiredWithoutTranslationsNestedInput>;
export const WordUpdateOneRequiredWithoutTranslationsNestedInputObjectZodSchema = makeSchema();
