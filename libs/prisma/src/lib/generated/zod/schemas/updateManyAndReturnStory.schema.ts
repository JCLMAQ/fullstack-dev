import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { StorySelectObjectSchema as StorySelectObjectSchema } from './objects/StorySelect.schema';
import { StoryUpdateManyMutationInputObjectSchema as StoryUpdateManyMutationInputObjectSchema } from './objects/StoryUpdateManyMutationInput.schema';
import { StoryWhereInputObjectSchema as StoryWhereInputObjectSchema } from './objects/StoryWhereInput.schema';

export const StoryUpdateManyAndReturnSchema: z.ZodType<Prisma.StoryUpdateManyAndReturnArgs> = z.object({ select: StorySelectObjectSchema.optional(), data: StoryUpdateManyMutationInputObjectSchema, where: StoryWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.StoryUpdateManyAndReturnArgs>;

export const StoryUpdateManyAndReturnZodSchema = z.object({ select: StorySelectObjectSchema.optional(), data: StoryUpdateManyMutationInputObjectSchema, where: StoryWhereInputObjectSchema.optional() }).strict();