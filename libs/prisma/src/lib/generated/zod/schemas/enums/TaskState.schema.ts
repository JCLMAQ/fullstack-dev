import * as z from 'zod';

export const TaskStateSchema = z.enum(['CREATION', 'STANDBY', 'RUNNING', 'DONE'])

export type TaskState = z.infer<typeof TaskStateSchema>;