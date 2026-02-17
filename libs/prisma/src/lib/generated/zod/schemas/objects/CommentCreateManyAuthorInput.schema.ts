import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


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
  postId: z.string()
}).strict();
export const CommentCreateManyAuthorInputObjectSchema: z.ZodType<Prisma.CommentCreateManyAuthorInput> = makeSchema() as unknown as z.ZodType<Prisma.CommentCreateManyAuthorInput>;
export const CommentCreateManyAuthorInputObjectZodSchema = makeSchema();
