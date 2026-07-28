import * as z from 'zod';
export const LanguageFindFirstResultSchema = z.nullable(z.object({
  id: z.number().int(),
  code: z.string(),
  name: z.string(),
  translations: z.array(z.unknown()).optional(),
  users: z.array(z.unknown()).optional(),
  tagTranslates: z.array(z.unknown()).optional()
}));