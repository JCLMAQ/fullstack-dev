import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema as BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const usertasklinkscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => UserTaskLinkScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => UserTaskLinkScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => UserTaskLinkScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => UserTaskLinkScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => UserTaskLinkScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  userId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  taskId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  isAuthor: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  isAssigned: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  comment: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
export const UserTaskLinkScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.UserTaskLinkScalarWhereWithAggregatesInput> = usertasklinkscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.UserTaskLinkScalarWhereWithAggregatesInput>;
export const UserTaskLinkScalarWhereWithAggregatesInputObjectZodSchema = usertasklinkscalarwherewithaggregatesinputSchema;
