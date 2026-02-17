import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TagValueCountOutputTypeCountSubTagsArgsObjectSchema as TagValueCountOutputTypeCountSubTagsArgsObjectSchema } from './TagValueCountOutputTypeCountSubTagsArgs.schema';
import { TagValueCountOutputTypeCountTagTranslatesArgsObjectSchema as TagValueCountOutputTypeCountTagTranslatesArgsObjectSchema } from './TagValueCountOutputTypeCountTagTranslatesArgs.schema';
import { TagValueCountOutputTypeCountTodosArgsObjectSchema as TagValueCountOutputTypeCountTodosArgsObjectSchema } from './TagValueCountOutputTypeCountTodosArgs.schema';
import { TagValueCountOutputTypeCountTasksArgsObjectSchema as TagValueCountOutputTypeCountTasksArgsObjectSchema } from './TagValueCountOutputTypeCountTasksArgs.schema';
import { TagValueCountOutputTypeCountGroupsArgsObjectSchema as TagValueCountOutputTypeCountGroupsArgsObjectSchema } from './TagValueCountOutputTypeCountGroupsArgs.schema';
import { TagValueCountOutputTypeCountPostsArgsObjectSchema as TagValueCountOutputTypeCountPostsArgsObjectSchema } from './TagValueCountOutputTypeCountPostsArgs.schema';
import { TagValueCountOutputTypeCountFilesArgsObjectSchema as TagValueCountOutputTypeCountFilesArgsObjectSchema } from './TagValueCountOutputTypeCountFilesArgs.schema'

const makeSchema = () => z.object({
  SubTags: z.union([z.boolean(), z.lazy(() => TagValueCountOutputTypeCountSubTagsArgsObjectSchema)]).optional(),
  tagTranslates: z.union([z.boolean(), z.lazy(() => TagValueCountOutputTypeCountTagTranslatesArgsObjectSchema)]).optional(),
  Todos: z.union([z.boolean(), z.lazy(() => TagValueCountOutputTypeCountTodosArgsObjectSchema)]).optional(),
  Tasks: z.union([z.boolean(), z.lazy(() => TagValueCountOutputTypeCountTasksArgsObjectSchema)]).optional(),
  Groups: z.union([z.boolean(), z.lazy(() => TagValueCountOutputTypeCountGroupsArgsObjectSchema)]).optional(),
  Posts: z.union([z.boolean(), z.lazy(() => TagValueCountOutputTypeCountPostsArgsObjectSchema)]).optional(),
  Files: z.union([z.boolean(), z.lazy(() => TagValueCountOutputTypeCountFilesArgsObjectSchema)]).optional()
}).strict();
export const TagValueCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.TagValueCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.TagValueCountOutputTypeSelect>;
export const TagValueCountOutputTypeSelectObjectZodSchema = makeSchema();
