import * as z from 'zod';
export const TranslationAggregateResultSchema = z.object({  _count: z.union([z.number(), z.object({
    id: z.number().optional(),
    text: z.number().optional(),
    definition: z.number().optional(),
    wordId: z.number().optional(),
    languageId: z.number().optional(),
    _all: z.number().optional()
  })]).optional(),
  _sum: z.object({
    id: z.number().nullable().optional(),
    wordId: z.number().nullable().optional(),
    languageId: z.number().nullable().optional()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable().optional(),
    wordId: z.number().nullable().optional(),
    languageId: z.number().nullable().optional()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable().optional(),
    text: z.string().nullable().optional(),
    definition: z.string().nullable().optional(),
    wordId: z.number().int().nullable().optional(),
    languageId: z.number().int().nullable().optional()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable().optional(),
    text: z.string().nullable().optional(),
    definition: z.string().nullable().optional(),
    wordId: z.number().int().nullable().optional(),
    languageId: z.number().int().nullable().optional()
  }).nullable().optional()});