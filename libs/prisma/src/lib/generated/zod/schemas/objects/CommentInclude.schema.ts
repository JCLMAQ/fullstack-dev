import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { PostArgsObjectSchema as PostArgsObjectSchema } from './PostArgs.schema';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { FileFindManySchema as FileFindManySchema } from '../findManyFile.schema';
import { CommentCountOutputTypeArgsObjectSchema as CommentCountOutputTypeArgsObjectSchema } from './CommentCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  post: z.union([z.boolean(), z.lazy(() => PostArgsObjectSchema)]).optional(),
  author: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  Files: z.union([z.boolean(), z.lazy(() => FileFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => CommentCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const CommentIncludeObjectSchema: z.ZodType<Prisma.CommentInclude> = makeSchema() as unknown as z.ZodType<Prisma.CommentInclude>;
export const CommentIncludeObjectZodSchema = makeSchema();
