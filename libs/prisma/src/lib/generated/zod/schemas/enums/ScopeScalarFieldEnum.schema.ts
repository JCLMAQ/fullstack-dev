import * as z from 'zod';

export const ScopeScalarFieldEnumSchema = z.enum(['id', 'createdAt', 'updatedAt', 'published', 'isPublic', 'isDeleted', 'isDeletedDT', 'scope'])

export type ScopeScalarFieldEnum = z.infer<typeof ScopeScalarFieldEnumSchema>;