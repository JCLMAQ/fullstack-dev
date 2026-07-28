import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { FileCreatetagsInputObjectSchema as FileCreatetagsInputObjectSchema } from './FileCreatetagsInput.schema';
import { TagValueCreateNestedManyWithoutFilesInputObjectSchema as TagValueCreateNestedManyWithoutFilesInputObjectSchema } from './TagValueCreateNestedManyWithoutFilesInput.schema';
import { UserCreateNestedOneWithoutOwnedFilesInputObjectSchema as UserCreateNestedOneWithoutOwnedFilesInputObjectSchema } from './UserCreateNestedOneWithoutOwnedFilesInput.schema';
import { UserCreateNestedOneWithoutUploadedFilesInputObjectSchema as UserCreateNestedOneWithoutUploadedFilesInputObjectSchema } from './UserCreateNestedOneWithoutUploadedFilesInput.schema';
import { OrganizationCreateNestedOneWithoutFilesInputObjectSchema as OrganizationCreateNestedOneWithoutFilesInputObjectSchema } from './OrganizationCreateNestedOneWithoutFilesInput.schema';
import { GroupCreateNestedManyWithoutFilesInputObjectSchema as GroupCreateNestedManyWithoutFilesInputObjectSchema } from './GroupCreateNestedManyWithoutFilesInput.schema';
import { PostCreateNestedOneWithoutFilesInputObjectSchema as PostCreateNestedOneWithoutFilesInputObjectSchema } from './PostCreateNestedOneWithoutFilesInput.schema';
import { StoryCreateNestedOneWithoutFilesInputObjectSchema as StoryCreateNestedOneWithoutFilesInputObjectSchema } from './StoryCreateNestedOneWithoutFilesInput.schema';
import { UserCreateNestedOneWithoutProfileFilesInputObjectSchema as UserCreateNestedOneWithoutProfileFilesInputObjectSchema } from './UserCreateNestedOneWithoutProfileFilesInput.schema';
import { CommentCreateNestedOneWithoutFilesInputObjectSchema as CommentCreateNestedOneWithoutFilesInputObjectSchema } from './CommentCreateNestedOneWithoutFilesInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  numSeq: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
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
  associatedId: z.string().optional().nullable(),
  associationType: z.string().optional().nullable(),
  Tags: z.lazy(() => TagValueCreateNestedManyWithoutFilesInputObjectSchema).optional(),
  owner: z.lazy(() => UserCreateNestedOneWithoutOwnedFilesInputObjectSchema),
  uploadedBy: z.lazy(() => UserCreateNestedOneWithoutUploadedFilesInputObjectSchema).optional(),
  org: z.lazy(() => OrganizationCreateNestedOneWithoutFilesInputObjectSchema).optional(),
  groups: z.lazy(() => GroupCreateNestedManyWithoutFilesInputObjectSchema).optional(),
  post: z.lazy(() => PostCreateNestedOneWithoutFilesInputObjectSchema).optional(),
  story: z.lazy(() => StoryCreateNestedOneWithoutFilesInputObjectSchema).optional(),
  profileUser: z.lazy(() => UserCreateNestedOneWithoutProfileFilesInputObjectSchema).optional(),
  comment: z.lazy(() => CommentCreateNestedOneWithoutFilesInputObjectSchema).optional()
}).strict();
export const FileCreateInputObjectSchema: z.ZodType<Prisma.FileCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.FileCreateInput>;
export const FileCreateInputObjectZodSchema = makeSchema();
