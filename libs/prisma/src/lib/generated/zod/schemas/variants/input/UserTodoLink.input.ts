import * as z from 'zod';
// prettier-ignore
export const UserTodoLinkInputSchema = z.object({
    user: z.unknown(),
    userId: z.string(),
    todo: z.unknown(),
    todoId: z.string(),
    isAuthor: z.boolean(),
    isAssigned: z.boolean(),
    createdAt: z.date(),
    updatedAt: z.date(),
    comment: z.string()
}).strict();

export type UserTodoLinkInputType = z.infer<typeof UserTodoLinkInputSchema>;
