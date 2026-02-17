import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  numSeq: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  published: z.literal(true).optional(),
  isPublic: z.literal(true).optional(),
  isDeleted: z.literal(true).optional(),
  isDeletedDT: z.literal(true).optional(),
  filename: z.literal(true).optional(),
  originalName: z.literal(true).optional(),
  mimeType: z.literal(true).optional(),
  fileSize: z.literal(true).optional(),
  width: z.literal(true).optional(),
  height: z.literal(true).optional(),
  storageType: z.literal(true).optional(),
  storagePath: z.literal(true).optional(),
  storageUrl: z.literal(true).optional(),
  bucketName: z.literal(true).optional(),
  isProcessed: z.literal(true).optional(),
  thumbnailUrl: z.literal(true).optional(),
  altText: z.literal(true).optional(),
  description: z.literal(true).optional(),
  uploadedById: z.literal(true).optional(),
  associatedId: z.literal(true).optional(),
  associationType: z.literal(true).optional(),
  sequence: z.literal(true).optional(),
  orgId: z.literal(true).optional(),
  postId: z.literal(true).optional(),
  profileUserId: z.literal(true).optional(),
  storyId: z.literal(true).optional()
}).strict();
export const ImageMaxAggregateInputObjectSchema: z.ZodType<Prisma.ImageMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ImageMaxAggregateInputType>;
export const ImageMaxAggregateInputObjectZodSchema = makeSchema();
