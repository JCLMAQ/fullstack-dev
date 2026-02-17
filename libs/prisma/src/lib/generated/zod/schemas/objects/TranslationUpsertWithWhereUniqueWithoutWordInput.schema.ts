import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TranslationWhereUniqueInputObjectSchema as TranslationWhereUniqueInputObjectSchema } from './TranslationWhereUniqueInput.schema';
import { TranslationUpdateWithoutWordInputObjectSchema as TranslationUpdateWithoutWordInputObjectSchema } from './TranslationUpdateWithoutWordInput.schema';
import { TranslationUncheckedUpdateWithoutWordInputObjectSchema as TranslationUncheckedUpdateWithoutWordInputObjectSchema } from './TranslationUncheckedUpdateWithoutWordInput.schema';
import { TranslationCreateWithoutWordInputObjectSchema as TranslationCreateWithoutWordInputObjectSchema } from './TranslationCreateWithoutWordInput.schema';
import { TranslationUncheckedCreateWithoutWordInputObjectSchema as TranslationUncheckedCreateWithoutWordInputObjectSchema } from './TranslationUncheckedCreateWithoutWordInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TranslationWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => TranslationUpdateWithoutWordInputObjectSchema), z.lazy(() => TranslationUncheckedUpdateWithoutWordInputObjectSchema)]),
  create: z.union([z.lazy(() => TranslationCreateWithoutWordInputObjectSchema), z.lazy(() => TranslationUncheckedCreateWithoutWordInputObjectSchema)])
}).strict();
export const TranslationUpsertWithWhereUniqueWithoutWordInputObjectSchema: z.ZodType<Prisma.TranslationUpsertWithWhereUniqueWithoutWordInput> = makeSchema() as unknown as z.ZodType<Prisma.TranslationUpsertWithWhereUniqueWithoutWordInput>;
export const TranslationUpsertWithWhereUniqueWithoutWordInputObjectZodSchema = makeSchema();
