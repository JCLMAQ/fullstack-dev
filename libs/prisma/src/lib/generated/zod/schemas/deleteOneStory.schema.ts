import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { StorySelectObjectSchema as StorySelectObjectSchema } from './objects/StorySelect.schema';
import { StoryIncludeObjectSchema as StoryIncludeObjectSchema } from './objects/StoryInclude.schema';
import { StoryWhereUniqueInputObjectSchema as StoryWhereUniqueInputObjectSchema } from './objects/StoryWhereUniqueInput.schema';

export const StoryDeleteOneSchema: z.ZodType<Prisma.StoryDeleteArgs> = z.object({ select: StorySelectObjectSchema.optional(), include: StoryIncludeObjectSchema.optional(), where: StoryWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.StoryDeleteArgs>;

export const StoryDeleteOneZodSchema = z.object({ select: StorySelectObjectSchema.optional(), include: StoryIncludeObjectSchema.optional(), where: StoryWhereUniqueInputObjectSchema }).strict();