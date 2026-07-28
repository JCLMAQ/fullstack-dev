import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  text: z.string(),
  definition: z.string().optional().nullable(),
  wordId: z.number().int()
}).strict();
export const TranslationUncheckedCreateWithoutLanguageInputObjectSchema: z.ZodType<Prisma.TranslationUncheckedCreateWithoutLanguageInput> = makeSchema() as unknown as z.ZodType<Prisma.TranslationUncheckedCreateWithoutLanguageInput>;
export const TranslationUncheckedCreateWithoutLanguageInputObjectZodSchema = makeSchema();
