import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  text: z.string(),
  definition: z.string().optional().nullable(),
  wordId: z.number().int()
}).strict();
export const TranslationCreateManyLanguageInputObjectSchema: z.ZodType<Prisma.TranslationCreateManyLanguageInput> = makeSchema() as unknown as z.ZodType<Prisma.TranslationCreateManyLanguageInput>;
export const TranslationCreateManyLanguageInputObjectZodSchema = makeSchema();
