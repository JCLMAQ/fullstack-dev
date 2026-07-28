import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TagCategoriesArgsObjectSchema as TagCategoriesArgsObjectSchema } from './TagCategoriesArgs.schema';
import { TagValueArgsObjectSchema as TagValueArgsObjectSchema } from './TagValueArgs.schema';
import { TagValueFindManySchema as TagValueFindManySchema } from '../findManyTagValue.schema';
import { TagTranslateFindManySchema as TagTranslateFindManySchema } from '../findManyTagTranslate.schema';
import { TodoFindManySchema as TodoFindManySchema } from '../findManyTodo.schema';
import { TaskFindManySchema as TaskFindManySchema } from '../findManyTask.schema';
import { GroupFindManySchema as GroupFindManySchema } from '../findManyGroup.schema';
import { PostFindManySchema as PostFindManySchema } from '../findManyPost.schema';
import { FileFindManySchema as FileFindManySchema } from '../findManyFile.schema';
import { TagValueCountOutputTypeArgsObjectSchema as TagValueCountOutputTypeArgsObjectSchema } from './TagValueCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  tagCategories: z.union([z.boolean(), z.lazy(() => TagCategoriesArgsObjectSchema)]).optional(),
  mainTag: z.union([z.boolean(), z.lazy(() => TagValueArgsObjectSchema)]).optional(),
  SubTags: z.union([z.boolean(), z.lazy(() => TagValueFindManySchema)]).optional(),
  tagTranslates: z.union([z.boolean(), z.lazy(() => TagTranslateFindManySchema)]).optional(),
  Todos: z.union([z.boolean(), z.lazy(() => TodoFindManySchema)]).optional(),
  Tasks: z.union([z.boolean(), z.lazy(() => TaskFindManySchema)]).optional(),
  Groups: z.union([z.boolean(), z.lazy(() => GroupFindManySchema)]).optional(),
  Posts: z.union([z.boolean(), z.lazy(() => PostFindManySchema)]).optional(),
  Files: z.union([z.boolean(), z.lazy(() => FileFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => TagValueCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const TagValueIncludeObjectSchema: z.ZodType<Prisma.TagValueInclude> = makeSchema() as unknown as z.ZodType<Prisma.TagValueInclude>;
export const TagValueIncludeObjectZodSchema = makeSchema();
