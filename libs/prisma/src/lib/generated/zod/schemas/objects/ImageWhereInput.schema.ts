import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { JsonNullableFilterObjectSchema as JsonNullableFilterObjectSchema } from './JsonNullableFilter.schema';
import { StringNullableListFilterObjectSchema as StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema';
import { UserNullableScalarRelationFilterObjectSchema as UserNullableScalarRelationFilterObjectSchema } from './UserNullableScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { OrganizationNullableScalarRelationFilterObjectSchema as OrganizationNullableScalarRelationFilterObjectSchema } from './OrganizationNullableScalarRelationFilter.schema';
import { OrganizationWhereInputObjectSchema as OrganizationWhereInputObjectSchema } from './OrganizationWhereInput.schema';
import { PostNullableScalarRelationFilterObjectSchema as PostNullableScalarRelationFilterObjectSchema } from './PostNullableScalarRelationFilter.schema';
import { PostWhereInputObjectSchema as PostWhereInputObjectSchema } from './PostWhereInput.schema';
import { StoryNullableScalarRelationFilterObjectSchema as StoryNullableScalarRelationFilterObjectSchema } from './StoryNullableScalarRelationFilter.schema';
import { StoryWhereInputObjectSchema as StoryWhereInputObjectSchema } from './StoryWhereInput.schema'

const imagewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ImageWhereInputObjectSchema), z.lazy(() => ImageWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ImageWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ImageWhereInputObjectSchema), z.lazy(() => ImageWhereInputObjectSchema).array()]).optional(),
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
  width: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  height: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  storageType: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  storagePath: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  storageUrl: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  bucketName: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  isProcessed: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  thumbnailUrl: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  variants: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  tags: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  altText: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  uploadedById: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  associatedId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  associationType: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  sequence: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  orgId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  postId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  profileUserId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  storyId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  uploadedBy: z.union([z.lazy(() => UserNullableScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  org: z.union([z.lazy(() => OrganizationNullableScalarRelationFilterObjectSchema), z.lazy(() => OrganizationWhereInputObjectSchema)]).optional(),
  post: z.union([z.lazy(() => PostNullableScalarRelationFilterObjectSchema), z.lazy(() => PostWhereInputObjectSchema)]).optional(),
  profileUser: z.union([z.lazy(() => UserNullableScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  story: z.union([z.lazy(() => StoryNullableScalarRelationFilterObjectSchema), z.lazy(() => StoryWhereInputObjectSchema)]).optional()
}).strict();
export const ImageWhereInputObjectSchema: z.ZodType<Prisma.ImageWhereInput> = imagewhereinputSchema as unknown as z.ZodType<Prisma.ImageWhereInput>;
export const ImageWhereInputObjectZodSchema = imagewhereinputSchema;
