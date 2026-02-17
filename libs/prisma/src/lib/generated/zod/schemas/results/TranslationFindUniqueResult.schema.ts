import * as z from 'zod';
export const TranslationFindUniqueResultSchema = z.nullable(z.object({
  id: z.number().int(),
  text: z.string(),
  definition: z.string().optional(),
  wordId: z.number().int(),
  word: z.unknown(),
  languageId: z.number().int(),
  language: z.unknown()
}));