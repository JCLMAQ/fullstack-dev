import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { TaskScalarRelationFilterObjectSchema as TaskScalarRelationFilterObjectSchema } from './TaskScalarRelationFilter.schema';
import { TaskWhereInputObjectSchema as TaskWhereInputObjectSchema } from './TaskWhereInput.schema'

const usertasklinkwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => UserTaskLinkWhereInputObjectSchema), z.lazy(() => UserTaskLinkWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => UserTaskLinkWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => UserTaskLinkWhereInputObjectSchema), z.lazy(() => UserTaskLinkWhereInputObjectSchema).array()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  taskId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  isAuthor: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  isAssigned: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  comment: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  user: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  task: z.union([z.lazy(() => TaskScalarRelationFilterObjectSchema), z.lazy(() => TaskWhereInputObjectSchema)]).optional()
}).strict();
export const UserTaskLinkWhereInputObjectSchema: z.ZodType<Prisma.UserTaskLinkWhereInput> = usertasklinkwhereinputSchema as unknown as z.ZodType<Prisma.UserTaskLinkWhereInput>;
export const UserTaskLinkWhereInputObjectZodSchema = usertasklinkwhereinputSchema;
