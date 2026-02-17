import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TodoStateSchema } from '../enums/TodoState.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumTodoStateFilterObjectSchema as NestedEnumTodoStateFilterObjectSchema } from './NestedEnumTodoStateFilter.schema'

const nestedenumtodostatewithaggregatesfilterSchema = z.object({
  equals: TodoStateSchema.optional(),
  in: TodoStateSchema.array().optional(),
  notIn: TodoStateSchema.array().optional(),
  not: z.union([TodoStateSchema, z.lazy(() => NestedEnumTodoStateWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumTodoStateFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumTodoStateFilterObjectSchema).optional()
}).strict();
export const NestedEnumTodoStateWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumTodoStateWithAggregatesFilter> = nestedenumtodostatewithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumTodoStateWithAggregatesFilter>;
export const NestedEnumTodoStateWithAggregatesFilterObjectZodSchema = nestedenumtodostatewithaggregatesfilterSchema;
