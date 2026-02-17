import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TranslationWhereUniqueInputObjectSchema as TranslationWhereUniqueInputObjectSchema } from './TranslationWhereUniqueInput.schema';
import { TranslationUpdateWithoutWordInputObjectSchema as TranslationUpdateWithoutWordInputObjectSchema } from './TranslationUpdateWithoutWordInput.schema';
import { TranslationUncheckedUpdateWithoutWordInputObjectSchema as TranslationUncheckedUpdateWithoutWordInputObjectSchema } from './TranslationUncheckedUpdateWithoutWordInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TranslationWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => TranslationUpdateWithoutWordInputObjectSchema), z.lazy(() => TranslationUncheckedUpdateWithoutWordInputObjectSchema)])
}).strict();
export const TranslationUpdateWithWhereUniqueWithoutWordInputObjectSchema: z.ZodType<Prisma.TranslationUpdateWithWhereUniqueWithoutWordInput> = makeSchema() as unknown as z.ZodType<Prisma.TranslationUpdateWithWhereUniqueWithoutWordInput>;
export const TranslationUpdateWithWhereUniqueWithoutWordInputObjectZodSchema = makeSchema();
