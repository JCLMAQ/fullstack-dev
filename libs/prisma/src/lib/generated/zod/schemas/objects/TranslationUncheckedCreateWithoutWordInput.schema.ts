import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  text: z.string(),
  definition: z.string().optional().nullable(),
  languageId: z.number().int()
}).strict();
export const TranslationUncheckedCreateWithoutWordInputObjectSchema: z.ZodType<Prisma.TranslationUncheckedCreateWithoutWordInput> = makeSchema() as unknown as z.ZodType<Prisma.TranslationUncheckedCreateWithoutWordInput>;
export const TranslationUncheckedCreateWithoutWordInputObjectZodSchema = makeSchema();
