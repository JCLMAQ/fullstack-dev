import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { FileUncheckedCreateNestedManyWithoutCommentInputObjectSchema as FileUncheckedCreateNestedManyWithoutCommentInputObjectSchema } from './FileUncheckedCreateNestedManyWithoutCommentInput.schema'

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
  authorId: z.string(),
  Files: z.lazy(() => FileUncheckedCreateNestedManyWithoutCommentInputObjectSchema).optional()
}).strict();
export const CommentUncheckedCreateWithoutPostInputObjectSchema: z.ZodType<Prisma.CommentUncheckedCreateWithoutPostInput> = makeSchema() as unknown as z.ZodType<Prisma.CommentUncheckedCreateWithoutPostInput>;
export const CommentUncheckedCreateWithoutPostInputObjectZodSchema = makeSchema();
