import * as z from 'zod';
export const LanguageGroupByResultSchema = z.array(z.object({
  id: z.number().int(),
  code: z.string(),
  name: z.string(),
  _count: z.object({
    id: z.number(),
    code: z.number(),
    name: z.number(),
    translations: z.number(),
    users: z.number(),
    tagTranslates: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    code: z.string().nullable(),
    name: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    code: z.string().nullable(),
    name: z.string().nullable()
  }).nullable().optional()
}));