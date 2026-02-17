import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const usertasklinkscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => UserTaskLinkScalarWhereInputObjectSchema), z.lazy(() => UserTaskLinkScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => UserTaskLinkScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => UserTaskLinkScalarWhereInputObjectSchema), z.lazy(() => UserTaskLinkScalarWhereInputObjectSchema).array()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  taskId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  isAuthor: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  isAssigned: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  comment: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional()
}).strict();
export const UserTaskLinkScalarWhereInputObjectSchema: z.ZodType<Prisma.UserTaskLinkScalarWhereInput> = usertasklinkscalarwhereinputSchema as unknown as z.ZodType<Prisma.UserTaskLinkScalarWhereInput>;
export const UserTaskLinkScalarWhereInputObjectZodSchema = usertasklinkscalarwhereinputSchema;
