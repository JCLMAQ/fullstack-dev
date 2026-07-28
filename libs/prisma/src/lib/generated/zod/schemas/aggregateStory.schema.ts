import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { StoryOrderByWithRelationInputObjectSchema as StoryOrderByWithRelationInputObjectSchema } from './objects/StoryOrderByWithRelationInput.schema';
import { StoryWhereInputObjectSchema as StoryWhereInputObjectSchema } from './objects/StoryWhereInput.schema';
import { StoryWhereUniqueInputObjectSchema as StoryWhereUniqueInputObjectSchema } from './objects/StoryWhereUniqueInput.schema';
import { StoryCountAggregateInputObjectSchema as StoryCountAggregateInputObjectSchema } from './objects/StoryCountAggregateInput.schema';
import { StoryMinAggregateInputObjectSchema as StoryMinAggregateInputObjectSchema } from './objects/StoryMinAggregateInput.schema';
import { StoryMaxAggregateInputObjectSchema as StoryMaxAggregateInputObjectSchema } from './objects/StoryMaxAggregateInput.schema';
import { StoryAvgAggregateInputObjectSchema as StoryAvgAggregateInputObjectSchema } from './objects/StoryAvgAggregateInput.schema';
import { StorySumAggregateInputObjectSchema as StorySumAggregateInputObjectSchema } from './objects/StorySumAggregateInput.schema';

export const StoryAggregateSchema: z.ZodType<Prisma.StoryAggregateArgs> = z.object({ orderBy: z.union([StoryOrderByWithRelationInputObjectSchema, StoryOrderByWithRelationInputObjectSchema.array()]).optional(), where: StoryWhereInputObjectSchema.optional(), cursor: StoryWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), StoryCountAggregateInputObjectSchema ]).optional(), _min: StoryMinAggregateInputObjectSchema.optional(), _max: StoryMaxAggregateInputObjectSchema.optional(), _avg: StoryAvgAggregateInputObjectSchema.optional(), _sum: StorySumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.StoryAggregateArgs>;

export const StoryAggregateZodSchema = z.object({ orderBy: z.union([StoryOrderByWithRelationInputObjectSchema, StoryOrderByWithRelationInputObjectSchema.array()]).optional(), where: StoryWhereInputObjectSchema.optional(), cursor: StoryWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), StoryCountAggregateInputObjectSchema ]).optional(), _min: StoryMinAggregateInputObjectSchema.optional(), _max: StoryMaxAggregateInputObjectSchema.optional(), _avg: StoryAvgAggregateInputObjectSchema.optional(), _sum: StorySumAggregateInputObjectSchema.optional() }).strict();