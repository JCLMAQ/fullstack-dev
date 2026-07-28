import * as z from 'zod';
export const ChangesTrackingFindFirstResultSchema = z.nullable(z.object({
  id: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
  published: z.boolean(),
  isPublic: z.boolean(),
  isDeleted: z.number().int(),
  isDeletedDT: z.date().optional(),
  doneAt: z.date(),
  modifiedBy: z.unknown().optional(),
  modifiedById: z.string(),
  modelName: z.string(),
  recordId: z.string(),
  operation: z.string(),
  newData: z.unknown(),
  oldData: z.unknown()
}));