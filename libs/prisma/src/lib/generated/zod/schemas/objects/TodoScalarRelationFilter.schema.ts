import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TodoWhereInputObjectSchema as TodoWhereInputObjectSchema } from './TodoWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => TodoWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => TodoWhereInputObjectSchema).optional()
}).strict();
export const TodoScalarRelationFilterObjectSchema: z.ZodType<Prisma.TodoScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TodoScalarRelationFilter>;
export const TodoScalarRelationFilterObjectZodSchema = makeSchema();
