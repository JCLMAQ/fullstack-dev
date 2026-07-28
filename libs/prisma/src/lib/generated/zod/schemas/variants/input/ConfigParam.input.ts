import * as z from 'zod';
// prettier-ignore
export const ConfigParamInputSchema = z.object({
    id: z.number().int(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
    published: z.boolean(),
    isPublic: z.boolean(),
    isDeleted: z.number().int(),
    isDeletedDT: z.coerce.date().optional().nullable(),
    name: z.string(),
    value: z.string(),
    utility: z.string()
}).strict();

export type ConfigParamInputType = z.infer<typeof ConfigParamInputSchema>;
