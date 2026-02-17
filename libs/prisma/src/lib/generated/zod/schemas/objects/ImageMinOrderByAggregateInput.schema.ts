import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  numSeq: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  published: SortOrderSchema.optional(),
  isPublic: SortOrderSchema.optional(),
  isDeleted: SortOrderSchema.optional(),
  isDeletedDT: SortOrderSchema.optional(),
  filename: SortOrderSchema.optional(),
  originalName: SortOrderSchema.optional(),
  mimeType: SortOrderSchema.optional(),
  fileSize: SortOrderSchema.optional(),
  width: SortOrderSchema.optional(),
  height: SortOrderSchema.optional(),
  storageType: SortOrderSchema.optional(),
  storagePath: SortOrderSchema.optional(),
  storageUrl: SortOrderSchema.optional(),
  bucketName: SortOrderSchema.optional(),
  isProcessed: SortOrderSchema.optional(),
  thumbnailUrl: SortOrderSchema.optional(),
  altText: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  uploadedById: SortOrderSchema.optional(),
  associatedId: SortOrderSchema.optional(),
  associationType: SortOrderSchema.optional(),
  sequence: SortOrderSchema.optional(),
  orgId: SortOrderSchema.optional(),
  postId: SortOrderSchema.optional(),
  profileUserId: SortOrderSchema.optional(),
  storyId: SortOrderSchema.optional()
}).strict();
export const ImageMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ImageMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageMinOrderByAggregateInput>;
export const ImageMinOrderByAggregateInputObjectZodSchema = makeSchema();
