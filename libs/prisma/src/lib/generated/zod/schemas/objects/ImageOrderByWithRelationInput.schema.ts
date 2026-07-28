import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { OrganizationOrderByWithRelationInputObjectSchema as OrganizationOrderByWithRelationInputObjectSchema } from './OrganizationOrderByWithRelationInput.schema';
import { PostOrderByWithRelationInputObjectSchema as PostOrderByWithRelationInputObjectSchema } from './PostOrderByWithRelationInput.schema';
import { StoryOrderByWithRelationInputObjectSchema as StoryOrderByWithRelationInputObjectSchema } from './StoryOrderByWithRelationInput.schema'

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
  uploadedBy: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  org: z.lazy(() => OrganizationOrderByWithRelationInputObjectSchema).optional(),
  post: z.lazy(() => PostOrderByWithRelationInputObjectSchema).optional(),
  profileUser: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  story: z.lazy(() => StoryOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const ImageOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ImageOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageOrderByWithRelationInput>;
export const ImageOrderByWithRelationInputObjectZodSchema = makeSchema();
