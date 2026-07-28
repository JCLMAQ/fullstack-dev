import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { FileCountOrderByAggregateInputObjectSchema as FileCountOrderByAggregateInputObjectSchema } from './FileCountOrderByAggregateInput.schema';
import { FileAvgOrderByAggregateInputObjectSchema as FileAvgOrderByAggregateInputObjectSchema } from './FileAvgOrderByAggregateInput.schema';
import { FileMaxOrderByAggregateInputObjectSchema as FileMaxOrderByAggregateInputObjectSchema } from './FileMaxOrderByAggregateInput.schema';
import { FileMinOrderByAggregateInputObjectSchema as FileMinOrderByAggregateInputObjectSchema } from './FileMinOrderByAggregateInput.schema';
import { FileSumOrderByAggregateInputObjectSchema as FileSumOrderByAggregateInputObjectSchema } from './FileSumOrderByAggregateInput.schema'

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
  _count: z.lazy(() => FileCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => FileAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => FileMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => FileMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => FileSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const FileOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.FileOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.FileOrderByWithAggregationInput>;
export const FileOrderByWithAggregationInputObjectZodSchema = makeSchema();
