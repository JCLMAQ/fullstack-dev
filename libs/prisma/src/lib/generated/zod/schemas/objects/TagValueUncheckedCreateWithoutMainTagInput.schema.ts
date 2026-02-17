import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { TagValueUncheckedCreateNestedManyWithoutMainTagInputObjectSchema as TagValueUncheckedCreateNestedManyWithoutMainTagInputObjectSchema } from './TagValueUncheckedCreateNestedManyWithoutMainTagInput.schema';
import { TagTranslateUncheckedCreateNestedManyWithoutTagValueInputObjectSchema as TagTranslateUncheckedCreateNestedManyWithoutTagValueInputObjectSchema } from './TagTranslateUncheckedCreateNestedManyWithoutTagValueInput.schema';
import { TodoUncheckedCreateNestedManyWithoutTagsInputObjectSchema as TodoUncheckedCreateNestedManyWithoutTagsInputObjectSchema } from './TodoUncheckedCreateNestedManyWithoutTagsInput.schema';
import { TaskUncheckedCreateNestedManyWithoutTagsInputObjectSchema as TaskUncheckedCreateNestedManyWithoutTagsInputObjectSchema } from './TaskUncheckedCreateNestedManyWithoutTagsInput.schema';
import { GroupUncheckedCreateNestedManyWithoutTagsInputObjectSchema as GroupUncheckedCreateNestedManyWithoutTagsInputObjectSchema } from './GroupUncheckedCreateNestedManyWithoutTagsInput.schema';
import { PostUncheckedCreateNestedManyWithoutTagsInputObjectSchema as PostUncheckedCreateNestedManyWithoutTagsInputObjectSchema } from './PostUncheckedCreateNestedManyWithoutTagsInput.schema';
import { FileUncheckedCreateNestedManyWithoutTagsInputObjectSchema as FileUncheckedCreateNestedManyWithoutTagsInputObjectSchema } from './FileUncheckedCreateNestedManyWithoutTagsInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  published: z.boolean().optional(),
  isPublic: z.boolean().optional(),
  isDeleted: z.number().int().optional(),
  isDeletedDT: z.coerce.date().optional().nullable(),
  name: z.string(),
  position: z.number().int().optional(),
  tagCategoriesId: z.number().int(),
  SubTags: z.lazy(() => TagValueUncheckedCreateNestedManyWithoutMainTagInputObjectSchema).optional(),
  tagTranslates: z.lazy(() => TagTranslateUncheckedCreateNestedManyWithoutTagValueInputObjectSchema).optional(),
  Todos: z.lazy(() => TodoUncheckedCreateNestedManyWithoutTagsInputObjectSchema).optional(),
  Tasks: z.lazy(() => TaskUncheckedCreateNestedManyWithoutTagsInputObjectSchema).optional(),
  Groups: z.lazy(() => GroupUncheckedCreateNestedManyWithoutTagsInputObjectSchema).optional(),
  Posts: z.lazy(() => PostUncheckedCreateNestedManyWithoutTagsInputObjectSchema).optional(),
  Files: z.lazy(() => FileUncheckedCreateNestedManyWithoutTagsInputObjectSchema).optional()
}).strict();
export const TagValueUncheckedCreateWithoutMainTagInputObjectSchema: z.ZodType<Prisma.TagValueUncheckedCreateWithoutMainTagInput> = makeSchema() as unknown as z.ZodType<Prisma.TagValueUncheckedCreateWithoutMainTagInput>;
export const TagValueUncheckedCreateWithoutMainTagInputObjectZodSchema = makeSchema();
