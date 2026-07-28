import * as z from 'zod';
export const TagTranslateFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
  language: z.unknown().optional(),
  languageId: z.number().int(),
  translation: z.string(),
  tagId: z.number().int(),
  tagValue: z.unknown().optional(),
  description: z.string().optional()
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