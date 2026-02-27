import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { TagCategoriesScalarRelationFilterObjectSchema as TagCategoriesScalarRelationFilterObjectSchema } from './TagCategoriesScalarRelationFilter.schema';
import { TagCategoriesWhereInputObjectSchema as TagCategoriesWhereInputObjectSchema } from './TagCategoriesWhereInput.schema';
import { TagValueNullableScalarRelationFilterObjectSchema as TagValueNullableScalarRelationFilterObjectSchema } from './TagValueNullableScalarRelationFilter.schema';
import { TagValueListRelationFilterObjectSchema as TagValueListRelationFilterObjectSchema } from './TagValueListRelationFilter.schema';
import { TagTranslateListRelationFilterObjectSchema as TagTranslateListRelationFilterObjectSchema } from './TagTranslateListRelationFilter.schema';
import { TodoListRelationFilterObjectSchema as TodoListRelationFilterObjectSchema } from './TodoListRelationFilter.schema';
import { TaskListRelationFilterObjectSchema as TaskListRelationFilterObjectSchema } from './TaskListRelationFilter.schema';
import { GroupListRelationFilterObjectSchema as GroupListRelationFilterObjectSchema } from './GroupListRelationFilter.schema';
import { PostListRelationFilterObjectSchema as PostListRelationFilterObjectSchema } from './PostListRelationFilter.schema';
import { FileListRelationFilterObjectSchema as FileListRelationFilterObjectSchema } from './FileListRelationFilter.schema'

const tagvaluewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => TagValueWhereInputObjectSchema), z.lazy(() => TagValueWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TagValueWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TagValueWhereInputObjectSchema), z.lazy(() => TagValueWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  published: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  isPublic: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  isDeleted: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  isDeletedDT: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  position: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  color: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  tagCategoriesId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  mainTagId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  tagCategories: z.union([z.lazy(() => TagCategoriesScalarRelationFilterObjectSchema), z.lazy(() => TagCategoriesWhereInputObjectSchema)]).optional(),
  mainTag: z.union([z.lazy(() => TagValueNullableScalarRelationFilterObjectSchema), z.lazy(() => TagValueWhereInputObjectSchema)]).optional(),
  SubTags: z.lazy(() => TagValueListRelationFilterObjectSchema).optional(),
  tagTranslates: z.lazy(() => TagTranslateListRelationFilterObjectSchema).optional(),
  Todos: z.lazy(() => TodoListRelationFilterObjectSchema).optional(),
  Tasks: z.lazy(() => TaskListRelationFilterObjectSchema).optional(),
  Groups: z.lazy(() => GroupListRelationFilterObjectSchema).optional(),
  Posts: z.lazy(() => PostListRelationFilterObjectSchema).optional(),
  Files: z.lazy(() => FileListRelationFilterObjectSchema).optional()
}).strict();
export const TagValueWhereInputObjectSchema: z.ZodType<Prisma.TagValueWhereInput> = tagvaluewhereinputSchema as unknown as z.ZodType<Prisma.TagValueWhereInput>;
export const TagValueWhereInputObjectZodSchema = tagvaluewhereinputSchema;
