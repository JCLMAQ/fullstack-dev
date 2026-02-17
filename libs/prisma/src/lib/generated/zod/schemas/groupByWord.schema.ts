import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { WordWhereInputObjectSchema as WordWhereInputObjectSchema } from './objects/WordWhereInput.schema';
import { WordOrderByWithAggregationInputObjectSchema as WordOrderByWithAggregationInputObjectSchema } from './objects/WordOrderByWithAggregationInput.schema';
import { WordScalarWhereWithAggregatesInputObjectSchema as WordScalarWhereWithAggregatesInputObjectSchema } from './objects/WordScalarWhereWithAggregatesInput.schema';
import { WordScalarFieldEnumSchema } from './enums/WordScalarFieldEnum.schema';
import { WordCountAggregateInputObjectSchema as WordCountAggregateInputObjectSchema } from './objects/WordCountAggregateInput.schema';
import { WordMinAggregateInputObjectSchema as WordMinAggregateInputObjectSchema } from './objects/WordMinAggregateInput.schema';
import { WordMaxAggregateInputObjectSchema as WordMaxAggregateInputObjectSchema } from './objects/WordMaxAggregateInput.schema';
import { WordAvgAggregateInputObjectSchema as WordAvgAggregateInputObjectSchema } from './objects/WordAvgAggregateInput.schema';
import { WordSumAggregateInputObjectSchema as WordSumAggregateInputObjectSchema } from './objects/WordSumAggregateInput.schema';

export const WordGroupBySchema: z.ZodType<Prisma.WordGroupByArgs> = z.object({ where: WordWhereInputObjectSchema.optional(), orderBy: z.union([WordOrderByWithAggregationInputObjectSchema, WordOrderByWithAggregationInputObjectSchema.array()]).optional(), having: WordScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(WordScalarFieldEnumSchema), _count: z.union([ z.literal(true), WordCountAggregateInputObjectSchema ]).optional(), _min: WordMinAggregateInputObjectSchema.optional(), _max: WordMaxAggregateInputObjectSchema.optional(), _avg: WordAvgAggregateInputObjectSchema.optional(), _sum: WordSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.WordGroupByArgs>;

export const WordGroupByZodSchema = z.object({ where: WordWhereInputObjectSchema.optional(), orderBy: z.union([WordOrderByWithAggregationInputObjectSchema, WordOrderByWithAggregationInputObjectSchema.array()]).optional(), having: WordScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(WordScalarFieldEnumSchema), _count: z.union([ z.literal(true), WordCountAggregateInputObjectSchema ]).optional(), _min: WordMinAggregateInputObjectSchema.optional(), _max: WordMaxAggregateInputObjectSchema.optional(), _avg: WordAvgAggregateInputObjectSchema.optional(), _sum: WordSumAggregateInputObjectSchema.optional() }).strict();