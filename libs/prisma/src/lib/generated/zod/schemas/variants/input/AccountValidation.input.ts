import * as z from 'zod';
// prettier-ignore
export const AccountValidationInputSchema = z.object({
    id: z.string(),
    numSeq: z.number().int(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
    published: z.boolean().optional().nullable(),
    isPublic: z.boolean().optional().nullable(),
    isDeleted: z.number().int().optional().nullable(),
    isDeletedDT: z.coerce.date().optional().nullable(),
    isValidated: z.boolean(),
    emailToken: z.string(),
    timeStamp: z.coerce.date()
}).strict();

export type AccountValidationInputType = z.infer<typeof AccountValidationInputSchema>;
