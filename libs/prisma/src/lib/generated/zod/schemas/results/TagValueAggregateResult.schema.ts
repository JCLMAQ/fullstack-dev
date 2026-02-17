import * as z from 'zod';
export const TagValueAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    published: z.number(),
    isPublic: z.number(),
    isDeleted: z.number(),
    isDeletedDT: z.number(),
    name: z.number(),
    position: z.number(),
    tagCategories: z.number(),
    tagCategoriesId: z.number(),
    mainTag: z.number(),
    mainTagId: z.number(),
    SubTags: z.number(),
    tagTranslates: z.number(),
    Todos: z.number(),
    Tasks: z.number(),
    Groups: z.number(),
    Posts: z.number(),
    Files: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    isDeleted: z.number().nullable(),
    position: z.number().nullable(),
    tagCategoriesId: z.number().nullable(),
    mainTagId: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    isDeleted: z.number().nullable(),
    position: z.number().nullable(),
    tagCategoriesId: z.number().nullable(),
    mainTagId: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    isDeleted: z.number().int().nullable(),
    isDeletedDT: z.date().nullable(),
    name: z.string().nullable(),
    position: z.number().int().nullable(),
    tagCategoriesId: z.number().int().nullable(),
    mainTagId: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    isDeleted: z.number().int().nullable(),
    isDeletedDT: z.date().nullable(),
    name: z.string().nullable(),
    position: z.number().int().nullable(),
    tagCategoriesId: z.number().int().nullable(),
    mainTagId: z.number().int().nullable()
  }).nullable().optional()});