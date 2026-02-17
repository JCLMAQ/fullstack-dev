import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { StoryWhereInputObjectSchema as StoryWhereInputObjectSchema } from './objects/StoryWhereInput.schema';

export const StoryDeleteManySchema: z.ZodType<Prisma.StoryDeleteManyArgs> = z.object({ where: StoryWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.StoryDeleteManyArgs>;

export const StoryDeleteManyZodSchema = z.object({ where: StoryWhereInputObjectSchema.optional() }).strict();