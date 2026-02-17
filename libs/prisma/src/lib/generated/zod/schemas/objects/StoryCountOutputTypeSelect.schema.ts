import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StoryCountOutputTypeCountImagesArgsObjectSchema as StoryCountOutputTypeCountImagesArgsObjectSchema } from './StoryCountOutputTypeCountImagesArgs.schema';
import { StoryCountOutputTypeCountFilesArgsObjectSchema as StoryCountOutputTypeCountFilesArgsObjectSchema } from './StoryCountOutputTypeCountFilesArgs.schema'

const makeSchema = () => z.object({
  Images: z.union([z.boolean(), z.lazy(() => StoryCountOutputTypeCountImagesArgsObjectSchema)]).optional(),
  Files: z.union([z.boolean(), z.lazy(() => StoryCountOutputTypeCountFilesArgsObjectSchema)]).optional()
}).strict();
export const StoryCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.StoryCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.StoryCountOutputTypeSelect>;
export const StoryCountOutputTypeSelectObjectZodSchema = makeSchema();
