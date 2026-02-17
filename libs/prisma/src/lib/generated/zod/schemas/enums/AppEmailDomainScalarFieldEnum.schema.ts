import * as z from 'zod';

export const AppEmailDomainScalarFieldEnumSchema = z.enum(['id', 'createdAt', 'updatedAt', 'published', 'isPublic', 'isDeleted', 'isDeletedDT', 'domain', 'allowed'])

export type AppEmailDomainScalarFieldEnum = z.infer<typeof AppEmailDomainScalarFieldEnumSchema>;