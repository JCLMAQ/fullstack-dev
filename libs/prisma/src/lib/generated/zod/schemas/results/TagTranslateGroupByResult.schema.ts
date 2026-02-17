import * as z from 'zod';
export const TagTranslateGroupByResultSchema = z.array(z.object({
  id: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
  languageId: z.number().int(),
  translation: z.string(),
  tagId: z.number().int(),
  description: z.string(),
  _count: z.object({
    id: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    language: z.number(),
    languageId: z.number(),
    translation: z.number(),
    tagId: z.number(),
    tagValue: z.number(),
    description: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    languageId: z.number().nullable(),
    tagId: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    languageId: z.number().nullable(),
    tagId: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    languageId: z.number().int().nullable(),
    translation: z.string().nullable(),
    tagId: z.number().int().nullable(),
    description: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    languageId: z.number().int().nullable(),
    translation: z.string().nullable(),
    tagId: z.number().int().nullable(),
    description: z.string().nullable()
  }).nullable().optional()
}));