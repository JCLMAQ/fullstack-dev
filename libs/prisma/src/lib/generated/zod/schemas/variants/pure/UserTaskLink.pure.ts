import * as z from 'zod';
// prettier-ignore
export const UserTaskLinkModelSchema = z.object({
    user: z.unknown(),
    userId: z.string(),
    task: z.unknown(),
    taskId: z.string(),
    isAuthor: z.boolean(),
    isAssigned: z.boolean(),
    createdAt: z.date(),
    updatedAt: z.date(),
    comment: z.string()
}).strict();

export type UserTaskLinkPureType = z.infer<typeof UserTaskLinkModelSchema>;
