import * as z from 'zod';

export const ImageScalarFieldEnumSchema = z.enum(['id', 'numSeq', 'createdAt', 'updatedAt', 'published', 'isPublic', 'isDeleted', 'isDeletedDT', 'filename', 'originalName', 'mimeType', 'fileSize', 'width', 'height', 'storageType', 'storagePath', 'storageUrl', 'bucketName', 'isProcessed', 'thumbnailUrl', 'variants', 'tags', 'altText', 'description', 'uploadedById', 'associatedId', 'associationType', 'sequence', 'orgId', 'postId', 'profileUserId', 'storyId'])

export type ImageScalarFieldEnum = z.infer<typeof ImageScalarFieldEnumSchema>;