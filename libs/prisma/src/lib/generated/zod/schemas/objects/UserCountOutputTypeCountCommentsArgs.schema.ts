import * as z from 'zod';
import { CommentWhereInputObjectSchema as CommentWhereInputObjectSchema } from './CommentWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CommentWhereInputObjectSchema).optional()
}).strict();
export const UserCountOutputTypeCountCommentsArgsObjectSchema = makeSchema();
export const UserCountOutputTypeCountCommentsArgsObjectZodSchema = makeSchema();
