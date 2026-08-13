import * as z from 'zod';
export const TagTranslateAggregateResultSchema = z.object({  _count: z.union([z.number(), z.object({
    id: z.number().optional(),
    createdAt: z.number().optional(),
    updatedAt: z.number().optional(),
    languageId: z.number().optional(),
    translation: z.number().optional(),
    tagId: z.number().optional(),
    description: z.number().optional(),
    _all: z.number().optional()
  })]).optional(),
  _sum: z.object({
    id: z.number().nullable().optional(),
    languageId: z.number().nullable().optional(),
    tagId: z.number().nullable().optional()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable().optional(),
    languageId: z.number().nullable().optional(),
    tagId: z.number().nullable().optional()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable().optional(),
    createdAt: z.date().nullable().optional(),
    updatedAt: z.date().nullable().optional(),
    languageId: z.number().int().nullable().optional(),
    translation: z.string().nullable().optional(),
    tagId: z.number().int().nullable().optional(),
    description: z.string().nullable().optional()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable().optional(),
    createdAt: z.date().nullable().optional(),
    updatedAt: z.date().nullable().optional(),
    languageId: z.number().int().nullable().optional(),
    translation: z.string().nullable().optional(),
    tagId: z.number().int().nullable().optional(),
    description: z.string().nullable().optional()
  }).nullable().optional()});