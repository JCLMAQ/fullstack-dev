import * as z from 'zod';
// prettier-ignore
export const AccountValidationModelSchema = z.object({
    id: z.string(),
    numSeq: z.number().int(),
    createdAt: z.date(),
    updatedAt: z.date(),
    published: z.boolean().nullable(),
    isPublic: z.boolean().nullable(),
    isDeleted: z.number().int().nullable(),
    isDeletedDT: z.date().nullable(),
    isValidated: z.boolean(),
    emailToken: z.string(),
    timeStamp: z.date()
}).strict();

export type AccountValidationPureType = z.infer<typeof AccountValidationModelSchema>;
