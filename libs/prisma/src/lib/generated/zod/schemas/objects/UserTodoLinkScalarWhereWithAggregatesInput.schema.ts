import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema as BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const usertodolinkscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => UserTodoLinkScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => UserTodoLinkScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => UserTodoLinkScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => UserTodoLinkScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => UserTodoLinkScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  userId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  todoId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  isAuthor: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  isAssigned: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  comment: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
export const UserTodoLinkScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.UserTodoLinkScalarWhereWithAggregatesInput> = usertodolinkscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.UserTodoLinkScalarWhereWithAggregatesInput>;
export const UserTodoLinkScalarWhereWithAggregatesInputObjectZodSchema = usertodolinkscalarwherewithaggregatesinputSchema;
