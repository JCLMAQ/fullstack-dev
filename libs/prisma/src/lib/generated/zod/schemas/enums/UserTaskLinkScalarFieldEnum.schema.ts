import * as z from 'zod';

export const UserTaskLinkScalarFieldEnumSchema = z.enum(['userId', 'taskId', 'isAuthor', 'isAssigned', 'createdAt', 'updatedAt', 'comment'])

export type UserTaskLinkScalarFieldEnum = z.infer<typeof UserTaskLinkScalarFieldEnumSchema>;