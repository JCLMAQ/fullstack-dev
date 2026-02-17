import * as z from 'zod';

export const GroupScalarFieldEnumSchema = z.enum(['id', 'createdAt', 'updatedAt', 'published', 'isPublic', 'isDeleted', 'isDeletedDT', 'orderGroup', 'name', 'description', 'ownerId', 'isActiv', 'orgId'])

export type GroupScalarFieldEnum = z.infer<typeof GroupScalarFieldEnumSchema>;