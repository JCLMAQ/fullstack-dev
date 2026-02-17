import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TodoWhereInputObjectSchema as TodoWhereInputObjectSchema } from './TodoWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TodoWhereInputObjectSchema).optional()
}).strict();
export const GroupCountOutputTypeCountTodosArgsObjectSchema = makeSchema();
export const GroupCountOutputTypeCountTodosArgsObjectZodSchema = makeSchema();
