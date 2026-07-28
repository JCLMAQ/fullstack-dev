import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { StorySelectObjectSchema as StorySelectObjectSchema } from './objects/StorySelect.schema';
import { StoryIncludeObjectSchema as StoryIncludeObjectSchema } from './objects/StoryInclude.schema';
import { StoryWhereUniqueInputObjectSchema as StoryWhereUniqueInputObjectSchema } from './objects/StoryWhereUniqueInput.schema';
import { StoryCreateInputObjectSchema as StoryCreateInputObjectSchema } from './objects/StoryCreateInput.schema';
import { StoryUncheckedCreateInputObjectSchema as StoryUncheckedCreateInputObjectSchema } from './objects/StoryUncheckedCreateInput.schema';
import { StoryUpdateInputObjectSchema as StoryUpdateInputObjectSchema } from './objects/StoryUpdateInput.schema';
import { StoryUncheckedUpdateInputObjectSchema as StoryUncheckedUpdateInputObjectSchema } from './objects/StoryUncheckedUpdateInput.schema';

export const StoryUpsertOneSchema: z.ZodType<Prisma.StoryUpsertArgs> = z.object({ select: StorySelectObjectSchema.optional(), include: StoryIncludeObjectSchema.optional(), where: StoryWhereUniqueInputObjectSchema, create: z.union([ StoryCreateInputObjectSchema, StoryUncheckedCreateInputObjectSchema ]), update: z.union([ StoryUpdateInputObjectSchema, StoryUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.StoryUpsertArgs>;

export const StoryUpsertOneZodSchema = z.object({ select: StorySelectObjectSchema.optional(), include: StoryIncludeObjectSchema.optional(), where: StoryWhereUniqueInputObjectSchema, create: z.union([ StoryCreateInputObjectSchema, StoryUncheckedCreateInputObjectSchema ]), update: z.union([ StoryUpdateInputObjectSchema, StoryUncheckedUpdateInputObjectSchema ]) }).strict();