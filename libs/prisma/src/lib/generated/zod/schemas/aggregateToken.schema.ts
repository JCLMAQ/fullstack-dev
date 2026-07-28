import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { TokenOrderByWithRelationInputObjectSchema as TokenOrderByWithRelationInputObjectSchema } from './objects/TokenOrderByWithRelationInput.schema';
import { TokenWhereInputObjectSchema as TokenWhereInputObjectSchema } from './objects/TokenWhereInput.schema';
import { TokenWhereUniqueInputObjectSchema as TokenWhereUniqueInputObjectSchema } from './objects/TokenWhereUniqueInput.schema';
import { TokenCountAggregateInputObjectSchema as TokenCountAggregateInputObjectSchema } from './objects/TokenCountAggregateInput.schema';
import { TokenMinAggregateInputObjectSchema as TokenMinAggregateInputObjectSchema } from './objects/TokenMinAggregateInput.schema';
import { TokenMaxAggregateInputObjectSchema as TokenMaxAggregateInputObjectSchema } from './objects/TokenMaxAggregateInput.schema';
import { TokenAvgAggregateInputObjectSchema as TokenAvgAggregateInputObjectSchema } from './objects/TokenAvgAggregateInput.schema';
import { TokenSumAggregateInputObjectSchema as TokenSumAggregateInputObjectSchema } from './objects/TokenSumAggregateInput.schema';

export const TokenAggregateSchema: z.ZodType<Prisma.TokenAggregateArgs> = z.object({ orderBy: z.union([TokenOrderByWithRelationInputObjectSchema, TokenOrderByWithRelationInputObjectSchema.array()]).optional(), where: TokenWhereInputObjectSchema.optional(), cursor: TokenWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), TokenCountAggregateInputObjectSchema ]).optional(), _min: TokenMinAggregateInputObjectSchema.optional(), _max: TokenMaxAggregateInputObjectSchema.optional(), _avg: TokenAvgAggregateInputObjectSchema.optional(), _sum: TokenSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TokenAggregateArgs>;

export const TokenAggregateZodSchema = z.object({ orderBy: z.union([TokenOrderByWithRelationInputObjectSchema, TokenOrderByWithRelationInputObjectSchema.array()]).optional(), where: TokenWhereInputObjectSchema.optional(), cursor: TokenWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), TokenCountAggregateInputObjectSchema ]).optional(), _min: TokenMinAggregateInputObjectSchema.optional(), _max: TokenMaxAggregateInputObjectSchema.optional(), _avg: TokenAvgAggregateInputObjectSchema.optional(), _sum: TokenSumAggregateInputObjectSchema.optional() }).strict();