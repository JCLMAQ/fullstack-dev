import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { StoryUpdateManyMutationInputObjectSchema as StoryUpdateManyMutationInputObjectSchema } from './objects/StoryUpdateManyMutationInput.schema';
import { StoryWhereInputObjectSchema as StoryWhereInputObjectSchema } from './objects/StoryWhereInput.schema';

export const StoryUpdateManySchema: z.ZodType<Prisma.StoryUpdateManyArgs> = z.object({ data: StoryUpdateManyMutationInputObjectSchema, where: StoryWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.StoryUpdateManyArgs>;

export const StoryUpdateManyZodSchema = z.object({ data: StoryUpdateManyMutationInputObjectSchema, where: StoryWhereInputObjectSchema.optional() }).strict();