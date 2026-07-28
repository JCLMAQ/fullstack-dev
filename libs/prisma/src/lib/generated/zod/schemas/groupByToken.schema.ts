import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { TokenWhereInputObjectSchema as TokenWhereInputObjectSchema } from './objects/TokenWhereInput.schema';
import { TokenOrderByWithAggregationInputObjectSchema as TokenOrderByWithAggregationInputObjectSchema } from './objects/TokenOrderByWithAggregationInput.schema';
import { TokenScalarWhereWithAggregatesInputObjectSchema as TokenScalarWhereWithAggregatesInputObjectSchema } from './objects/TokenScalarWhereWithAggregatesInput.schema';
import { TokenScalarFieldEnumSchema } from './enums/TokenScalarFieldEnum.schema';
import { TokenCountAggregateInputObjectSchema as TokenCountAggregateInputObjectSchema } from './objects/TokenCountAggregateInput.schema';
import { TokenMinAggregateInputObjectSchema as TokenMinAggregateInputObjectSchema } from './objects/TokenMinAggregateInput.schema';
import { TokenMaxAggregateInputObjectSchema as TokenMaxAggregateInputObjectSchema } from './objects/TokenMaxAggregateInput.schema';
import { TokenAvgAggregateInputObjectSchema as TokenAvgAggregateInputObjectSchema } from './objects/TokenAvgAggregateInput.schema';
import { TokenSumAggregateInputObjectSchema as TokenSumAggregateInputObjectSchema } from './objects/TokenSumAggregateInput.schema';

export const TokenGroupBySchema: z.ZodType<Prisma.TokenGroupByArgs> = z.object({ where: TokenWhereInputObjectSchema.optional(), orderBy: z.union([TokenOrderByWithAggregationInputObjectSchema, TokenOrderByWithAggregationInputObjectSchema.array()]).optional(), having: TokenScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(TokenScalarFieldEnumSchema), _count: z.union([ z.literal(true), TokenCountAggregateInputObjectSchema ]).optional(), _min: TokenMinAggregateInputObjectSchema.optional(), _max: TokenMaxAggregateInputObjectSchema.optional(), _avg: TokenAvgAggregateInputObjectSchema.optional(), _sum: TokenSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TokenGroupByArgs>;

export const TokenGroupByZodSchema = z.object({ where: TokenWhereInputObjectSchema.optional(), orderBy: z.union([TokenOrderByWithAggregationInputObjectSchema, TokenOrderByWithAggregationInputObjectSchema.array()]).optional(), having: TokenScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(TokenScalarFieldEnumSchema), _count: z.union([ z.literal(true), TokenCountAggregateInputObjectSchema ]).optional(), _min: TokenMinAggregateInputObjectSchema.optional(), _max: TokenMaxAggregateInputObjectSchema.optional(), _avg: TokenAvgAggregateInputObjectSchema.optional(), _sum: TokenSumAggregateInputObjectSchema.optional() }).strict();