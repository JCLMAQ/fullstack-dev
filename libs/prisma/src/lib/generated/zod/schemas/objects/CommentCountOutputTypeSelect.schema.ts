import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CommentCountOutputTypeCountFilesArgsObjectSchema as CommentCountOutputTypeCountFilesArgsObjectSchema } from './CommentCountOutputTypeCountFilesArgs.schema'

const makeSchema = () => z.object({
  Files: z.union([z.boolean(), z.lazy(() => CommentCountOutputTypeCountFilesArgsObjectSchema)]).optional()
}).strict();
export const CommentCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.CommentCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.CommentCountOutputTypeSelect>;
export const CommentCountOutputTypeSelectObjectZodSchema = makeSchema();
