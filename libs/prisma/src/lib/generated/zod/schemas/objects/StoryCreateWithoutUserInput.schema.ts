import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { ImageCreateNestedManyWithoutStoryInputObjectSchema as ImageCreateNestedManyWithoutStoryInputObjectSchema } from './ImageCreateNestedManyWithoutStoryInput.schema';
import { FileCreateNestedManyWithoutStoryInputObjectSchema as FileCreateNestedManyWithoutStoryInputObjectSchema } from './FileCreateNestedManyWithoutStoryInput.schema'

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
  Images: z.lazy(() => ImageCreateNestedManyWithoutStoryInputObjectSchema).optional(),
  Files: z.lazy(() => FileCreateNestedManyWithoutStoryInputObjectSchema).optional()
}).strict();
export const StoryCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.StoryCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.StoryCreateWithoutUserInput>;
export const StoryCreateWithoutUserInputObjectZodSchema = makeSchema();
