import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { StorySelectObjectSchema as StorySelectObjectSchema } from './objects/StorySelect.schema';
import { StoryCreateManyInputObjectSchema as StoryCreateManyInputObjectSchema } from './objects/StoryCreateManyInput.schema';

export const StoryCreateManyAndReturnSchema: z.ZodType<Prisma.StoryCreateManyAndReturnArgs> = z.object({ select: StorySelectObjectSchema.optional(), data: z.union([ StoryCreateManyInputObjectSchema, z.array(StoryCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.StoryCreateManyAndReturnArgs>;

export const StoryCreateManyAndReturnZodSchema = z.object({ select: StorySelectObjectSchema.optional(), data: z.union([ StoryCreateManyInputObjectSchema, z.array(StoryCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();