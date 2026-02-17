import * as z from 'zod';

export const WordScalarFieldEnumSchema = z.enum(['id', 'createdAt', 'updatedAt', 'published', 'isPublic', 'isDeleted', 'isDeletedDT', 'slug', 'type'])

export type WordScalarFieldEnum = z.infer<typeof WordScalarFieldEnumSchema>;