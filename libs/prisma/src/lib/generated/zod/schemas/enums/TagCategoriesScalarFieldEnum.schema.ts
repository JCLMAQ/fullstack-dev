import * as z from 'zod';

export const TagCategoriesScalarFieldEnumSchema = z.enum(['id', 'createdAt', 'updatedAt', 'published', 'isPublic', 'isDeleted', 'isDeletedDT', 'modelName', 'description', 'recordId'])

export type TagCategoriesScalarFieldEnum = z.infer<typeof TagCategoriesScalarFieldEnumSchema>;