import * as z from 'zod';

export const StoryScalarFieldEnumSchema = z.enum(['id', 'numSeq', 'createdAt', 'updatedAt', 'published', 'isPublic', 'isDeleted', 'isDeletedDT', 'caption', 'user_id'])

export type StoryScalarFieldEnum = z.infer<typeof StoryScalarFieldEnumSchema>;