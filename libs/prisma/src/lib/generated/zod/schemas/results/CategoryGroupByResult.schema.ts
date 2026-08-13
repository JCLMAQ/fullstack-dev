import * as z from 'zod';
export const CategoryGroupByResultSchema = z.array(z.object({
  id: z.string().optional(),
  numSeq: z.number().int().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  published: z.boolean().nullable().optional(),
  isPublic: z.boolean().nullable().optional(),
  isDeleted: z.number().int().nullable().optional(),
  isDeletedDT: z.date().nullable().optional(),
  orderCategory: z.number().int().optional(),
  name: z.string().optional(),
  _count: z.union([z.number(), z.object({
    id: z.number().optional(),
    numSeq: z.number().optional(),
    createdAt: z.number().optional(),
    updatedAt: z.number().optional(),
    published: z.number().optional(),
    isPublic: z.number().optional(),
    isDeleted: z.number().optional(),
    isDeletedDT: z.number().optional(),
    orderCategory: z.number().optional(),
    name: z.number().optional(),
    _all: z.number().optional()
  })]).optional(),
  _sum: z.object({
    numSeq: z.number().nullable().optional(),
    isDeleted: z.number().nullable().optional(),
    orderCategory: z.number().nullable().optional()
  }).nullable().optional(),
  _avg: z.object({
    numSeq: z.number().nullable().optional(),
    isDeleted: z.number().nullable().optional(),
    orderCategory: z.number().nullable().optional()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable().optional(),
    numSeq: z.number().int().nullable().optional(),
    createdAt: z.date().nullable().optional(),
    updatedAt: z.date().nullable().optional(),
    published: z.boolean().nullable().optional(),
    isPublic: z.boolean().nullable().optional(),
    isDeleted: z.number().int().nullable().optional(),
    isDeletedDT: z.date().nullable().optional(),
    orderCategory: z.number().int().nullable().optional(),
    name: z.string().nullable().optional()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable().optional(),
    numSeq: z.number().int().nullable().optional(),
    createdAt: z.date().nullable().optional(),
    updatedAt: z.date().nullable().optional(),
    published: z.boolean().nullable().optional(),
    isPublic: z.boolean().nullable().optional(),
    isDeleted: z.number().int().nullable().optional(),
    isDeletedDT: z.date().nullable().optional(),
    orderCategory: z.number().int().nullable().optional(),
    name: z.string().nullable().optional()
  }).nullable().optional()
}));