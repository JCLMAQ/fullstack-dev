import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { FileUncheckedCreateNestedManyWithoutCommentInputObjectSchema as FileUncheckedCreateNestedManyWithoutCommentInputObjectSchema } from './FileUncheckedCreateNestedManyWithoutCommentInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  numSeq: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  published: z.boolean().optional().nullable(),
  isPublic: z.boolean().optional().nullable(),
  isDeleted: z.number().int().optional().nullable(),
  isDeletedDT: z.coerce.date().optional().nullable(),
  orderComment: z.number().int(),
  content: z.string().optional().nullable(),
  postId: z.string(),
  authorId: z.string(),
  Files: z.lazy(() => FileUncheckedCreateNestedManyWithoutCommentInputObjectSchema).optional()
}).strict();
export const CommentUncheckedCreateInputObjectSchema: z.ZodType<Prisma.CommentUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CommentUncheckedCreateInput>;
export const CommentUncheckedCreateInputObjectZodSchema = makeSchema();
