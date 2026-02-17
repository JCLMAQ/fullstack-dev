import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TodoCountOutputTypeSelectObjectSchema as TodoCountOutputTypeSelectObjectSchema } from './TodoCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => TodoCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const TodoCountOutputTypeArgsObjectSchema = makeSchema();
export const TodoCountOutputTypeArgsObjectZodSchema = makeSchema();
