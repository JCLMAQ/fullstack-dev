import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CommentWhereInputObjectSchema as CommentWhereInputObjectSchema } from './CommentWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CommentWhereInputObjectSchema).optional()
}).strict();
export const PostCountOutputTypeCountCommentsArgsObjectSchema = makeSchema();
export const PostCountOutputTypeCountCommentsArgsObjectZodSchema = makeSchema();
