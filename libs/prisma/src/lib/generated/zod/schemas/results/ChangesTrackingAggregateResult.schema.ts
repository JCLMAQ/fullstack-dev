import * as z from 'zod';
export const ChangesTrackingAggregateResultSchema = z.object({  _count: z.union([z.number(), z.object({
    id: z.number().optional(),
    createdAt: z.number().optional(),
    updatedAt: z.number().optional(),
    published: z.number().optional(),
    isPublic: z.number().optional(),
    isDeleted: z.number().optional(),
    isDeletedDT: z.number().optional(),
    doneAt: z.number().optional(),
    modifiedById: z.number().optional(),
    modelName: z.number().optional(),
    recordId: z.number().optional(),
    operation: z.number().optional(),
    newData: z.number().optional(),
    oldData: z.number().optional(),
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
    doneAt: z.date().nullable().optional(),
    modifiedById: z.string().nullable().optional(),
    modelName: z.string().nullable().optional(),
    recordId: z.string().nullable().optional(),
    operation: z.string().nullable().optional()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable().optional(),
    createdAt: z.date().nullable().optional(),
    updatedAt: z.date().nullable().optional(),
    published: z.boolean().nullable().optional(),
    isPublic: z.boolean().nullable().optional(),
    isDeleted: z.number().int().nullable().optional(),
    isDeletedDT: z.date().nullable().optional(),
    doneAt: z.date().nullable().optional(),
    modifiedById: z.string().nullable().optional(),
    modelName: z.string().nullable().optional(),
    recordId: z.string().nullable().optional(),
    operation: z.string().nullable().optional()
  }).nullable().optional()});