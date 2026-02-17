import * as z from 'zod';

export const ApiKeyScalarFieldEnumSchema = z.enum(['id', 'createdAt', 'updatedAt', 'published', 'isPublic', 'isDeleted', 'isDeletedDT', 'key', 'uuid', 'userId'])

export type ApiKeyScalarFieldEnum = z.infer<typeof ApiKeyScalarFieldEnumSchema>;