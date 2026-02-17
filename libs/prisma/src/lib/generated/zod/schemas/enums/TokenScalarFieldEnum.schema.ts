import * as z from 'zod';

export const TokenScalarFieldEnumSchema = z.enum(['id', 'createdAt', 'updatedAt', 'published', 'isPublic', 'isDeleted', 'isDeletedDT', 'tokenId', 'type', 'emailToken', 'valid', 'expiration', 'userId'])

export type TokenScalarFieldEnum = z.infer<typeof TokenScalarFieldEnumSchema>;