import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { ImageFindManySchema as ImageFindManySchema } from '../findManyImage.schema';
import { FileFindManySchema as FileFindManySchema } from '../findManyFile.schema';
import { StoryCountOutputTypeArgsObjectSchema as StoryCountOutputTypeArgsObjectSchema } from './StoryCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  numSeq: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  published: z.boolean().optional(),
  isPublic: z.boolean().optional(),
  isDeleted: z.boolean().optional(),
  isDeletedDT: z.boolean().optional(),
  caption: z.boolean().optional(),
  user_id: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  Images: z.union([z.boolean(), z.lazy(() => ImageFindManySchema)]).optional(),
  Files: z.union([z.boolean(), z.lazy(() => FileFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => StoryCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const StorySelectObjectSchema: z.ZodType<Prisma.StorySelect> = makeSchema() as unknown as z.ZodType<Prisma.StorySelect>;
export const StorySelectObjectZodSchema = makeSchema();
