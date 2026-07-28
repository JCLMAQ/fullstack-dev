import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { TodoScalarRelationFilterObjectSchema as TodoScalarRelationFilterObjectSchema } from './TodoScalarRelationFilter.schema';
import { TodoWhereInputObjectSchema as TodoWhereInputObjectSchema } from './TodoWhereInput.schema'

const usertodolinkwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => UserTodoLinkWhereInputObjectSchema), z.lazy(() => UserTodoLinkWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => UserTodoLinkWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => UserTodoLinkWhereInputObjectSchema), z.lazy(() => UserTodoLinkWhereInputObjectSchema).array()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  todoId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  isAuthor: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  isAssigned: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  comment: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  user: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  todo: z.union([z.lazy(() => TodoScalarRelationFilterObjectSchema), z.lazy(() => TodoWhereInputObjectSchema)]).optional()
}).strict();
export const UserTodoLinkWhereInputObjectSchema: z.ZodType<Prisma.UserTodoLinkWhereInput> = usertodolinkwhereinputSchema as unknown as z.ZodType<Prisma.UserTodoLinkWhereInput>;
export const UserTodoLinkWhereInputObjectZodSchema = usertodolinkwhereinputSchema;
