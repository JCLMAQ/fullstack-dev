import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { ImageCreatetagsInputObjectSchema as ImageCreatetagsInputObjectSchema } from './ImageCreatetagsInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

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
  width: z.number().int().optional().nullable(),
  height: z.number().int().optional().nullable(),
  storageType: z.string().optional(),
  storagePath: z.string().optional().nullable(),
  storageUrl: z.string().optional().nullable(),
  bucketName: z.string().optional().nullable(),
  isProcessed: z.boolean().optional(),
  thumbnailUrl: z.string().optional().nullable(),
  variants: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  tags: z.union([z.lazy(() => ImageCreatetagsInputObjectSchema), z.string().array()]).optional(),
  altText: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  uploadedById: z.string().optional().nullable(),
  associatedId: z.string().optional().nullable(),
  associationType: z.string().optional().nullable(),
  sequence: z.number().int().optional(),
  orgId: z.string().optional().nullable(),
  profileUserId: z.string().optional().nullable(),
  storyId: z.string().optional().nullable()
}).strict();
export const ImageUncheckedCreateWithoutPostInputObjectSchema: z.ZodType<Prisma.ImageUncheckedCreateWithoutPostInput> = makeSchema() as unknown as z.ZodType<Prisma.ImageUncheckedCreateWithoutPostInput>;
export const ImageUncheckedCreateWithoutPostInputObjectZodSchema = makeSchema();
