import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


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
  user_id: z.string()
}).strict();
export const StoryCreateManyInputObjectSchema: z.ZodType<Prisma.StoryCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.StoryCreateManyInput>;
export const StoryCreateManyInputObjectZodSchema = makeSchema();
