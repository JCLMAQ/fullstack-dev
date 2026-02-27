import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
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
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  published: z.boolean().optional(),
  isPublic: z.boolean().optional(),
  isDeleted: z.boolean().optional(),
  isDeletedDT: z.boolean().optional(),
  name: z.boolean().optional(),
  position: z.boolean().optional(),
  color: z.boolean().optional(),
  tagCategories: z.union([z.boolean(), z.lazy(() => TagCategoriesArgsObjectSchema)]).optional(),
  tagCategoriesId: z.boolean().optional(),
  mainTag: z.union([z.boolean(), z.lazy(() => TagValueArgsObjectSchema)]).optional(),
  mainTagId: z.boolean().optional(),
  SubTags: z.union([z.boolean(), z.lazy(() => TagValueFindManySchema)]).optional(),
  tagTranslates: z.union([z.boolean(), z.lazy(() => TagTranslateFindManySchema)]).optional(),
  Todos: z.union([z.boolean(), z.lazy(() => TodoFindManySchema)]).optional(),
  Tasks: z.union([z.boolean(), z.lazy(() => TaskFindManySchema)]).optional(),
  Groups: z.union([z.boolean(), z.lazy(() => GroupFindManySchema)]).optional(),
  Posts: z.union([z.boolean(), z.lazy(() => PostFindManySchema)]).optional(),
  Files: z.union([z.boolean(), z.lazy(() => FileFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => TagValueCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const TagValueSelectObjectSchema: z.ZodType<Prisma.TagValueSelect> = makeSchema() as unknown as z.ZodType<Prisma.TagValueSelect>;
export const TagValueSelectObjectZodSchema = makeSchema();
