import * as z from 'zod';

export const TodoStateSchema = z.enum(['CREATION', 'STANDBY', 'RUNNING', 'DONE'])

export type TodoState = z.infer<typeof TodoStateSchema>;