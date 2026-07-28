import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserCreateNestedOneWithoutPostsInputObjectSchema as UserCreateNestedOneWithoutPostsInputObjectSchema } from './UserCreateNestedOneWithoutPostsInput.schema';
import { GroupCreateNestedManyWithoutPostsInputObjectSchema as GroupCreateNestedManyWithoutPostsInputObjectSchema } from './GroupCreateNestedManyWithoutPostsInput.schema';
import { CategoryCreateNestedManyWithoutPostsInputObjectSchema as CategoryCreateNestedManyWithoutPostsInputObjectSchema } from './CategoryCreateNestedManyWithoutPostsInput.schema';
import { CommentCreateNestedManyWithoutPostInputObjectSchema as CommentCreateNestedManyWithoutPostInputObjectSchema } from './CommentCreateNestedManyWithoutPostInput.schema';
import { UserPostLikeLinkCreateNestedManyWithoutPostInputObjectSchema as UserPostLikeLinkCreateNestedManyWithoutPostInputObjectSchema } from './UserPostLikeLinkCreateNestedManyWithoutPostInput.schema';
import { ImageCreateNestedManyWithoutPostInputObjectSchema as ImageCreateNestedManyWithoutPostInputObjectSchema } from './ImageCreateNestedManyWithoutPostInput.schema';
import { FileCreateNestedManyWithoutPostInputObjectSchema as FileCreateNestedManyWithoutPostInputObjectSchema } from './FileCreateNestedManyWithoutPostInput.schema';
import { TagValueCreateNestedManyWithoutPostsInputObjectSchema as TagValueCreateNestedManyWithoutPostsInputObjectSchema } from './TagValueCreateNestedManyWithoutPostsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  numSeq: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  published: z.boolean().optional(),
  isDeleted: z.number().int().optional(),
  isDeletedDT: z.coerce.date().optional().nullable(),
  isPublic: z.boolean().optional(),
  orderPost: z.number().int().optional().nullable(),
  title: z.string(),
  content: z.string().optional().nullable(),
  owner: z.lazy(() => UserCreateNestedOneWithoutPostsInputObjectSchema),
  groups: z.lazy(() => GroupCreateNestedManyWithoutPostsInputObjectSchema).optional(),
  Categories: z.lazy(() => CategoryCreateNestedManyWithoutPostsInputObjectSchema).optional(),
  Comments: z.lazy(() => CommentCreateNestedManyWithoutPostInputObjectSchema).optional(),
  LikedBys: z.lazy(() => UserPostLikeLinkCreateNestedManyWithoutPostInputObjectSchema).optional(),
  Images: z.lazy(() => ImageCreateNestedManyWithoutPostInputObjectSchema).optional(),
  Files: z.lazy(() => FileCreateNestedManyWithoutPostInputObjectSchema).optional(),
  Tags: z.lazy(() => TagValueCreateNestedManyWithoutPostsInputObjectSchema).optional()
}).strict();
export const PostCreateWithoutOrgInputObjectSchema: z.ZodType<Prisma.PostCreateWithoutOrgInput> = makeSchema() as unknown as z.ZodType<Prisma.PostCreateWithoutOrgInput>;
export const PostCreateWithoutOrgInputObjectZodSchema = makeSchema();
