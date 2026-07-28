import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { PostCreateNestedOneWithoutCommentsInputObjectSchema as PostCreateNestedOneWithoutCommentsInputObjectSchema } from './PostCreateNestedOneWithoutCommentsInput.schema';
import { FileCreateNestedManyWithoutCommentInputObjectSchema as FileCreateNestedManyWithoutCommentInputObjectSchema } from './FileCreateNestedManyWithoutCommentInput.schema'

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
  Files: z.lazy(() => FileCreateNestedManyWithoutCommentInputObjectSchema).optional()
}).strict();
export const CommentCreateWithoutAuthorInputObjectSchema: z.ZodType<Prisma.CommentCreateWithoutAuthorInput> = makeSchema() as unknown as z.ZodType<Prisma.CommentCreateWithoutAuthorInput>;
export const CommentCreateWithoutAuthorInputObjectZodSchema = makeSchema();
