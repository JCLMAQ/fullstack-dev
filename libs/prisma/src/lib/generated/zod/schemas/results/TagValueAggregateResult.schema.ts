import * as z from 'zod';
export const TagValueAggregateResultSchema = z.object({  _count: z.union([z.number(), z.object({
    id: z.number().optional(),
    createdAt: z.number().optional(),
    updatedAt: z.number().optional(),
    published: z.number().optional(),
    isPublic: z.number().optional(),
    isDeleted: z.number().optional(),
    isDeletedDT: z.number().optional(),
    name: z.number().optional(),
    position: z.number().optional(),
    color: z.number().optional(),
    tagCategoriesId: z.number().optional(),
    mainTagId: z.number().optional(),
    _all: z.number().optional()
  })]).optional(),
  _sum: z.object({
    id: z.number().nullable().optional(),
    isDeleted: z.number().nullable().optional(),
    position: z.number().nullable().optional(),
    tagCategoriesId: z.number().nullable().optional(),
    mainTagId: z.number().nullable().optional()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable().optional(),
    isDeleted: z.number().nullable().optional(),
    position: z.number().nullable().optional(),
    tagCategoriesId: z.number().nullable().optional(),
    mainTagId: z.number().nullable().optional()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable().optional(),
    createdAt: z.date().nullable().optional(),
    updatedAt: z.date().nullable().optional(),
    published: z.boolean().nullable().optional(),
    isPublic: z.boolean().nullable().optional(),
    isDeleted: z.number().int().nullable().optional(),
    isDeletedDT: z.date().nullable().optional(),
    name: z.string().nullable().optional(),
    position: z.number().int().nullable().optional(),
    color: z.string().nullable().optional(),
    tagCategoriesId: z.number().int().nullable().optional(),
    mainTagId: z.number().int().nullable().optional()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable().optional(),
    createdAt: z.date().nullable().optional(),
    updatedAt: z.date().nullable().optional(),
    published: z.boolean().nullable().optional(),
    isPublic: z.boolean().nullable().optional(),
    isDeleted: z.number().int().nullable().optional(),
    isDeletedDT: z.date().nullable().optional(),
    name: z.string().nullable().optional(),
    position: z.number().int().nullable().optional(),
    color: z.string().nullable().optional(),
    tagCategoriesId: z.number().int().nullable().optional(),
    mainTagId: z.number().int().nullable().optional()
  }).nullable().optional()});