import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TagCategoriesCreateNestedOneWithoutTagValuesInputObjectSchema as TagCategoriesCreateNestedOneWithoutTagValuesInputObjectSchema } from './TagCategoriesCreateNestedOneWithoutTagValuesInput.schema';
import { TagValueCreateNestedOneWithoutSubTagsInputObjectSchema as TagValueCreateNestedOneWithoutSubTagsInputObjectSchema } from './TagValueCreateNestedOneWithoutSubTagsInput.schema';
import { TagValueCreateNestedManyWithoutMainTagInputObjectSchema as TagValueCreateNestedManyWithoutMainTagInputObjectSchema } from './TagValueCreateNestedManyWithoutMainTagInput.schema';
import { TodoCreateNestedManyWithoutTagsInputObjectSchema as TodoCreateNestedManyWithoutTagsInputObjectSchema } from './TodoCreateNestedManyWithoutTagsInput.schema';
import { TaskCreateNestedManyWithoutTagsInputObjectSchema as TaskCreateNestedManyWithoutTagsInputObjectSchema } from './TaskCreateNestedManyWithoutTagsInput.schema';
import { GroupCreateNestedManyWithoutTagsInputObjectSchema as GroupCreateNestedManyWithoutTagsInputObjectSchema } from './GroupCreateNestedManyWithoutTagsInput.schema';
import { PostCreateNestedManyWithoutTagsInputObjectSchema as PostCreateNestedManyWithoutTagsInputObjectSchema } from './PostCreateNestedManyWithoutTagsInput.schema';
import { FileCreateNestedManyWithoutTagsInputObjectSchema as FileCreateNestedManyWithoutTagsInputObjectSchema } from './FileCreateNestedManyWithoutTagsInput.schema'

const makeSchema = () => z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  published: z.boolean().optional(),
  isPublic: z.boolean().optional(),
  isDeleted: z.number().int().optional(),
  isDeletedDT: z.coerce.date().optional().nullable(),
  name: z.string(),
  position: z.number().int().optional(),
  color: z.string().optional().nullable(),
  tagCategories: z.lazy(() => TagCategoriesCreateNestedOneWithoutTagValuesInputObjectSchema),
  mainTag: z.lazy(() => TagValueCreateNestedOneWithoutSubTagsInputObjectSchema).optional(),
  SubTags: z.lazy(() => TagValueCreateNestedManyWithoutMainTagInputObjectSchema).optional(),
  Todos: z.lazy(() => TodoCreateNestedManyWithoutTagsInputObjectSchema).optional(),
  Tasks: z.lazy(() => TaskCreateNestedManyWithoutTagsInputObjectSchema).optional(),
  Groups: z.lazy(() => GroupCreateNestedManyWithoutTagsInputObjectSchema).optional(),
  Posts: z.lazy(() => PostCreateNestedManyWithoutTagsInputObjectSchema).optional(),
  Files: z.lazy(() => FileCreateNestedManyWithoutTagsInputObjectSchema).optional()
}).strict();
export const TagValueCreateWithoutTagTranslatesInputObjectSchema: z.ZodType<Prisma.TagValueCreateWithoutTagTranslatesInput> = makeSchema() as unknown as z.ZodType<Prisma.TagValueCreateWithoutTagTranslatesInput>;
export const TagValueCreateWithoutTagTranslatesInputObjectZodSchema = makeSchema();
