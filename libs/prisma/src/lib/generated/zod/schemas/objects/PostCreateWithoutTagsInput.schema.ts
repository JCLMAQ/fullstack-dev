import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateNestedOneWithoutPostsInputObjectSchema as UserCreateNestedOneWithoutPostsInputObjectSchema } from './UserCreateNestedOneWithoutPostsInput.schema';
import { OrganizationCreateNestedOneWithoutPostsInputObjectSchema as OrganizationCreateNestedOneWithoutPostsInputObjectSchema } from './OrganizationCreateNestedOneWithoutPostsInput.schema';
import { GroupCreateNestedManyWithoutPostsInputObjectSchema as GroupCreateNestedManyWithoutPostsInputObjectSchema } from './GroupCreateNestedManyWithoutPostsInput.schema';
import { CategoryCreateNestedManyWithoutPostsInputObjectSchema as CategoryCreateNestedManyWithoutPostsInputObjectSchema } from './CategoryCreateNestedManyWithoutPostsInput.schema';
import { CommentCreateNestedManyWithoutPostInputObjectSchema as CommentCreateNestedManyWithoutPostInputObjectSchema } from './CommentCreateNestedManyWithoutPostInput.schema';
import { UserPostLikeLinkCreateNestedManyWithoutPostInputObjectSchema as UserPostLikeLinkCreateNestedManyWithoutPostInputObjectSchema } from './UserPostLikeLinkCreateNestedManyWithoutPostInput.schema';
import { ImageCreateNestedManyWithoutPostInputObjectSchema as ImageCreateNestedManyWithoutPostInputObjectSchema } from './ImageCreateNestedManyWithoutPostInput.schema';
import { FileCreateNestedManyWithoutPostInputObjectSchema as FileCreateNestedManyWithoutPostInputObjectSchema } from './FileCreateNestedManyWithoutPostInput.schema'

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
  org: z.lazy(() => OrganizationCreateNestedOneWithoutPostsInputObjectSchema).optional(),
  groups: z.lazy(() => GroupCreateNestedManyWithoutPostsInputObjectSchema).optional(),
  Categories: z.lazy(() => CategoryCreateNestedManyWithoutPostsInputObjectSchema).optional(),
  Comments: z.lazy(() => CommentCreateNestedManyWithoutPostInputObjectSchema).optional(),
  LikedBys: z.lazy(() => UserPostLikeLinkCreateNestedManyWithoutPostInputObjectSchema).optional(),
  Images: z.lazy(() => ImageCreateNestedManyWithoutPostInputObjectSchema).optional(),
  Files: z.lazy(() => FileCreateNestedManyWithoutPostInputObjectSchema).optional()
}).strict();
export const PostCreateWithoutTagsInputObjectSchema: z.ZodType<Prisma.PostCreateWithoutTagsInput> = makeSchema() as unknown as z.ZodType<Prisma.PostCreateWithoutTagsInput>;
export const PostCreateWithoutTagsInputObjectZodSchema = makeSchema();
