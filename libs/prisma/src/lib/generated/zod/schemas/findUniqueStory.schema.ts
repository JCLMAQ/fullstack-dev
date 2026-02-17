import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { StorySelectObjectSchema as StorySelectObjectSchema } from './objects/StorySelect.schema';
import { StoryIncludeObjectSchema as StoryIncludeObjectSchema } from './objects/StoryInclude.schema';
import { StoryWhereUniqueInputObjectSchema as StoryWhereUniqueInputObjectSchema } from './objects/StoryWhereUniqueInput.schema';

export const StoryFindUniqueSchema: z.ZodType<Prisma.StoryFindUniqueArgs> = z.object({ select: StorySelectObjectSchema.optional(), include: StoryIncludeObjectSchema.optional(), where: StoryWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.StoryFindUniqueArgs>;

export const StoryFindUniqueZodSchema = z.object({ select: StorySelectObjectSchema.optional(), include: StoryIncludeObjectSchema.optional(), where: StoryWhereUniqueInputObjectSchema }).strict();