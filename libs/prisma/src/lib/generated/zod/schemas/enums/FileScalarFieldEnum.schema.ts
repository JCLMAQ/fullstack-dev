import * as z from 'zod';

export const FileScalarFieldEnumSchema = z.enum(['id', 'numSeq', 'createdAt', 'updatedAt', 'published', 'isPublic', 'isDeleted', 'isDeletedDT', 'filename', 'originalName', 'mimeType', 'fileSize', 'extension', 'encoding', 'storageType', 'storagePath', 'storageUrl', 'bucketName', 'storageName', 'binaryData', 'category', 'tags', 'description', 'version', 'checksum', 'isProcessed', 'processingStatus', 'virusScanStatus', 'ocrText', 'isPublicDownload', 'downloadCount', 'lastAccessedAt', 'expiresAt', 'isArchived', 'name', 'type', 'data', 'size', 'ownerId', 'uploadedById', 'associatedId', 'associationType', 'orgId', 'postId', 'storyId', 'profileUserId', 'commentId'])

export type FileScalarFieldEnum = z.infer<typeof FileScalarFieldEnumSchema>;