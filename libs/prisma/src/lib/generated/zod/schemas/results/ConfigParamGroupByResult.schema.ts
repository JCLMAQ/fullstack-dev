import * as z from 'zod';
export const ConfigParamGroupByResultSchema = z.array(z.object({
  id: z.number().int().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  published: z.boolean().optional(),
  isPublic: z.boolean().optional(),
  isDeleted: z.number().int().optional(),
  isDeletedDT: z.date().nullable().optional(),
  name: z.string().optional(),
  value: z.string().optional(),
  utility: z.string().optional(),
  _count: z.union([z.number(), z.object({
    id: z.number().optional(),
    createdAt: z.number().optional(),
    updatedAt: z.number().optional(),
    published: z.number().optional(),
    isPublic: z.number().optional(),
    isDeleted: z.number().optional(),
    isDeletedDT: z.number().optional(),
    name: z.number().optional(),
    value: z.number().optional(),
    utility: z.number().optional(),
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
    name: z.string().nullable().optional(),
    value: z.string().nullable().optional(),
    utility: z.string().nullable().optional()
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
    value: z.string().nullable().optional(),
    utility: z.string().nullable().optional()
  }).nullable().optional()
}));