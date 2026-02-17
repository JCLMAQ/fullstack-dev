import * as z from 'zod';
export const CategoryAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    numSeq: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    published: z.number(),
    isPublic: z.number(),
    isDeleted: z.number(),
    isDeletedDT: z.number(),
    orderCategory: z.number(),
    name: z.number(),
    Posts: z.number()
  }).optional(),
  _sum: z.object({
    numSeq: z.number().nullable(),
    isDeleted: z.number().nullable(),
    orderCategory: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    numSeq: z.number().nullable(),
    isDeleted: z.number().nullable(),
    orderCategory: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    numSeq: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    isDeleted: z.number().int().nullable(),
    isDeletedDT: z.date().nullable(),
    orderCategory: z.number().int().nullable(),
    name: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    numSeq: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    isDeleted: z.number().int().nullable(),
    isDeletedDT: z.date().nullable(),
    orderCategory: z.number().int().nullable(),
    name: z.string().nullable()
  }).nullable().optional()});