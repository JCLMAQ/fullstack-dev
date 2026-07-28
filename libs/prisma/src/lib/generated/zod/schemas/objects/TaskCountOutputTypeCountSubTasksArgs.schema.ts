import * as z from 'zod';
import { TaskWhereInputObjectSchema as TaskWhereInputObjectSchema } from './TaskWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TaskWhereInputObjectSchema).optional()
}).strict();
export const TaskCountOutputTypeCountSubTasksArgsObjectSchema = makeSchema();
export const TaskCountOutputTypeCountSubTasksArgsObjectZodSchema = makeSchema();
