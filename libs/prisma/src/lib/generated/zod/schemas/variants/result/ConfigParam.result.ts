import * as z from 'zod';
// prettier-ignore
export const ConfigParamResultSchema = z.object({
    id: z.number().int(),
    createdAt: z.date(),
    updatedAt: z.date(),
    published: z.boolean(),
    isPublic: z.boolean(),
    isDeleted: z.number().int(),
    isDeletedDT: z.date().nullable(),
    name: z.string(),
    value: z.string(),
    utility: z.string()
}).strict();

export type ConfigParamResultType = z.infer<typeof ConfigParamResultSchema>;
