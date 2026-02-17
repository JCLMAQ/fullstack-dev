import * as z from 'zod';
export const ChangesTrackingAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    published: z.number(),
    isPublic: z.number(),
    isDeleted: z.number(),
    isDeletedDT: z.number(),
    doneAt: z.number(),
    modifiedBy: z.number(),
    modifiedById: z.number(),
    modelName: z.number(),
    recordId: z.number(),
    operation: z.number(),
    newData: z.number(),
    oldData: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    isDeleted: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    isDeleted: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    isDeleted: z.number().int().nullable(),
    isDeletedDT: z.date().nullable(),
    doneAt: z.date().nullable(),
    modifiedById: z.string().nullable(),
    modelName: z.string().nullable(),
    recordId: z.string().nullable(),
    operation: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    isDeleted: z.number().int().nullable(),
    isDeletedDT: z.date().nullable(),
    doneAt: z.date().nullable(),
    modifiedById: z.string().nullable(),
    modelName: z.string().nullable(),
    recordId: z.string().nullable(),
    operation: z.string().nullable()
  }).nullable().optional()});