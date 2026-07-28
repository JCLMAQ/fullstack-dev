import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolNullableFilterObjectSchema as BoolNullableFilterObjectSchema } from './BoolNullableFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema'

const commentscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => CommentScalarWhereInputObjectSchema), z.lazy(() => CommentScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CommentScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CommentScalarWhereInputObjectSchema), z.lazy(() => CommentScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  numSeq: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  published: z.union([z.lazy(() => BoolNullableFilterObjectSchema), z.boolean()]).optional().nullable(),
  isPublic: z.union([z.lazy(() => BoolNullableFilterObjectSchema), z.boolean()]).optional().nullable(),
  isDeleted: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  isDeletedDT: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  orderComment: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  content: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  postId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  authorId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional()
}).strict();
export const CommentScalarWhereInputObjectSchema: z.ZodType<Prisma.CommentScalarWhereInput> = commentscalarwhereinputSchema as unknown as z.ZodType<Prisma.CommentScalarWhereInput>;
export const CommentScalarWhereInputObjectZodSchema = commentscalarwhereinputSchema;
