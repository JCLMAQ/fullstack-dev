import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ImageCountOrderByAggregateInputObjectSchema as ImageCountOrderByAggregateInputObjectSchema } from './ImageCountOrderByAggregateInput.schema';
import { ImageAvgOrderByAggregateInputObjectSchema as ImageAvgOrderByAggregateInputObjectSchema } from './ImageAvgOrderByAggregateInput.schema';
import { ImageMaxOrderByAggregateInputObjectSchema as ImageMaxOrderByAggregateInputObjectSchema } from './ImageMaxOrderByAggregateInput.schema';
import { ImageMinOrderByAggregateInputObjectSchema as ImageMinOrderByAggregateInputObjectSchema } from './ImageMinOrderByAggregateInput.schema';
import { ImageSumOrderByAggregateInputObjectSchema as ImageSumOrderByAggregateInputObjectSchema } from './ImageSumOrderByAggregateInput.schema'

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
  width: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  height: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  storageType: SortOrderSchema.optional(),
  storagePath: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  storageUrl: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  bucketName: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  isProcessed: SortOrderSchema.optional(),
  thumbnailUrl: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  variants: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  tags: SortOrderSchema.optional(),
  altText: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  uploadedById: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  associatedId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  associationType: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  sequence: SortOrderSchema.optional(),
  orgId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  postId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  profileUserId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  storyId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => ImageCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => ImageAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ImageMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ImageMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => ImageSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ImageOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ImageOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageOrderByWithAggregationInput>;
export const ImageOrderByWithAggregationInputObjectZodSchema = makeSchema();
