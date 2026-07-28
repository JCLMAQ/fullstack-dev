import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { OrganizationArgsObjectSchema as OrganizationArgsObjectSchema } from './OrganizationArgs.schema';
import { PostArgsObjectSchema as PostArgsObjectSchema } from './PostArgs.schema';
import { StoryArgsObjectSchema as StoryArgsObjectSchema } from './StoryArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  numSeq: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  published: z.boolean().optional(),
  isPublic: z.boolean().optional(),
  isDeleted: z.boolean().optional(),
  isDeletedDT: z.boolean().optional(),
  filename: z.boolean().optional(),
  originalName: z.boolean().optional(),
  mimeType: z.boolean().optional(),
  fileSize: z.boolean().optional(),
  width: z.boolean().optional(),
  height: z.boolean().optional(),
  storageType: z.boolean().optional(),
  storagePath: z.boolean().optional(),
  storageUrl: z.boolean().optional(),
  bucketName: z.boolean().optional(),
  isProcessed: z.boolean().optional(),
  thumbnailUrl: z.boolean().optional(),
  variants: z.boolean().optional(),
  tags: z.boolean().optional(),
  altText: z.boolean().optional(),
  description: z.boolean().optional(),
  uploadedBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  uploadedById: z.boolean().optional(),
  associatedId: z.boolean().optional(),
  associationType: z.boolean().optional(),
  sequence: z.boolean().optional(),
  org: z.union([z.boolean(), z.lazy(() => OrganizationArgsObjectSchema)]).optional(),
  orgId: z.boolean().optional(),
  post: z.union([z.boolean(), z.lazy(() => PostArgsObjectSchema)]).optional(),
  postId: z.boolean().optional(),
  profileUser: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  profileUserId: z.boolean().optional(),
  story: z.union([z.boolean(), z.lazy(() => StoryArgsObjectSchema)]).optional(),
  storyId: z.boolean().optional()
}).strict();
export const ImageSelectObjectSchema: z.ZodType<Prisma.ImageSelect> = makeSchema() as unknown as z.ZodType<Prisma.ImageSelect>;
export const ImageSelectObjectZodSchema = makeSchema();
