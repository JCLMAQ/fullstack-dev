import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { ApiKeyOrderByWithRelationInputObjectSchema as ApiKeyOrderByWithRelationInputObjectSchema } from './objects/ApiKeyOrderByWithRelationInput.schema';
import { ApiKeyWhereInputObjectSchema as ApiKeyWhereInputObjectSchema } from './objects/ApiKeyWhereInput.schema';
import { ApiKeyWhereUniqueInputObjectSchema as ApiKeyWhereUniqueInputObjectSchema } from './objects/ApiKeyWhereUniqueInput.schema';
import { ApiKeyCountAggregateInputObjectSchema as ApiKeyCountAggregateInputObjectSchema } from './objects/ApiKeyCountAggregateInput.schema';
import { ApiKeyMinAggregateInputObjectSchema as ApiKeyMinAggregateInputObjectSchema } from './objects/ApiKeyMinAggregateInput.schema';
import { ApiKeyMaxAggregateInputObjectSchema as ApiKeyMaxAggregateInputObjectSchema } from './objects/ApiKeyMaxAggregateInput.schema';
import { ApiKeyAvgAggregateInputObjectSchema as ApiKeyAvgAggregateInputObjectSchema } from './objects/ApiKeyAvgAggregateInput.schema';
import { ApiKeySumAggregateInputObjectSchema as ApiKeySumAggregateInputObjectSchema } from './objects/ApiKeySumAggregateInput.schema';

export const ApiKeyAggregateSchema: z.ZodType<Prisma.ApiKeyAggregateArgs> = z.object({ orderBy: z.union([ApiKeyOrderByWithRelationInputObjectSchema, ApiKeyOrderByWithRelationInputObjectSchema.array()]).optional(), where: ApiKeyWhereInputObjectSchema.optional(), cursor: ApiKeyWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), ApiKeyCountAggregateInputObjectSchema ]).optional(), _min: ApiKeyMinAggregateInputObjectSchema.optional(), _max: ApiKeyMaxAggregateInputObjectSchema.optional(), _avg: ApiKeyAvgAggregateInputObjectSchema.optional(), _sum: ApiKeySumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ApiKeyAggregateArgs>;

export const ApiKeyAggregateZodSchema = z.object({ orderBy: z.union([ApiKeyOrderByWithRelationInputObjectSchema, ApiKeyOrderByWithRelationInputObjectSchema.array()]).optional(), where: ApiKeyWhereInputObjectSchema.optional(), cursor: ApiKeyWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), ApiKeyCountAggregateInputObjectSchema ]).optional(), _min: ApiKeyMinAggregateInputObjectSchema.optional(), _max: ApiKeyMaxAggregateInputObjectSchema.optional(), _avg: ApiKeyAvgAggregateInputObjectSchema.optional(), _sum: ApiKeySumAggregateInputObjectSchema.optional() }).strict();