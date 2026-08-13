import * as z from 'zod';
export const LanguageGroupByResultSchema = z.array(z.object({
  id: z.number().int().optional(),
  code: z.string().optional(),
  name: z.string().optional(),
  _count: z.union([z.number(), z.object({
    id: z.number().optional(),
    code: z.number().optional(),
    name: z.number().optional(),
    _all: z.number().optional()
  })]).optional(),
  _sum: z.object({
    id: z.number().nullable().optional()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable().optional()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable().optional(),
    code: z.string().nullable().optional(),
    name: z.string().nullable().optional()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable().optional(),
    code: z.string().nullable().optional(),
    name: z.string().nullable().optional()
  }).nullable().optional()
}));