import * as z from 'zod';

export const AccountValidationScalarFieldEnumSchema = z.enum(['id', 'numSeq', 'createdAt', 'updatedAt', 'published', 'isPublic', 'isDeleted', 'isDeletedDT', 'isValidated', 'emailToken', 'timeStamp'])

export type AccountValidationScalarFieldEnum = z.infer<typeof AccountValidationScalarFieldEnumSchema>;