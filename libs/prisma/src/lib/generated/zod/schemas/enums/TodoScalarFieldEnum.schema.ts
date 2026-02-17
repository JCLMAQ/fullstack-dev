import * as z from 'zod';

export const TodoScalarFieldEnumSchema = z.enum(['id', 'numSeq', 'createdAt', 'updatedAt', 'published', 'isDeleted', 'isDeletedDT', 'isPublic', 'ownerId', 'orgId', 'orderTodo', 'title', 'content', 'todoState', 'mainTodoId'])

export type TodoScalarFieldEnum = z.infer<typeof TodoScalarFieldEnumSchema>;