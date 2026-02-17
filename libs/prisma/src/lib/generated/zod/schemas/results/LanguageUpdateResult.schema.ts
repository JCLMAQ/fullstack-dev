import * as z from 'zod';
export const LanguageUpdateResultSchema = z.nullable(z.object({
  id: z.number().int(),
  code: z.string(),
  name: z.string(),
  translations: z.array(z.unknown()),
  users: z.array(z.unknown()),
  tagTranslates: z.array(z.unknown())
}));