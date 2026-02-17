import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ImageUncheckedCreateNestedManyWithoutStoryInputObjectSchema as ImageUncheckedCreateNestedManyWithoutStoryInputObjectSchema } from './ImageUncheckedCreateNestedManyWithoutStoryInput.schema';
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
  Images: z.lazy(() => ImageUncheckedCreateNestedManyWithoutStoryInputObjectSchema).optional(),
  Files: z.lazy(() => FileUncheckedCreateNestedManyWithoutStoryInputObjectSchema).optional()
}).strict();
export const StoryUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.StoryUncheckedCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.StoryUncheckedCreateWithoutUserInput>;
export const StoryUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
