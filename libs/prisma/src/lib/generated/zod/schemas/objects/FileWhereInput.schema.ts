import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { BytesNullableFilterObjectSchema as BytesNullableFilterObjectSchema } from './BytesNullableFilter.schema';
import { StringNullableListFilterObjectSchema as StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { TagValueListRelationFilterObjectSchema as TagValueListRelationFilterObjectSchema } from './TagValueListRelationFilter.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserNullableScalarRelationFilterObjectSchema as UserNullableScalarRelationFilterObjectSchema } from './UserNullableScalarRelationFilter.schema';
import { OrganizationNullableScalarRelationFilterObjectSchema as OrganizationNullableScalarRelationFilterObjectSchema } from './OrganizationNullableScalarRelationFilter.schema';
import { OrganizationWhereInputObjectSchema as OrganizationWhereInputObjectSchema } from './OrganizationWhereInput.schema';
import { GroupListRelationFilterObjectSchema as GroupListRelationFilterObjectSchema } from './GroupListRelationFilter.schema';
import { PostNullableScalarRelationFilterObjectSchema as PostNullableScalarRelationFilterObjectSchema } from './PostNullableScalarRelationFilter.schema';
import { PostWhereInputObjectSchema as PostWhereInputObjectSchema } from './PostWhereInput.schema';
import { StoryNullableScalarRelationFilterObjectSchema as StoryNullableScalarRelationFilterObjectSchema } from './StoryNullableScalarRelationFilter.schema';
import { StoryWhereInputObjectSchema as StoryWhereInputObjectSchema } from './StoryWhereInput.schema';
import { CommentNullableScalarRelationFilterObjectSchema as CommentNullableScalarRelationFilterObjectSchema } from './CommentNullableScalarRelationFilter.schema';
import { CommentWhereInputObjectSchema as CommentWhereInputObjectSchema } from './CommentWhereInput.schema'

const filewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => FileWhereInputObjectSchema), z.lazy(() => FileWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => FileWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => FileWhereInputObjectSchema), z.lazy(() => FileWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  numSeq: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  published: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  isPublic: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  isDeleted: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  isDeletedDT: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  filename: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  originalName: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  mimeType: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  fileSize: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  extension: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  encoding: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  storageType: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  storagePath: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  storageUrl: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  bucketName: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  storageName: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  binaryData: z.union([z.lazy(() => BytesNullableFilterObjectSchema), z.instanceof(Uint8Array)]).optional().nullable(),
  category: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  tags: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  version: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  checksum: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  isProcessed: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  processingStatus: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  virusScanStatus: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  ocrText: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  isPublicDownload: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  downloadCount: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  lastAccessedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  expiresAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  isArchived: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  name: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  type: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  data: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  size: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  ownerId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  uploadedById: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  associatedId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  associationType: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  orgId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  postId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  storyId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  profileUserId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  commentId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  Tags: z.lazy(() => TagValueListRelationFilterObjectSchema).optional(),
  owner: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  uploadedBy: z.union([z.lazy(() => UserNullableScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  org: z.union([z.lazy(() => OrganizationNullableScalarRelationFilterObjectSchema), z.lazy(() => OrganizationWhereInputObjectSchema)]).optional(),
  groups: z.lazy(() => GroupListRelationFilterObjectSchema).optional(),
  post: z.union([z.lazy(() => PostNullableScalarRelationFilterObjectSchema), z.lazy(() => PostWhereInputObjectSchema)]).optional(),
  story: z.union([z.lazy(() => StoryNullableScalarRelationFilterObjectSchema), z.lazy(() => StoryWhereInputObjectSchema)]).optional(),
  profileUser: z.union([z.lazy(() => UserNullableScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  comment: z.union([z.lazy(() => CommentNullableScalarRelationFilterObjectSchema), z.lazy(() => CommentWhereInputObjectSchema)]).optional()
}).strict();
export const FileWhereInputObjectSchema: z.ZodType<Prisma.FileWhereInput> = filewhereinputSchema as unknown as z.ZodType<Prisma.FileWhereInput>;
export const FileWhereInputObjectZodSchema = filewhereinputSchema;
