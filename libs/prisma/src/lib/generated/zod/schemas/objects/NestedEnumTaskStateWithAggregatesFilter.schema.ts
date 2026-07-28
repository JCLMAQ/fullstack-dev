import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TaskStateSchema } from '../enums/TaskState.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumTaskStateFilterObjectSchema as NestedEnumTaskStateFilterObjectSchema } from './NestedEnumTaskStateFilter.schema'

const nestedenumtaskstatewithaggregatesfilterSchema = z.object({
  equals: TaskStateSchema.optional(),
  in: TaskStateSchema.array().optional(),
  notIn: TaskStateSchema.array().optional(),
  not: z.union([TaskStateSchema, z.lazy(() => NestedEnumTaskStateWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumTaskStateFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumTaskStateFilterObjectSchema).optional()
}).strict();
export const NestedEnumTaskStateWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumTaskStateWithAggregatesFilter> = nestedenumtaskstatewithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumTaskStateWithAggregatesFilter>;
export const NestedEnumTaskStateWithAggregatesFilterObjectZodSchema = nestedenumtaskstatewithaggregatesfilterSchema;
