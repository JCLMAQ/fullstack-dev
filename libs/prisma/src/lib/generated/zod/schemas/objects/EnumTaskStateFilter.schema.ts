import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TaskStateSchema } from '../enums/TaskState.schema';
import { NestedEnumTaskStateFilterObjectSchema as NestedEnumTaskStateFilterObjectSchema } from './NestedEnumTaskStateFilter.schema'

const makeSchema = () => z.object({
  equals: TaskStateSchema.optional(),
  in: TaskStateSchema.array().optional(),
  notIn: TaskStateSchema.array().optional(),
  not: z.union([TaskStateSchema, z.lazy(() => NestedEnumTaskStateFilterObjectSchema)]).optional()
}).strict();
export const EnumTaskStateFilterObjectSchema: z.ZodType<Prisma.EnumTaskStateFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumTaskStateFilter>;
export const EnumTaskStateFilterObjectZodSchema = makeSchema();
