import * as z from 'zod';
import { TaskStateSchema } from '../../enums/TaskState.schema';
// prettier-ignore
export const TaskInputSchema = z.object({
    id: z.string(),
    numSeq: z.number().int(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
    published: z.boolean(),
    isDeleted: z.number().int(),
    isDeletedDT: z.coerce.date().optional().nullable(),
    isPublic: z.boolean(),
    owner: z.unknown(),
    ownerId: z.string(),
    org: z.unknown().optional().nullable(),
    orgId: z.string().optional().nullable(),
    groups: z.array(z.unknown()),
    orderTask: z.number().int(),
    title: z.string(),
    content: z.string().optional().nullable(),
    taskState: TaskStateSchema,
    mainTask: z.unknown().optional().nullable(),
    mainTaskId: z.string().optional().nullable(),
    SubTasks: z.array(z.unknown()),
    Users: z.array(z.unknown()),
    todo: z.unknown().optional().nullable(),
    todoId: z.string().optional().nullable(),
    Tags: z.array(z.unknown())
}).strict();

export type TaskInputType = z.infer<typeof TaskInputSchema>;
