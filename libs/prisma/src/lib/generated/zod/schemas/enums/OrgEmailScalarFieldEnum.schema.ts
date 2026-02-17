import * as z from 'zod';

export const OrgEmailScalarFieldEnumSchema = z.enum(['id', 'createdAt', 'updatedAt', 'published', 'isPublic', 'isDeleted', 'isDeletedDT', 'email', 'description', 'orgId'])

export type OrgEmailScalarFieldEnum = z.infer<typeof OrgEmailScalarFieldEnumSchema>;