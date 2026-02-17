import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { FileUncheckedCreateNestedManyWithoutStoryInputObjectSchema as FileUncheckedCreateNestedManyWithoutStoryInputObjectSchema } from './FileUncheckedCreateNestedManyWithoutStoryInput.schema'

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
  Files: z.lazy(() => FileUncheckedCreateNestedManyWithoutStoryInputObjectSchema).optional()
}).strict();
export const StoryUncheckedCreateWithoutImagesInputObjectSchema: z.ZodType<Prisma.StoryUncheckedCreateWithoutImagesInput> = makeSchema() as unknown as z.ZodType<Prisma.StoryUncheckedCreateWithoutImagesInput>;
export const StoryUncheckedCreateWithoutImagesInputObjectZodSchema = makeSchema();
