import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  text: z.string(),
  definition: z.string().optional().nullable(),
  wordId: z.number().int(),
  languageId: z.number().int()
}).strict();
export const TranslationUncheckedCreateInputObjectSchema: z.ZodType<Prisma.TranslationUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.TranslationUncheckedCreateInput>;
export const TranslationUncheckedCreateInputObjectZodSchema = makeSchema();
