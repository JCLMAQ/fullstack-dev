import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { PostCountOutputTypeCountGroupsArgsObjectSchema as PostCountOutputTypeCountGroupsArgsObjectSchema } from './PostCountOutputTypeCountGroupsArgs.schema';
import { PostCountOutputTypeCountCategoriesArgsObjectSchema as PostCountOutputTypeCountCategoriesArgsObjectSchema } from './PostCountOutputTypeCountCategoriesArgs.schema';
import { PostCountOutputTypeCountCommentsArgsObjectSchema as PostCountOutputTypeCountCommentsArgsObjectSchema } from './PostCountOutputTypeCountCommentsArgs.schema';
import { PostCountOutputTypeCountLikedBysArgsObjectSchema as PostCountOutputTypeCountLikedBysArgsObjectSchema } from './PostCountOutputTypeCountLikedBysArgs.schema';
import { PostCountOutputTypeCountImagesArgsObjectSchema as PostCountOutputTypeCountImagesArgsObjectSchema } from './PostCountOutputTypeCountImagesArgs.schema';
import { PostCountOutputTypeCountFilesArgsObjectSchema as PostCountOutputTypeCountFilesArgsObjectSchema } from './PostCountOutputTypeCountFilesArgs.schema';
import { PostCountOutputTypeCountTagsArgsObjectSchema as PostCountOutputTypeCountTagsArgsObjectSchema } from './PostCountOutputTypeCountTagsArgs.schema'

const makeSchema = () => z.object({
  groups: z.union([z.boolean(), z.lazy(() => PostCountOutputTypeCountGroupsArgsObjectSchema)]).optional(),
  Categories: z.union([z.boolean(), z.lazy(() => PostCountOutputTypeCountCategoriesArgsObjectSchema)]).optional(),
  Comments: z.union([z.boolean(), z.lazy(() => PostCountOutputTypeCountCommentsArgsObjectSchema)]).optional(),
  LikedBys: z.union([z.boolean(), z.lazy(() => PostCountOutputTypeCountLikedBysArgsObjectSchema)]).optional(),
  Images: z.union([z.boolean(), z.lazy(() => PostCountOutputTypeCountImagesArgsObjectSchema)]).optional(),
  Files: z.union([z.boolean(), z.lazy(() => PostCountOutputTypeCountFilesArgsObjectSchema)]).optional(),
  Tags: z.union([z.boolean(), z.lazy(() => PostCountOutputTypeCountTagsArgsObjectSchema)]).optional()
}).strict();
export const PostCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.PostCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.PostCountOutputTypeSelect>;
export const PostCountOutputTypeSelectObjectZodSchema = makeSchema();
