import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TodoStateSchema } from '../enums/TodoState.schema';
import { NestedEnumTodoStateWithAggregatesFilterObjectSchema as NestedEnumTodoStateWithAggregatesFilterObjectSchema } from './NestedEnumTodoStateWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumTodoStateFilterObjectSchema as NestedEnumTodoStateFilterObjectSchema } from './NestedEnumTodoStateFilter.schema'

const makeSchema = () => z.object({
  equals: TodoStateSchema.optional(),
  in: TodoStateSchema.array().optional(),
  notIn: TodoStateSchema.array().optional(),
  not: z.union([TodoStateSchema, z.lazy(() => NestedEnumTodoStateWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumTodoStateFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumTodoStateFilterObjectSchema).optional()
}).strict();
export const EnumTodoStateWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumTodoStateWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumTodoStateWithAggregatesFilter>;
export const EnumTodoStateWithAggregatesFilterObjectZodSchema = makeSchema();
