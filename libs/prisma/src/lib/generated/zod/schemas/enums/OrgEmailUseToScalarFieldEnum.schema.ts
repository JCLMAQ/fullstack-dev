import * as z from 'zod';

export const OrgEmailUseToScalarFieldEnumSchema = z.enum(['id', 'createdAt', 'updatedAt', 'published', 'isPublic', 'isDeleted', 'isDeletedDT', 'useTo', 'isActiv', 'emailOrgId'])

export type OrgEmailUseToScalarFieldEnum = z.infer<typeof OrgEmailUseToScalarFieldEnumSchema>;