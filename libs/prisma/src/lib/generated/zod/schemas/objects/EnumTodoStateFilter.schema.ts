import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TodoStateSchema } from '../enums/TodoState.schema';
import { NestedEnumTodoStateFilterObjectSchema as NestedEnumTodoStateFilterObjectSchema } from './NestedEnumTodoStateFilter.schema'

const makeSchema = () => z.object({
  equals: TodoStateSchema.optional(),
  in: TodoStateSchema.array().optional(),
  notIn: TodoStateSchema.array().optional(),
  not: z.union([TodoStateSchema, z.lazy(() => NestedEnumTodoStateFilterObjectSchema)]).optional()
}).strict();
export const EnumTodoStateFilterObjectSchema: z.ZodType<Prisma.EnumTodoStateFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumTodoStateFilter>;
export const EnumTodoStateFilterObjectZodSchema = makeSchema();
