import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TranslationScalarWhereInputObjectSchema as TranslationScalarWhereInputObjectSchema } from './TranslationScalarWhereInput.schema';
import { TranslationUpdateManyMutationInputObjectSchema as TranslationUpdateManyMutationInputObjectSchema } from './TranslationUpdateManyMutationInput.schema';
import { TranslationUncheckedUpdateManyWithoutLanguageInputObjectSchema as TranslationUncheckedUpdateManyWithoutLanguageInputObjectSchema } from './TranslationUncheckedUpdateManyWithoutLanguageInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TranslationScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => TranslationUpdateManyMutationInputObjectSchema), z.lazy(() => TranslationUncheckedUpdateManyWithoutLanguageInputObjectSchema)])
}).strict();
export const TranslationUpdateManyWithWhereWithoutLanguageInputObjectSchema: z.ZodType<Prisma.TranslationUpdateManyWithWhereWithoutLanguageInput> = makeSchema() as unknown as z.ZodType<Prisma.TranslationUpdateManyWithWhereWithoutLanguageInput>;
export const TranslationUpdateManyWithWhereWithoutLanguageInputObjectZodSchema = makeSchema();
