import * as z from 'zod';
export const WordAggregateResultSchema = z.object({  _count: z.union([z.number(), z.object({
    id: z.number().optional(),
    createdAt: z.number().optional(),
    updatedAt: z.number().optional(),
    published: z.number().optional(),
    isPublic: z.number().optional(),
    isDeleted: z.number().optional(),
    isDeletedDT: z.number().optional(),
    slug: z.number().optional(),
    type: z.number().optional(),
    _all: z.number().optional()
  })]).optional(),
  _sum: z.object({
    id: z.number().nullable().optional(),
    isDeleted: z.number().nullable().optional()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable().optional(),
    isDeleted: z.number().nullable().optional()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable().optional(),
    createdAt: z.date().nullable().optional(),
    updatedAt: z.date().nullable().optional(),
    published: z.boolean().nullable().optional(),
    isPublic: z.boolean().nullable().optional(),
    isDeleted: z.number().int().nullable().optional(),
    isDeletedDT: z.date().nullable().optional(),
    slug: z.string().nullable().optional(),
    type: z.unknown().nullable().optional()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable().optional(),
    createdAt: z.date().nullable().optional(),
    updatedAt: z.date().nullable().optional(),
    published: z.boolean().nullable().optional(),
    isPublic: z.boolean().nullable().optional(),
    isDeleted: z.number().int().nullable().optional(),
    isDeletedDT: z.date().nullable().optional(),
    slug: z.string().nullable().optional(),
    type: z.unknown().nullable().optional()
  }).nullable().optional()});