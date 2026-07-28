import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { EnumTodoStateFilterObjectSchema as EnumTodoStateFilterObjectSchema } from './EnumTodoStateFilter.schema';
import { TodoStateSchema } from '../enums/TodoState.schema'

const todoscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => TodoScalarWhereInputObjectSchema), z.lazy(() => TodoScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TodoScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TodoScalarWhereInputObjectSchema), z.lazy(() => TodoScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  numSeq: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  published: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  isDeleted: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  isDeletedDT: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  isPublic: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  ownerId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  orgId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  orderTodo: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  title: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  content: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  todoState: z.union([z.lazy(() => EnumTodoStateFilterObjectSchema), TodoStateSchema]).optional(),
  mainTodoId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable()
}).strict();
export const TodoScalarWhereInputObjectSchema: z.ZodType<Prisma.TodoScalarWhereInput> = todoscalarwhereinputSchema as unknown as z.ZodType<Prisma.TodoScalarWhereInput>;
export const TodoScalarWhereInputObjectZodSchema = todoscalarwhereinputSchema;
