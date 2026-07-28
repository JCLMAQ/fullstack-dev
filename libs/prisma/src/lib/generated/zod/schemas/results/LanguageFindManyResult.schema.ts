import * as z from 'zod';
export const LanguageFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  code: z.string(),
  name: z.string(),
  translations: z.array(z.unknown()).optional(),
  users: z.array(z.unknown()).optional(),
  tagTranslates: z.array(z.unknown()).optional()
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