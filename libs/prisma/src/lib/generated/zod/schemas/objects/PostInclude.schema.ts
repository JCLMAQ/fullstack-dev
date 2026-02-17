import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
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
  owner: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  org: z.union([z.boolean(), z.lazy(() => OrganizationArgsObjectSchema)]).optional(),
  groups: z.union([z.boolean(), z.lazy(() => GroupFindManySchema)]).optional(),
  Categories: z.union([z.boolean(), z.lazy(() => CategoryFindManySchema)]).optional(),
  Comments: z.union([z.boolean(), z.lazy(() => CommentFindManySchema)]).optional(),
  LikedBys: z.union([z.boolean(), z.lazy(() => UserPostLikeLinkFindManySchema)]).optional(),
  Images: z.union([z.boolean(), z.lazy(() => ImageFindManySchema)]).optional(),
  Files: z.union([z.boolean(), z.lazy(() => FileFindManySchema)]).optional(),
  Tags: z.union([z.boolean(), z.lazy(() => TagValueFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => PostCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const PostIncludeObjectSchema: z.ZodType<Prisma.PostInclude> = makeSchema() as unknown as z.ZodType<Prisma.PostInclude>;
export const PostIncludeObjectZodSchema = makeSchema();
