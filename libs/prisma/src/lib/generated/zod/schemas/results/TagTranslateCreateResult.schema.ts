import * as z from 'zod';
export const TagTranslateCreateResultSchema = z.object({
  id: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
  language: z.unknown().optional(),
  languageId: z.number().int(),
  translation: z.string(),
  tagId: z.number().int(),
  tagValue: z.unknown().optional(),
  description: z.string().optional()
});