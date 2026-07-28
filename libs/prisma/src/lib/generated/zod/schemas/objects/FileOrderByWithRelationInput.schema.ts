import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TagValueOrderByRelationAggregateInputObjectSchema as TagValueOrderByRelationAggregateInputObjectSchema } from './TagValueOrderByRelationAggregateInput.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { OrganizationOrderByWithRelationInputObjectSchema as OrganizationOrderByWithRelationInputObjectSchema } from './OrganizationOrderByWithRelationInput.schema';
import { GroupOrderByRelationAggregateInputObjectSchema as GroupOrderByRelationAggregateInputObjectSchema } from './GroupOrderByRelationAggregateInput.schema';
import { PostOrderByWithRelationInputObjectSchema as PostOrderByWithRelationInputObjectSchema } from './PostOrderByWithRelationInput.schema';
import { StoryOrderByWithRelationInputObjectSchema as StoryOrderByWithRelationInputObjectSchema } from './StoryOrderByWithRelationInput.schema';
import { CommentOrderByWithRelationInputObjectSchema as CommentOrderByWithRelationInputObjectSchema } from './CommentOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  numSeq: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  published: SortOrderSchema.optional(),
  isPublic: SortOrderSchema.optional(),
  isDeleted: SortOrderSchema.optional(),
  isDeletedDT: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  filename: SortOrderSchema.optional(),
  originalName: SortOrderSchema.optional(),
  mimeType: SortOrderSchema.optional(),
  fileSize: SortOrderSchema.optional(),
  extension: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  encoding: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  storageType: SortOrderSchema.optional(),
  storagePath: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  storageUrl: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  bucketName: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  storageName: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  binaryData: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  category: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  tags: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  version: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  checksum: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  isProcessed: SortOrderSchema.optional(),
  processingStatus: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  virusScanStatus: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  ocrText: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  isPublicDownload: SortOrderSchema.optional(),
  downloadCount: SortOrderSchema.optional(),
  lastAccessedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  expiresAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  isArchived: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  name: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  type: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  data: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  size: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  ownerId: SortOrderSchema.optional(),
  uploadedById: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  associatedId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  associationType: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  orgId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  postId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  storyId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  profileUserId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  commentId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Tags: z.lazy(() => TagValueOrderByRelationAggregateInputObjectSchema).optional(),
  owner: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  uploadedBy: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  org: z.lazy(() => OrganizationOrderByWithRelationInputObjectSchema).optional(),
  groups: z.lazy(() => GroupOrderByRelationAggregateInputObjectSchema).optional(),
  post: z.lazy(() => PostOrderByWithRelationInputObjectSchema).optional(),
  story: z.lazy(() => StoryOrderByWithRelationInputObjectSchema).optional(),
  profileUser: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  comment: z.lazy(() => CommentOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const FileOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.FileOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.FileOrderByWithRelationInput>;
export const FileOrderByWithRelationInputObjectZodSchema = makeSchema();
