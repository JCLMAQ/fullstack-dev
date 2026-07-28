import * as z from 'zod';
import { TodoWhereInputObjectSchema as TodoWhereInputObjectSchema } from './TodoWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TodoWhereInputObjectSchema).optional()
}).strict();
export const TodoCountOutputTypeCountSubTodosArgsObjectSchema = makeSchema();
export const TodoCountOutputTypeCountSubTodosArgsObjectZodSchema = makeSchema();
