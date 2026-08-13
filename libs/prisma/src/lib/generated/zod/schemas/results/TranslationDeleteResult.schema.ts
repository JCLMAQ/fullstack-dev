import * as z from 'zod';
export const TranslationDeleteResultSchema = z.nullable(z.object({
  id: z.number().int(),
  text: z.string(),
  definition: z.string().nullable().optional(),
  wordId: z.number().int(),
  word: z.unknown().optional(),
  languageId: z.number().int(),
  language: z.unknown().optional()
}));