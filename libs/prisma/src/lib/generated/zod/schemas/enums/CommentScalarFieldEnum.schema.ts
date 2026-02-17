import * as z from 'zod';

export const CommentScalarFieldEnumSchema = z.enum(['id', 'numSeq', 'createdAt', 'updatedAt', 'published', 'isPublic', 'isDeleted', 'isDeletedDT', 'orderComment', 'content', 'postId', 'authorId'])

export type CommentScalarFieldEnum = z.infer<typeof CommentScalarFieldEnumSchema>;