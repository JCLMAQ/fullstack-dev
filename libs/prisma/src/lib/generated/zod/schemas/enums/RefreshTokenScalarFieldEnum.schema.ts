import * as z from 'zod';

export const RefreshTokenScalarFieldEnumSchema = z.enum(['id', 'createdAt', 'updatedAt', 'published', 'isPublic', 'isDeleted', 'isDeletedDT', 'userId', 'tokenId'])

export type RefreshTokenScalarFieldEnum = z.infer<typeof RefreshTokenScalarFieldEnumSchema>;