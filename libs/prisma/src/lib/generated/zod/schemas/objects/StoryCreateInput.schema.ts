import * as z from 'zod';
import type { Prisma } from '../../../prisma/browser';
import { UserCreateNestedOneWithoutStoriesInputObjectSchema as UserCreateNestedOneWithoutStoriesInputObjectSchema } from './UserCreateNestedOneWithoutStoriesInput.schema';
import { ImageCreateNestedManyWithoutStoryInputObjectSchema as ImageCreateNestedManyWithoutStoryInputObjectSchema } from './ImageCreateNestedManyWithoutStoryInput.schema';
import { FileCreateNestedManyWithoutStoryInputObjectSchema as FileCreateNestedManyWithoutStoryInputObjectSchema } from './FileCreateNestedManyWithoutStoryInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  numSeq: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  published: z.boolean().optional().nullable(),
  isPublic: z.boolean().optional().nullable(),
  isDeleted: z.number().int().optional().nullable(),
  isDeletedDT: z.coerce.date().optional().nullable(),
  caption: z.string(),
  user: z.lazy(() => UserCreateNestedOneWithoutStoriesInputObjectSchema),
  Images: z.lazy(() => ImageCreateNestedManyWithoutStoryInputObjectSchema).optional(),
  Files: z.lazy(() => FileCreateNestedManyWithoutStoryInputObjectSchema).optional()
}).strict();
export const StoryCreateInputObjectSchema: z.ZodType<Prisma.StoryCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.StoryCreateInput>;
export const StoryCreateInputObjectZodSchema = makeSchema();
