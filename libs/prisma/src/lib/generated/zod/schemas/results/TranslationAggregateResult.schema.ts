import * as z from 'zod';
export const TranslationAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    text: z.number(),
    definition: z.number(),
    wordId: z.number(),
    word: z.number(),
    languageId: z.number(),
    language: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    wordId: z.number().nullable(),
    languageId: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    wordId: z.number().nullable(),
    languageId: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    text: z.string().nullable(),
    definition: z.string().nullable(),
    wordId: z.number().int().nullable(),
    languageId: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    text: z.string().nullable(),
    definition: z.string().nullable(),
    wordId: z.number().int().nullable(),
    languageId: z.number().int().nullable()
  }).nullable().optional()});