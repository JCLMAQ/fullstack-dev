import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ImageIncludeObjectSchema as ImageIncludeObjectSchema } from './objects/ImageInclude.schema';
import { ImageOrderByWithRelationInputObjectSchema as ImageOrderByWithRelationInputObjectSchema } from './objects/ImageOrderByWithRelationInput.schema';
import { ImageWhereInputObjectSchema as ImageWhereInputObjectSchema } from './objects/ImageWhereInput.schema';
import { ImageWhereUniqueInputObjectSchema as ImageWhereUniqueInputObjectSchema } from './objects/ImageWhereUniqueInput.schema';
import { ImageScalarFieldEnumSchema } from './enums/ImageScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ImageFindManySelectSchema: z.ZodType<Prisma.ImageSelect> = z.object({
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
    uploadedBy: z.boolean().optional(),
    uploadedById: z.boolean().optional(),
    associatedId: z.boolean().optional(),
    associationType: z.boolean().optional(),
    sequence: z.boolean().optional(),
    org: z.boolean().optional(),
    orgId: z.boolean().optional(),
    post: z.boolean().optional(),
    postId: z.boolean().optional(),
    profileUser: z.boolean().optional(),
    profileUserId: z.boolean().optional(),
    story: z.boolean().optional(),
    storyId: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ImageSelect>;

export const ImageFindManySelectZodSchema = z.object({
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
    uploadedBy: z.boolean().optional(),
    uploadedById: z.boolean().optional(),
    associatedId: z.boolean().optional(),
    associationType: z.boolean().optional(),
    sequence: z.boolean().optional(),
    org: z.boolean().optional(),
    orgId: z.boolean().optional(),
    post: z.boolean().optional(),
    postId: z.boolean().optional(),
    profileUser: z.boolean().optional(),
    profileUserId: z.boolean().optional(),
    story: z.boolean().optional(),
    storyId: z.boolean().optional()
  }).strict();

export const ImageFindManySchema: z.ZodType<Prisma.ImageFindManyArgs> = z.object({ select: ImageFindManySelectSchema.optional(), include: z.lazy(() => ImageIncludeObjectSchema.optional()), orderBy: z.union([ImageOrderByWithRelationInputObjectSchema, ImageOrderByWithRelationInputObjectSchema.array()]).optional(), where: ImageWhereInputObjectSchema.optional(), cursor: ImageWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ImageScalarFieldEnumSchema, ImageScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ImageFindManyArgs>;

export const ImageFindManyZodSchema = z.object({ select: ImageFindManySelectSchema.optional(), include: z.lazy(() => ImageIncludeObjectSchema.optional()), orderBy: z.union([ImageOrderByWithRelationInputObjectSchema, ImageOrderByWithRelationInputObjectSchema.array()]).optional(), where: ImageWhereInputObjectSchema.optional(), cursor: ImageWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ImageScalarFieldEnumSchema, ImageScalarFieldEnumSchema.array()]).optional() }).strict();