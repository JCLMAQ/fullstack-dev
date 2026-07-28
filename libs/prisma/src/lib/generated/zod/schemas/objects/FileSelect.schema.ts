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
  extension: z.boolean().optional(),
  encoding: z.boolean().optional(),
  storageType: z.boolean().optional(),
  storagePath: z.boolean().optional(),
  storageUrl: z.boolean().optional(),
  bucketName: z.boolean().optional(),
  storageName: z.boolean().optional(),
  binaryData: z.boolean().optional(),
  category: z.boolean().optional(),
  tags: z.boolean().optional(),
  Tags: z.union([z.boolean(), z.lazy(() => TagValueFindManySchema)]).optional(),
  description: z.boolean().optional(),
  version: z.boolean().optional(),
  checksum: z.boolean().optional(),
  isProcessed: z.boolean().optional(),
  processingStatus: z.boolean().optional(),
  virusScanStatus: z.boolean().optional(),
  ocrText: z.boolean().optional(),
  isPublicDownload: z.boolean().optional(),
  downloadCount: z.boolean().optional(),
  lastAccessedAt: z.boolean().optional(),
  expiresAt: z.boolean().optional(),
  isArchived: z.boolean().optional(),
  name: z.boolean().optional(),
  type: z.boolean().optional(),
  data: z.boolean().optional(),
  size: z.boolean().optional(),
  owner: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  ownerId: z.boolean().optional(),
  uploadedBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  uploadedById: z.boolean().optional(),
  associatedId: z.boolean().optional(),
  associationType: z.boolean().optional(),
  org: z.union([z.boolean(), z.lazy(() => OrganizationArgsObjectSchema)]).optional(),
  orgId: z.boolean().optional(),
  groups: z.union([z.boolean(), z.lazy(() => GroupFindManySchema)]).optional(),
  post: z.union([z.boolean(), z.lazy(() => PostArgsObjectSchema)]).optional(),
  postId: z.boolean().optional(),
  story: z.union([z.boolean(), z.lazy(() => StoryArgsObjectSchema)]).optional(),
  storyId: z.boolean().optional(),
  profileUser: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  profileUserId: z.boolean().optional(),
  comment: z.union([z.boolean(), z.lazy(() => CommentArgsObjectSchema)]).optional(),
  commentId: z.boolean().optional(),
  _count: z.union([z.boolean(), z.lazy(() => FileCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const FileSelectObjectSchema: z.ZodType<Prisma.FileSelect> = makeSchema() as unknown as z.ZodType<Prisma.FileSelect>;
export const FileSelectObjectZodSchema = makeSchema();
