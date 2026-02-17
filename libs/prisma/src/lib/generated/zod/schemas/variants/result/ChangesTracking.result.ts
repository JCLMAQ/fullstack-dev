import * as z from 'zod';
// prettier-ignore
export const ChangesTrackingResultSchema = z.object({
    id: z.number().int(),
    createdAt: z.date(),
    updatedAt: z.date(),
    published: z.boolean(),
    isPublic: z.boolean(),
    isDeleted: z.number().int(),
    isDeletedDT: z.date().nullable(),
    doneAt: z.date(),
    modifiedBy: z.unknown(),
    modifiedById: z.string(),
    modelName: z.string(),
    recordId: z.string(),
    operation: z.string(),
    newData: z.unknown(),
    oldData: z.unknown()
}).strict();

export type ChangesTrackingResultType = z.infer<typeof ChangesTrackingResultSchema>;
