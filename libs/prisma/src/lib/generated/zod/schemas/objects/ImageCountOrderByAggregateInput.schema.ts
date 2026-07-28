import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
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
  variants: SortOrderSchema.optional(),
  tags: SortOrderSchema.optional(),
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
export const ImageCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ImageCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageCountOrderByAggregateInput>;
export const ImageCountOrderByAggregateInputObjectZodSchema = makeSchema();
