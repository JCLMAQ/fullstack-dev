import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { ImageFindManySchema as ImageFindManySchema } from '../findManyImage.schema';
import { FileFindManySchema as FileFindManySchema } from '../findManyFile.schema';
import { StoryCountOutputTypeArgsObjectSchema as StoryCountOutputTypeArgsObjectSchema } from './StoryCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  Images: z.union([z.boolean(), z.lazy(() => ImageFindManySchema)]).optional(),
  Files: z.union([z.boolean(), z.lazy(() => FileFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => StoryCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const StoryIncludeObjectSchema: z.ZodType<Prisma.StoryInclude> = makeSchema() as unknown as z.ZodType<Prisma.StoryInclude>;
export const StoryIncludeObjectZodSchema = makeSchema();
