import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableBytesFieldUpdateOperationsInputObjectSchema as NullableBytesFieldUpdateOperationsInputObjectSchema } from './NullableBytesFieldUpdateOperationsInput.schema';
import { FileUpdatetagsInputObjectSchema as FileUpdatetagsInputObjectSchema } from './FileUpdatetagsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutOwnedFilesNestedInputObjectSchema as UserUpdateOneRequiredWithoutOwnedFilesNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutOwnedFilesNestedInput.schema';
import { UserUpdateOneWithoutUploadedFilesNestedInputObjectSchema as UserUpdateOneWithoutUploadedFilesNestedInputObjectSchema } from './UserUpdateOneWithoutUploadedFilesNestedInput.schema';
import { OrganizationUpdateOneWithoutFilesNestedInputObjectSchema as OrganizationUpdateOneWithoutFilesNestedInputObjectSchema } from './OrganizationUpdateOneWithoutFilesNestedInput.schema';
import { GroupUpdateManyWithoutFilesNestedInputObjectSchema as GroupUpdateManyWithoutFilesNestedInputObjectSchema } from './GroupUpdateManyWithoutFilesNestedInput.schema';
import { PostUpdateOneWithoutFilesNestedInputObjectSchema as PostUpdateOneWithoutFilesNestedInputObjectSchema } from './PostUpdateOneWithoutFilesNestedInput.schema';
import { StoryUpdateOneWithoutFilesNestedInputObjectSchema as StoryUpdateOneWithoutFilesNestedInputObjectSchema } from './StoryUpdateOneWithoutFilesNestedInput.schema';
import { UserUpdateOneWithoutProfileFilesNestedInputObjectSchema as UserUpdateOneWithoutProfileFilesNestedInputObjectSchema } from './UserUpdateOneWithoutProfileFilesNestedInput.schema';
import { CommentUpdateOneWithoutFilesNestedInputObjectSchema as CommentUpdateOneWithoutFilesNestedInputObjectSchema } from './CommentUpdateOneWithoutFilesNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  numSeq: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  published: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  isPublic: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  isDeleted: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  isDeletedDT: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  filename: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  originalName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  mimeType: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  fileSize: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  extension: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  encoding: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  storageType: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  storagePath: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  storageUrl: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  bucketName: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  storageName: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  binaryData: z.union([z.instanceof(Uint8Array), z.lazy(() => NullableBytesFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  category: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  tags: z.union([z.lazy(() => FileUpdatetagsInputObjectSchema), z.string().array()]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  version: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  checksum: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  isProcessed: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  processingStatus: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  virusScanStatus: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  ocrText: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  isPublicDownload: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  downloadCount: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  lastAccessedAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  expiresAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  isArchived: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  name: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  type: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  data: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  size: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  associatedId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  associationType: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  owner: z.lazy(() => UserUpdateOneRequiredWithoutOwnedFilesNestedInputObjectSchema).optional(),
  uploadedBy: z.lazy(() => UserUpdateOneWithoutUploadedFilesNestedInputObjectSchema).optional(),
  org: z.lazy(() => OrganizationUpdateOneWithoutFilesNestedInputObjectSchema).optional(),
  groups: z.lazy(() => GroupUpdateManyWithoutFilesNestedInputObjectSchema).optional(),
  post: z.lazy(() => PostUpdateOneWithoutFilesNestedInputObjectSchema).optional(),
  story: z.lazy(() => StoryUpdateOneWithoutFilesNestedInputObjectSchema).optional(),
  profileUser: z.lazy(() => UserUpdateOneWithoutProfileFilesNestedInputObjectSchema).optional(),
  comment: z.lazy(() => CommentUpdateOneWithoutFilesNestedInputObjectSchema).optional()
}).strict();
export const FileUpdateWithoutTagsInputObjectSchema: z.ZodType<Prisma.FileUpdateWithoutTagsInput> = makeSchema() as unknown as z.ZodType<Prisma.FileUpdateWithoutTagsInput>;
export const FileUpdateWithoutTagsInputObjectZodSchema = makeSchema();
