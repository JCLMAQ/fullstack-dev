import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { OrganizationArgsObjectSchema as OrganizationArgsObjectSchema } from './OrganizationArgs.schema';
import { GroupFindManySchema as GroupFindManySchema } from '../findManyGroup.schema';
import { CategoryFindManySchema as CategoryFindManySchema } from '../findManyCategory.schema';
import { CommentFindManySchema as CommentFindManySchema } from '../findManyComment.schema';
import { UserPostLikeLinkFindManySchema as UserPostLikeLinkFindManySchema } from '../findManyUserPostLikeLink.schema';
import { ImageFindManySchema as ImageFindManySchema } from '../findManyImage.schema';
import { FileFindManySchema as FileFindManySchema } from '../findManyFile.schema';
import { TagValueFindManySchema as TagValueFindManySchema } from '../findManyTagValue.schema';
import { PostCountOutputTypeArgsObjectSchema as PostCountOutputTypeArgsObjectSchema } from './PostCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  numSeq: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  published: z.boolean().optional(),
  isDeleted: z.boolean().optional(),
  isDeletedDT: z.boolean().optional(),
  isPublic: z.boolean().optional(),
  owner: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  ownerId: z.boolean().optional(),
  org: z.union([z.boolean(), z.lazy(() => OrganizationArgsObjectSchema)]).optional(),
  orgId: z.boolean().optional(),
  groups: z.union([z.boolean(), z.lazy(() => GroupFindManySchema)]).optional(),
  orderPost: z.boolean().optional(),
  title: z.boolean().optional(),
  content: z.boolean().optional(),
  Categories: z.union([z.boolean(), z.lazy(() => CategoryFindManySchema)]).optional(),
  Comments: z.union([z.boolean(), z.lazy(() => CommentFindManySchema)]).optional(),
  LikedBys: z.union([z.boolean(), z.lazy(() => UserPostLikeLinkFindManySchema)]).optional(),
  Images: z.union([z.boolean(), z.lazy(() => ImageFindManySchema)]).optional(),
  Files: z.union([z.boolean(), z.lazy(() => FileFindManySchema)]).optional(),
  Tags: z.union([z.boolean(), z.lazy(() => TagValueFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => PostCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const PostSelectObjectSchema: z.ZodType<Prisma.PostSelect> = makeSchema() as unknown as z.ZodType<Prisma.PostSelect>;
export const PostSelectObjectZodSchema = makeSchema();
