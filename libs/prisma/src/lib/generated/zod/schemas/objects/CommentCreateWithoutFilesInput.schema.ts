import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { PostCreateNestedOneWithoutCommentsInputObjectSchema as PostCreateNestedOneWithoutCommentsInputObjectSchema } from './PostCreateNestedOneWithoutCommentsInput.schema';
import { UserCreateNestedOneWithoutCommentsInputObjectSchema as UserCreateNestedOneWithoutCommentsInputObjectSchema } from './UserCreateNestedOneWithoutCommentsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  numSeq: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  published: z.boolean().optional().nullable(),
  isPublic: z.boolean().optional().nullable(),
  isDeleted: z.number().int().optional().nullable(),
  isDeletedDT: z.coerce.date().optional().nullable(),
  orderComment: z.number().int(),
  content: z.string().optional().nullable(),
  post: z.lazy(() => PostCreateNestedOneWithoutCommentsInputObjectSchema),
  author: z.lazy(() => UserCreateNestedOneWithoutCommentsInputObjectSchema)
}).strict();
export const CommentCreateWithoutFilesInputObjectSchema: z.ZodType<Prisma.CommentCreateWithoutFilesInput> = makeSchema() as unknown as z.ZodType<Prisma.CommentCreateWithoutFilesInput>;
export const CommentCreateWithoutFilesInputObjectZodSchema = makeSchema();
