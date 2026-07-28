import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { FileCreatetagsInputObjectSchema as FileCreatetagsInputObjectSchema } from './FileCreatetagsInput.schema';
import { TagValueUncheckedCreateNestedManyWithoutFilesInputObjectSchema as TagValueUncheckedCreateNestedManyWithoutFilesInputObjectSchema } from './TagValueUncheckedCreateNestedManyWithoutFilesInput.schema';
import { GroupUncheckedCreateNestedManyWithoutFilesInputObjectSchema as GroupUncheckedCreateNestedManyWithoutFilesInputObjectSchema } from './GroupUncheckedCreateNestedManyWithoutFilesInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  numSeq: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  published: z.boolean().optional(),
  isPublic: z.boolean().optional(),
  isDeleted: z.number().int().optional(),
  isDeletedDT: z.coerce.date().optional().nullable(),
  filename: z.string(),
  originalName: z.string(),
  mimeType: z.string(),
  fileSize: z.number().int(),
  extension: z.string().optional().nullable(),
  encoding: z.string().optional().nullable(),
  storageType: z.string().optional(),
  storagePath: z.string().optional().nullable(),
  storageUrl: z.string().optional().nullable(),
  bucketName: z.string().optional().nullable(),
  storageName: z.string().optional().nullable(),
  binaryData: z.instanceof(Uint8Array).optional().nullable(),
  category: z.string().optional().nullable(),
  tags: z.union([z.lazy(() => FileCreatetagsInputObjectSchema), z.string().array()]).optional(),
  description: z.string().optional().nullable(),
  version: z.string().optional().nullable(),
  checksum: z.string().optional().nullable(),
  isProcessed: z.boolean().optional(),
  processingStatus: z.string().optional().nullable(),
  virusScanStatus: z.string().optional().nullable(),
  ocrText: z.string().optional().nullable(),
  isPublicDownload: z.boolean().optional(),
  downloadCount: z.number().int().optional(),
  lastAccessedAt: z.coerce.date().optional().nullable(),
  expiresAt: z.coerce.date().optional().nullable(),
  isArchived: z.coerce.date().optional().nullable(),
  name: z.string().optional().nullable(),
  type: z.string().optional().nullable(),
  data: z.string().optional().nullable(),
  size: z.number().int().optional().nullable(),
  ownerId: z.string(),
  uploadedById: z.string().optional().nullable(),
  associatedId: z.string().optional().nullable(),
  associationType: z.string().optional().nullable(),
  orgId: z.string().optional().nullable(),
  postId: z.string().optional().nullable(),
  storyId: z.string().optional().nullable(),
  commentId: z.string().optional().nullable(),
  Tags: z.lazy(() => TagValueUncheckedCreateNestedManyWithoutFilesInputObjectSchema).optional(),
  groups: z.lazy(() => GroupUncheckedCreateNestedManyWithoutFilesInputObjectSchema).optional()
}).strict();
export const FileUncheckedCreateWithoutProfileUserInputObjectSchema: z.ZodType<Prisma.FileUncheckedCreateWithoutProfileUserInput> = makeSchema() as unknown as z.ZodType<Prisma.FileUncheckedCreateWithoutProfileUserInput>;
export const FileUncheckedCreateWithoutProfileUserInputObjectZodSchema = makeSchema();
