import * as z from 'zod';
// prettier-ignore
export const AccountValidationInputSchema = z.object({
    id: z.string(),
    numSeq: z.number().int(),
    createdAt: z.date(),
    updatedAt: z.date(),
    published: z.boolean().optional().nullable(),
    isPublic: z.boolean().optional().nullable(),
    isDeleted: z.number().int().optional().nullable(),
    isDeletedDT: z.date().optional().nullable(),
    isValidated: z.boolean(),
    emailToken: z.string(),
    timeStamp: z.date()
}).strict();

export type AccountValidationInputType = z.infer<typeof AccountValidationInputSchema>;
