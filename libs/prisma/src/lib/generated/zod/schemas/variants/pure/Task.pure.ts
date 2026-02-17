import * as z from 'zod';
import { TaskStateSchema } from '../../enums/TaskState.schema';
// prettier-ignore
export const TaskModelSchema = z.object({
    id: z.string(),
    numSeq: z.number().int(),
    createdAt: z.date(),
    updatedAt: z.date(),
    published: z.boolean(),
    isDeleted: z.number().int(),
    isDeletedDT: z.date().nullable(),
    isPublic: z.boolean(),
    owner: z.unknown(),
    ownerId: z.string(),
    org: z.unknown().nullable(),
    orgId: z.string().nullable(),
    groups: z.array(z.unknown()),
    orderTask: z.number().int(),
    title: z.string(),
    content: z.string().nullable(),
    taskState: TaskStateSchema,
    mainTask: z.unknown().nullable(),
    mainTaskId: z.string().nullable(),
    SubTasks: z.array(z.unknown()),
    Users: z.array(z.unknown()),
    todo: z.unknown().nullable(),
    todoId: z.string().nullable(),
    Tags: z.array(z.unknown())
}).strict();

export type TaskPureType = z.infer<typeof TaskModelSchema>;
