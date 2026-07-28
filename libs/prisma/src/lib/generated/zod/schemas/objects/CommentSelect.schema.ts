import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { PostArgsObjectSchema as PostArgsObjectSchema } from './PostArgs.schema';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { FileFindManySchema as FileFindManySchema } from '../findManyFile.schema';
import { CommentCountOutputTypeArgsObjectSchema as CommentCountOutputTypeArgsObjectSchema } from './CommentCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  numSeq: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  published: z.boolean().optional(),
  isPublic: z.boolean().optional(),
  isDeleted: z.boolean().optional(),
  isDeletedDT: z.boolean().optional(),
  orderComment: z.boolean().optional(),
  content: z.boolean().optional(),
  post: z.union([z.boolean(), z.lazy(() => PostArgsObjectSchema)]).optional(),
  postId: z.boolean().optional(),
  author: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  authorId: z.boolean().optional(),
  Files: z.union([z.boolean(), z.lazy(() => FileFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => CommentCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const CommentSelectObjectSchema: z.ZodType<Prisma.CommentSelect> = makeSchema() as unknown as z.ZodType<Prisma.CommentSelect>;
export const CommentSelectObjectZodSchema = makeSchema();
