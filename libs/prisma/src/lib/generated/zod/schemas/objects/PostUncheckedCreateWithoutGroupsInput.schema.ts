import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CategoryUncheckedCreateNestedManyWithoutPostsInputObjectSchema as CategoryUncheckedCreateNestedManyWithoutPostsInputObjectSchema } from './CategoryUncheckedCreateNestedManyWithoutPostsInput.schema';
import { CommentUncheckedCreateNestedManyWithoutPostInputObjectSchema as CommentUncheckedCreateNestedManyWithoutPostInputObjectSchema } from './CommentUncheckedCreateNestedManyWithoutPostInput.schema';
import { UserPostLikeLinkUncheckedCreateNestedManyWithoutPostInputObjectSchema as UserPostLikeLinkUncheckedCreateNestedManyWithoutPostInputObjectSchema } from './UserPostLikeLinkUncheckedCreateNestedManyWithoutPostInput.schema';
import { ImageUncheckedCreateNestedManyWithoutPostInputObjectSchema as ImageUncheckedCreateNestedManyWithoutPostInputObjectSchema } from './ImageUncheckedCreateNestedManyWithoutPostInput.schema';
import { FileUncheckedCreateNestedManyWithoutPostInputObjectSchema as FileUncheckedCreateNestedManyWithoutPostInputObjectSchema } from './FileUncheckedCreateNestedManyWithoutPostInput.schema';
import { TagValueUncheckedCreateNestedManyWithoutPostsInputObjectSchema as TagValueUncheckedCreateNestedManyWithoutPostsInputObjectSchema } from './TagValueUncheckedCreateNestedManyWithoutPostsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  numSeq: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  published: z.boolean().optional(),
  isDeleted: z.number().int().optional(),
  isDeletedDT: z.coerce.date().optional().nullable(),
  isPublic: z.boolean().optional(),
  ownerId: z.string(),
  orgId: z.string().optional().nullable(),
  orderPost: z.number().int().optional().nullable(),
  title: z.string(),
  content: z.string().optional().nullable(),
  Categories: z.lazy(() => CategoryUncheckedCreateNestedManyWithoutPostsInputObjectSchema).optional(),
  Comments: z.lazy(() => CommentUncheckedCreateNestedManyWithoutPostInputObjectSchema).optional(),
  LikedBys: z.lazy(() => UserPostLikeLinkUncheckedCreateNestedManyWithoutPostInputObjectSchema).optional(),
  Images: z.lazy(() => ImageUncheckedCreateNestedManyWithoutPostInputObjectSchema).optional(),
  Files: z.lazy(() => FileUncheckedCreateNestedManyWithoutPostInputObjectSchema).optional(),
  Tags: z.lazy(() => TagValueUncheckedCreateNestedManyWithoutPostsInputObjectSchema).optional()
}).strict();
export const PostUncheckedCreateWithoutGroupsInputObjectSchema: z.ZodType<Prisma.PostUncheckedCreateWithoutGroupsInput> = makeSchema() as unknown as z.ZodType<Prisma.PostUncheckedCreateWithoutGroupsInput>;
export const PostUncheckedCreateWithoutGroupsInputObjectZodSchema = makeSchema();
