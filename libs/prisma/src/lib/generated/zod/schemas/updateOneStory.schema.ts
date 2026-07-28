import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { StorySelectObjectSchema as StorySelectObjectSchema } from './objects/StorySelect.schema';
import { StoryIncludeObjectSchema as StoryIncludeObjectSchema } from './objects/StoryInclude.schema';
import { StoryUpdateInputObjectSchema as StoryUpdateInputObjectSchema } from './objects/StoryUpdateInput.schema';
import { StoryUncheckedUpdateInputObjectSchema as StoryUncheckedUpdateInputObjectSchema } from './objects/StoryUncheckedUpdateInput.schema';
import { StoryWhereUniqueInputObjectSchema as StoryWhereUniqueInputObjectSchema } from './objects/StoryWhereUniqueInput.schema';

export const StoryUpdateOneSchema: z.ZodType<Prisma.StoryUpdateArgs> = z.object({ select: StorySelectObjectSchema.optional(), include: StoryIncludeObjectSchema.optional(), data: z.union([StoryUpdateInputObjectSchema, StoryUncheckedUpdateInputObjectSchema]), where: StoryWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.StoryUpdateArgs>;

export const StoryUpdateOneZodSchema = z.object({ select: StorySelectObjectSchema.optional(), include: StoryIncludeObjectSchema.optional(), data: z.union([StoryUpdateInputObjectSchema, StoryUncheckedUpdateInputObjectSchema]), where: StoryWhereUniqueInputObjectSchema }).strict();