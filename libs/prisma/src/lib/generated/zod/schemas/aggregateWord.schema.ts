import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { WordOrderByWithRelationInputObjectSchema as WordOrderByWithRelationInputObjectSchema } from './objects/WordOrderByWithRelationInput.schema';
import { WordWhereInputObjectSchema as WordWhereInputObjectSchema } from './objects/WordWhereInput.schema';
import { WordWhereUniqueInputObjectSchema as WordWhereUniqueInputObjectSchema } from './objects/WordWhereUniqueInput.schema';
import { WordCountAggregateInputObjectSchema as WordCountAggregateInputObjectSchema } from './objects/WordCountAggregateInput.schema';
import { WordMinAggregateInputObjectSchema as WordMinAggregateInputObjectSchema } from './objects/WordMinAggregateInput.schema';
import { WordMaxAggregateInputObjectSchema as WordMaxAggregateInputObjectSchema } from './objects/WordMaxAggregateInput.schema';
import { WordAvgAggregateInputObjectSchema as WordAvgAggregateInputObjectSchema } from './objects/WordAvgAggregateInput.schema';
import { WordSumAggregateInputObjectSchema as WordSumAggregateInputObjectSchema } from './objects/WordSumAggregateInput.schema';

export const WordAggregateSchema: z.ZodType<Prisma.WordAggregateArgs> = z.object({ orderBy: z.union([WordOrderByWithRelationInputObjectSchema, WordOrderByWithRelationInputObjectSchema.array()]).optional(), where: WordWhereInputObjectSchema.optional(), cursor: WordWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), WordCountAggregateInputObjectSchema ]).optional(), _min: WordMinAggregateInputObjectSchema.optional(), _max: WordMaxAggregateInputObjectSchema.optional(), _avg: WordAvgAggregateInputObjectSchema.optional(), _sum: WordSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.WordAggregateArgs>;

export const WordAggregateZodSchema = z.object({ orderBy: z.union([WordOrderByWithRelationInputObjectSchema, WordOrderByWithRelationInputObjectSchema.array()]).optional(), where: WordWhereInputObjectSchema.optional(), cursor: WordWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), WordCountAggregateInputObjectSchema ]).optional(), _min: WordMinAggregateInputObjectSchema.optional(), _max: WordMaxAggregateInputObjectSchema.optional(), _avg: WordAvgAggregateInputObjectSchema.optional(), _sum: WordSumAggregateInputObjectSchema.optional() }).strict();