import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { StoryCreateManyInputObjectSchema as StoryCreateManyInputObjectSchema } from './objects/StoryCreateManyInput.schema';

export const StoryCreateManySchema: z.ZodType<Prisma.StoryCreateManyArgs> = z.object({ data: z.union([ StoryCreateManyInputObjectSchema, z.array(StoryCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.StoryCreateManyArgs>;

export const StoryCreateManyZodSchema = z.object({ data: z.union([ StoryCreateManyInputObjectSchema, z.array(StoryCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();