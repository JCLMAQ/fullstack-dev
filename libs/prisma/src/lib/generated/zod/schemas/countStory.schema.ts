import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { StoryOrderByWithRelationInputObjectSchema as StoryOrderByWithRelationInputObjectSchema } from './objects/StoryOrderByWithRelationInput.schema';
import { StoryWhereInputObjectSchema as StoryWhereInputObjectSchema } from './objects/StoryWhereInput.schema';
import { StoryWhereUniqueInputObjectSchema as StoryWhereUniqueInputObjectSchema } from './objects/StoryWhereUniqueInput.schema';
import { StoryCountAggregateInputObjectSchema as StoryCountAggregateInputObjectSchema } from './objects/StoryCountAggregateInput.schema';

export const StoryCountSchema: z.ZodType<Prisma.StoryCountArgs> = z.object({ orderBy: z.union([StoryOrderByWithRelationInputObjectSchema, StoryOrderByWithRelationInputObjectSchema.array()]).optional(), where: StoryWhereInputObjectSchema.optional(), cursor: StoryWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), StoryCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.StoryCountArgs>;

export const StoryCountZodSchema = z.object({ orderBy: z.union([StoryOrderByWithRelationInputObjectSchema, StoryOrderByWithRelationInputObjectSchema.array()]).optional(), where: StoryWhereInputObjectSchema.optional(), cursor: StoryWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), StoryCountAggregateInputObjectSchema ]).optional() }).strict();