import * as z from 'zod';

export const TagValueScalarFieldEnumSchema = z.enum(['id', 'createdAt', 'updatedAt', 'published', 'isPublic', 'isDeleted', 'isDeletedDT', 'name', 'position', 'color', 'tagCategoriesId', 'mainTagId'])

export type TagValueScalarFieldEnum = z.infer<typeof TagValueScalarFieldEnumSchema>;