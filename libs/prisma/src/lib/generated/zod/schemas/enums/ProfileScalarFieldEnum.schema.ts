import * as z from 'zod';

export const ProfileScalarFieldEnumSchema = z.enum(['id', 'createdAt', 'updatedAt', 'published', 'isPublic', 'isDeleted', 'isDeletedDT', 'orderProfile', 'bio'])

export type ProfileScalarFieldEnum = z.infer<typeof ProfileScalarFieldEnumSchema>;