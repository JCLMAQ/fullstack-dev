import * as z from 'zod';

export const PostScalarFieldEnumSchema = z.enum(['id', 'numSeq', 'createdAt', 'updatedAt', 'published', 'isDeleted', 'isDeletedDT', 'isPublic', 'ownerId', 'orgId', 'orderPost', 'title', 'content'])

export type PostScalarFieldEnum = z.infer<typeof PostScalarFieldEnumSchema>;