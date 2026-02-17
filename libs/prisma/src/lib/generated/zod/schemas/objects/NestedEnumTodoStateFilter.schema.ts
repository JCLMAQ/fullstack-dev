import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TodoStateSchema } from '../enums/TodoState.schema'

const nestedenumtodostatefilterSchema = z.object({
  equals: TodoStateSchema.optional(),
  in: TodoStateSchema.array().optional(),
  notIn: TodoStateSchema.array().optional(),
  not: z.union([TodoStateSchema, z.lazy(() => NestedEnumTodoStateFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumTodoStateFilterObjectSchema: z.ZodType<Prisma.NestedEnumTodoStateFilter> = nestedenumtodostatefilterSchema as unknown as z.ZodType<Prisma.NestedEnumTodoStateFilter>;
export const NestedEnumTodoStateFilterObjectZodSchema = nestedenumtodostatefilterSchema;
