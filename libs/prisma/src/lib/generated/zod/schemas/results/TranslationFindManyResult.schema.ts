import * as z from 'zod';
export const TranslationFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  text: z.string(),
  definition: z.string().nullable().optional(),
  wordId: z.number().int(),
  word: z.unknown().optional(),
  languageId: z.number().int(),
  language: z.unknown().optional()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});