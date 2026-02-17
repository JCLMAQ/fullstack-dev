import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { GroupUncheckedCreateNestedManyWithoutPostsInputObjectSchema as GroupUncheckedCreateNestedManyWithoutPostsInputObjectSchema } from './GroupUncheckedCreateNestedManyWithoutPostsInput.schema';
import { CategoryUncheckedCreateNestedManyWithoutPostsInputObjectSchema as CategoryUncheckedCreateNestedManyWithoutPostsInputObjectSchema } from './CategoryUncheckedCreateNestedManyWithoutPostsInput.schema';
import { CommentUncheckedCreateNestedManyWithoutPostInputObjectSchema as CommentUncheckedCreateNestedManyWithoutPostInputObjectSchema } from './CommentUncheckedCreateNestedManyWithoutPostInput.schema';
import { UserPostLikeLinkUncheckedCreateNestedManyWithoutPostInputObjectSchema as UserPostLikeLinkUncheckedCreateNestedManyWithoutPostInputObjectSchema } from './UserPostLikeLinkUncheckedCreateNestedManyWithoutPostInput.schema';
import { ImageUncheckedCreateNestedManyWithoutPostInputObjectSchema as ImageUncheckedCreateNestedManyWithoutPostInputObjectSchema } from './ImageUncheckedCreateNestedManyWithoutPostInput.schema';
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
  groups: z.lazy(() => GroupUncheckedCreateNestedManyWithoutPostsInputObjectSchema).optional(),
  Categories: z.lazy(() => CategoryUncheckedCreateNestedManyWithoutPostsInputObjectSchema).optional(),
  Comments: z.lazy(() => CommentUncheckedCreateNestedManyWithoutPostInputObjectSchema).optional(),
  LikedBys: z.lazy(() => UserPostLikeLinkUncheckedCreateNestedManyWithoutPostInputObjectSchema).optional(),
  Images: z.lazy(() => ImageUncheckedCreateNestedManyWithoutPostInputObjectSchema).optional(),
  Tags: z.lazy(() => TagValueUncheckedCreateNestedManyWithoutPostsInputObjectSchema).optional()
}).strict();
export const PostUncheckedCreateWithoutFilesInputObjectSchema: z.ZodType<Prisma.PostUncheckedCreateWithoutFilesInput> = makeSchema() as unknown as z.ZodType<Prisma.PostUncheckedCreateWithoutFilesInput>;
export const PostUncheckedCreateWithoutFilesInputObjectZodSchema = makeSchema();
