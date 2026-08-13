import * as z from 'zod';
export const ChangesTrackingFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
  published: z.boolean(),
  isPublic: z.boolean(),
  isDeleted: z.number().int(),
  isDeletedDT: z.date().nullable().optional(),
  doneAt: z.date(),
  modifiedBy: z.unknown().optional(),
  modifiedById: z.string(),
  modelName: z.string(),
  recordId: z.string(),
  operation: z.string(),
  newData: z.unknown(),
  oldData: z.unknown()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});