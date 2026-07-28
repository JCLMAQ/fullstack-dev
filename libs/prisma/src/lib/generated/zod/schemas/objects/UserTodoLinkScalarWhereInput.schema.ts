import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const usertodolinkscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => UserTodoLinkScalarWhereInputObjectSchema), z.lazy(() => UserTodoLinkScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => UserTodoLinkScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => UserTodoLinkScalarWhereInputObjectSchema), z.lazy(() => UserTodoLinkScalarWhereInputObjectSchema).array()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  todoId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  isAuthor: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  isAssigned: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  comment: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional()
}).strict();
export const UserTodoLinkScalarWhereInputObjectSchema: z.ZodType<Prisma.UserTodoLinkScalarWhereInput> = usertodolinkscalarwhereinputSchema as unknown as z.ZodType<Prisma.UserTodoLinkScalarWhereInput>;
export const UserTodoLinkScalarWhereInputObjectZodSchema = usertodolinkscalarwhereinputSchema;
