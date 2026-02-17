import * as z from 'zod';

export const OrganizationScalarFieldEnumSchema = z.enum(['id', 'numSeq', 'createdAt', 'updatedAt', 'published', 'isPublic', 'isDeleted', 'isDeletedDT', 'name', 'description', 'address', 'emailITAdmin', 'webSite', 'mainOrgId'])

export type OrganizationScalarFieldEnum = z.infer<typeof OrganizationScalarFieldEnumSchema>;