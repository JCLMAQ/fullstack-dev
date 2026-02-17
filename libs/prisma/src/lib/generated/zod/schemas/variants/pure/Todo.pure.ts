import * as z from 'zod';
import { TodoStateSchema } from '../../enums/TodoState.schema';
// prettier-ignore
export const TodoModelSchema = z.object({
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
    orderTodo: z.number().int(),
    title: z.string(),
    content: z.string().nullable(),
    todoState: TodoStateSchema,
    mainTodo: z.unknown().nullable(),
    mainTodoId: z.string().nullable(),
    SubTodos: z.array(z.unknown()),
    Users: z.array(z.unknown()),
    Tasks: z.array(z.unknown()),
    Tags: z.array(z.unknown())
}).strict();

export type TodoPureType = z.infer<typeof TodoModelSchema>;
