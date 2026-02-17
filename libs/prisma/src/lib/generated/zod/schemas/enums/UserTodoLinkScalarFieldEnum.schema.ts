import * as z from 'zod';

export const UserTodoLinkScalarFieldEnumSchema = z.enum(['userId', 'todoId', 'isAuthor', 'isAssigned', 'createdAt', 'updatedAt', 'comment'])

export type UserTodoLinkScalarFieldEnum = z.infer<typeof UserTodoLinkScalarFieldEnumSchema>;