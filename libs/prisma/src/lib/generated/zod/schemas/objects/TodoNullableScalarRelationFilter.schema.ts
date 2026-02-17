import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TodoWhereInputObjectSchema as TodoWhereInputObjectSchema } from './TodoWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => TodoWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => TodoWhereInputObjectSchema).optional().nullable()
}).strict();
export const TodoNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.TodoNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TodoNullableScalarRelationFilter>;
export const TodoNullableScalarRelationFilterObjectZodSchema = makeSchema();
