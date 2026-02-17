import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { StorySelectObjectSchema as StorySelectObjectSchema } from './objects/StorySelect.schema';
import { StoryIncludeObjectSchema as StoryIncludeObjectSchema } from './objects/StoryInclude.schema';
import { StoryCreateInputObjectSchema as StoryCreateInputObjectSchema } from './objects/StoryCreateInput.schema';
import { StoryUncheckedCreateInputObjectSchema as StoryUncheckedCreateInputObjectSchema } from './objects/StoryUncheckedCreateInput.schema';

export const StoryCreateOneSchema: z.ZodType<Prisma.StoryCreateArgs> = z.object({ select: StorySelectObjectSchema.optional(), include: StoryIncludeObjectSchema.optional(), data: z.union([StoryCreateInputObjectSchema, StoryUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.StoryCreateArgs>;

export const StoryCreateOneZodSchema = z.object({ select: StorySelectObjectSchema.optional(), include: StoryIncludeObjectSchema.optional(), data: z.union([StoryCreateInputObjectSchema, StoryUncheckedCreateInputObjectSchema]) }).strict();