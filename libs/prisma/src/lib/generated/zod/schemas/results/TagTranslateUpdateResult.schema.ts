import * as z from 'zod';
export const TagTranslateUpdateResultSchema = z.nullable(z.object({
  id: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
  language: z.unknown(),
  languageId: z.number().int(),
  translation: z.string(),
  tagId: z.number().int(),
  tagValue: z.unknown(),
  description: z.string().optional()
}));