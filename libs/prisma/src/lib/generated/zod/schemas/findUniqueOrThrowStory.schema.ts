import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { StorySelectObjectSchema as StorySelectObjectSchema } from './objects/StorySelect.schema';
import { StoryIncludeObjectSchema as StoryIncludeObjectSchema } from './objects/StoryInclude.schema';
import { StoryWhereUniqueInputObjectSchema as StoryWhereUniqueInputObjectSchema } from './objects/StoryWhereUniqueInput.schema';

export const StoryFindUniqueOrThrowSchema: z.ZodType<Prisma.StoryFindUniqueOrThrowArgs> = z.object({ select: StorySelectObjectSchema.optional(), include: StoryIncludeObjectSchema.optional(), where: StoryWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.StoryFindUniqueOrThrowArgs>;

export const StoryFindUniqueOrThrowZodSchema = z.object({ select: StorySelectObjectSchema.optional(), include: StoryIncludeObjectSchema.optional(), where: StoryWhereUniqueInputObjectSchema }).strict();