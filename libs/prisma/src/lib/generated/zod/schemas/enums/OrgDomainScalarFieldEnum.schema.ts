import * as z from 'zod';

export const OrgDomainScalarFieldEnumSchema = z.enum(['id', 'createdAt', 'updatedAt', 'published', 'isPublic', 'isDeleted', 'isDeletedDT', 'domainName', 'extension', 'orgId'])

export type OrgDomainScalarFieldEnum = z.infer<typeof OrgDomainScalarFieldEnumSchema>;