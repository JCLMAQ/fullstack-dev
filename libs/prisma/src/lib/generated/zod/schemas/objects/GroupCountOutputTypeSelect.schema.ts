import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { GroupCountOutputTypeCountMembersArgsObjectSchema as GroupCountOutputTypeCountMembersArgsObjectSchema } from './GroupCountOutputTypeCountMembersArgs.schema';
import { GroupCountOutputTypeCountTasksArgsObjectSchema as GroupCountOutputTypeCountTasksArgsObjectSchema } from './GroupCountOutputTypeCountTasksArgs.schema';
import { GroupCountOutputTypeCountTodosArgsObjectSchema as GroupCountOutputTypeCountTodosArgsObjectSchema } from './GroupCountOutputTypeCountTodosArgs.schema';
import { GroupCountOutputTypeCountPostsArgsObjectSchema as GroupCountOutputTypeCountPostsArgsObjectSchema } from './GroupCountOutputTypeCountPostsArgs.schema';
import { GroupCountOutputTypeCountFilesArgsObjectSchema as GroupCountOutputTypeCountFilesArgsObjectSchema } from './GroupCountOutputTypeCountFilesArgs.schema';
import { GroupCountOutputTypeCountTagsArgsObjectSchema as GroupCountOutputTypeCountTagsArgsObjectSchema } from './GroupCountOutputTypeCountTagsArgs.schema'

const makeSchema = () => z.object({
  Members: z.union([z.boolean(), z.lazy(() => GroupCountOutputTypeCountMembersArgsObjectSchema)]).optional(),
  Tasks: z.union([z.boolean(), z.lazy(() => GroupCountOutputTypeCountTasksArgsObjectSchema)]).optional(),
  Todos: z.union([z.boolean(), z.lazy(() => GroupCountOutputTypeCountTodosArgsObjectSchema)]).optional(),
  Posts: z.union([z.boolean(), z.lazy(() => GroupCountOutputTypeCountPostsArgsObjectSchema)]).optional(),
  Files: z.union([z.boolean(), z.lazy(() => GroupCountOutputTypeCountFilesArgsObjectSchema)]).optional(),
  Tags: z.union([z.boolean(), z.lazy(() => GroupCountOutputTypeCountTagsArgsObjectSchema)]).optional()
}).strict();
export const GroupCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.GroupCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.GroupCountOutputTypeSelect>;
export const GroupCountOutputTypeSelectObjectZodSchema = makeSchema();
