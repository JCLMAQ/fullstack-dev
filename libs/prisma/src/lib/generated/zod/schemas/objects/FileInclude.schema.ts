import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { TagValueFindManySchema as TagValueFindManySchema } from '../findManyTagValue.schema';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { OrganizationArgsObjectSchema as OrganizationArgsObjectSchema } from './OrganizationArgs.schema';
import { GroupFindManySchema as GroupFindManySchema } from '../findManyGroup.schema';
import { PostArgsObjectSchema as PostArgsObjectSchema } from './PostArgs.schema';
import { StoryArgsObjectSchema as StoryArgsObjectSchema } from './StoryArgs.schema';
import { CommentArgsObjectSchema as CommentArgsObjectSchema } from './CommentArgs.schema';
import { FileCountOutputTypeArgsObjectSchema as FileCountOutputTypeArgsObjectSchema } from './FileCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  Tags: z.union([z.boolean(), z.lazy(() => TagValueFindManySchema)]).optional(),
  owner: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  uploadedBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  org: z.union([z.boolean(), z.lazy(() => OrganizationArgsObjectSchema)]).optional(),
  groups: z.union([z.boolean(), z.lazy(() => GroupFindManySchema)]).optional(),
  post: z.union([z.boolean(), z.lazy(() => PostArgsObjectSchema)]).optional(),
  story: z.union([z.boolean(), z.lazy(() => StoryArgsObjectSchema)]).optional(),
  profileUser: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  comment: z.union([z.boolean(), z.lazy(() => CommentArgsObjectSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => FileCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const FileIncludeObjectSchema: z.ZodType<Prisma.FileInclude> = makeSchema() as unknown as z.ZodType<Prisma.FileInclude>;
export const FileIncludeObjectZodSchema = makeSchema();
