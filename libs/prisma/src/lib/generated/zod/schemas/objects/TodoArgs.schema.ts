import * as z from 'zod';
import { TodoSelectObjectSchema as TodoSelectObjectSchema } from './TodoSelect.schema';
import { TodoIncludeObjectSchema as TodoIncludeObjectSchema } from './TodoInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => TodoSelectObjectSchema).optional(),
  include: z.lazy(() => TodoIncludeObjectSchema).optional()
}).strict();
export const TodoArgsObjectSchema = makeSchema();
export const TodoArgsObjectZodSchema = makeSchema();
