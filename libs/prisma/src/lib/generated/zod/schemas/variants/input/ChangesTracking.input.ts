import * as z from 'zod';
// prettier-ignore
export const ChangesTrackingInputSchema = z.object({
    id: z.number().int(),
    createdAt: z.date(),
    updatedAt: z.date(),
    published: z.boolean(),
    isPublic: z.boolean(),
    isDeleted: z.number().int(),
    isDeletedDT: z.date().optional().nullable(),
    doneAt: z.date(),
    modifiedBy: z.unknown(),
    modifiedById: z.string(),
    modelName: z.string(),
    recordId: z.string(),
    operation: z.string(),
    newData: z.unknown(),
    oldData: z.unknown()
}).strict();

export type ChangesTrackingInputType = z.infer<typeof ChangesTrackingInputSchema>;
