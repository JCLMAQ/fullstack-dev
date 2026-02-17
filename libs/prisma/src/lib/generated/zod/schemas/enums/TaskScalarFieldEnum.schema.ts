import * as z from 'zod';

export const TaskScalarFieldEnumSchema = z.enum(['id', 'numSeq', 'createdAt', 'updatedAt', 'published', 'isDeleted', 'isDeletedDT', 'isPublic', 'ownerId', 'orgId', 'orderTask', 'title', 'content', 'taskState', 'mainTaskId', 'todoId'])

export type TaskScalarFieldEnum = z.infer<typeof TaskScalarFieldEnumSchema>;