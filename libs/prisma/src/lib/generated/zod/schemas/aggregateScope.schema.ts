import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { ScopeOrderByWithRelationInputObjectSchema as ScopeOrderByWithRelationInputObjectSchema } from './objects/ScopeOrderByWithRelationInput.schema';
import { ScopeWhereInputObjectSchema as ScopeWhereInputObjectSchema } from './objects/ScopeWhereInput.schema';
import { ScopeWhereUniqueInputObjectSchema as ScopeWhereUniqueInputObjectSchema } from './objects/ScopeWhereUniqueInput.schema';
import { ScopeCountAggregateInputObjectSchema as ScopeCountAggregateInputObjectSchema } from './objects/ScopeCountAggregateInput.schema';
import { ScopeMinAggregateInputObjectSchema as ScopeMinAggregateInputObjectSchema } from './objects/ScopeMinAggregateInput.schema';
import { ScopeMaxAggregateInputObjectSchema as ScopeMaxAggregateInputObjectSchema } from './objects/ScopeMaxAggregateInput.schema';
import { ScopeAvgAggregateInputObjectSchema as ScopeAvgAggregateInputObjectSchema } from './objects/ScopeAvgAggregateInput.schema';
import { ScopeSumAggregateInputObjectSchema as ScopeSumAggregateInputObjectSchema } from './objects/ScopeSumAggregateInput.schema';

export const ScopeAggregateSchema: z.ZodType<Prisma.ScopeAggregateArgs> = z.object({ orderBy: z.union([ScopeOrderByWithRelationInputObjectSchema, ScopeOrderByWithRelationInputObjectSchema.array()]).optional(), where: ScopeWhereInputObjectSchema.optional(), cursor: ScopeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), ScopeCountAggregateInputObjectSchema ]).optional(), _min: ScopeMinAggregateInputObjectSchema.optional(), _max: ScopeMaxAggregateInputObjectSchema.optional(), _avg: ScopeAvgAggregateInputObjectSchema.optional(), _sum: ScopeSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ScopeAggregateArgs>;

export const ScopeAggregateZodSchema = z.object({ orderBy: z.union([ScopeOrderByWithRelationInputObjectSchema, ScopeOrderByWithRelationInputObjectSchema.array()]).optional(), where: ScopeWhereInputObjectSchema.optional(), cursor: ScopeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), ScopeCountAggregateInputObjectSchema ]).optional(), _min: ScopeMinAggregateInputObjectSchema.optional(), _max: ScopeMaxAggregateInputObjectSchema.optional(), _avg: ScopeAvgAggregateInputObjectSchema.optional(), _sum: ScopeSumAggregateInputObjectSchema.optional() }).strict();