import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TaskStateSchema } from '../enums/TaskState.schema'

const nestedenumtaskstatefilterSchema = z.object({
  equals: TaskStateSchema.optional(),
  in: TaskStateSchema.array().optional(),
  notIn: TaskStateSchema.array().optional(),
  not: z.union([TaskStateSchema, z.lazy(() => NestedEnumTaskStateFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumTaskStateFilterObjectSchema: z.ZodType<Prisma.NestedEnumTaskStateFilter> = nestedenumtaskstatefilterSchema as unknown as z.ZodType<Prisma.NestedEnumTaskStateFilter>;
export const NestedEnumTaskStateFilterObjectZodSchema = nestedenumtaskstatefilterSchema;
