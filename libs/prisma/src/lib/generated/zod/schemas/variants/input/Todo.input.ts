import * as z from 'zod';
import { TodoStateSchema } from '../../enums/TodoState.schema';
// prettier-ignore
export const TodoInputSchema = z.object({
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
    orderTodo: z.number().int(),
    title: z.string(),
    content: z.string().optional().nullable(),
    todoState: TodoStateSchema,
    mainTodo: z.unknown().optional().nullable(),
    mainTodoId: z.string().optional().nullable(),
    SubTodos: z.array(z.unknown()),
    Users: z.array(z.unknown()),
    Tasks: z.array(z.unknown()),
    Tags: z.array(z.unknown())
}).strict();

export type TodoInputType = z.infer<typeof TodoInputSchema>;
