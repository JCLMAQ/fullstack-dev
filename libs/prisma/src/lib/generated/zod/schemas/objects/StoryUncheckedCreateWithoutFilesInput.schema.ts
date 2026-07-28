import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { ImageUncheckedCreateNestedManyWithoutStoryInputObjectSchema as ImageUncheckedCreateNestedManyWithoutStoryInputObjectSchema } from './ImageUncheckedCreateNestedManyWithoutStoryInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  numSeq: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  published: z.boolean().optional().nullable(),
  isPublic: z.boolean().optional().nullable(),
  isDeleted: z.number().int().optional().nullable(),
  isDeletedDT: z.coerce.date().optional().nullable(),
  caption: z.string(),
  user_id: z.string(),
  Images: z.lazy(() => ImageUncheckedCreateNestedManyWithoutStoryInputObjectSchema).optional()
}).strict();
export const StoryUncheckedCreateWithoutFilesInputObjectSchema: z.ZodType<Prisma.StoryUncheckedCreateWithoutFilesInput> = makeSchema() as unknown as z.ZodType<Prisma.StoryUncheckedCreateWithoutFilesInput>;
export const StoryUncheckedCreateWithoutFilesInputObjectZodSchema = makeSchema();
