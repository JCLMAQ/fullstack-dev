import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { ScopeWhereInputObjectSchema as ScopeWhereInputObjectSchema } from './objects/ScopeWhereInput.schema';
import { ScopeOrderByWithAggregationInputObjectSchema as ScopeOrderByWithAggregationInputObjectSchema } from './objects/ScopeOrderByWithAggregationInput.schema';
import { ScopeScalarWhereWithAggregatesInputObjectSchema as ScopeScalarWhereWithAggregatesInputObjectSchema } from './objects/ScopeScalarWhereWithAggregatesInput.schema';
import { ScopeScalarFieldEnumSchema } from './enums/ScopeScalarFieldEnum.schema';
import { ScopeCountAggregateInputObjectSchema as ScopeCountAggregateInputObjectSchema } from './objects/ScopeCountAggregateInput.schema';
import { ScopeMinAggregateInputObjectSchema as ScopeMinAggregateInputObjectSchema } from './objects/ScopeMinAggregateInput.schema';
import { ScopeMaxAggregateInputObjectSchema as ScopeMaxAggregateInputObjectSchema } from './objects/ScopeMaxAggregateInput.schema';
import { ScopeAvgAggregateInputObjectSchema as ScopeAvgAggregateInputObjectSchema } from './objects/ScopeAvgAggregateInput.schema';
import { ScopeSumAggregateInputObjectSchema as ScopeSumAggregateInputObjectSchema } from './objects/ScopeSumAggregateInput.schema';

export const ScopeGroupBySchema: z.ZodType<Prisma.ScopeGroupByArgs> = z.object({ where: ScopeWhereInputObjectSchema.optional(), orderBy: z.union([ScopeOrderByWithAggregationInputObjectSchema, ScopeOrderByWithAggregationInputObjectSchema.array()]).optional(), having: ScopeScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(ScopeScalarFieldEnumSchema), _count: z.union([ z.literal(true), ScopeCountAggregateInputObjectSchema ]).optional(), _min: ScopeMinAggregateInputObjectSchema.optional(), _max: ScopeMaxAggregateInputObjectSchema.optional(), _avg: ScopeAvgAggregateInputObjectSchema.optional(), _sum: ScopeSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ScopeGroupByArgs>;

export const ScopeGroupByZodSchema = z.object({ where: ScopeWhereInputObjectSchema.optional(), orderBy: z.union([ScopeOrderByWithAggregationInputObjectSchema, ScopeOrderByWithAggregationInputObjectSchema.array()]).optional(), having: ScopeScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(ScopeScalarFieldEnumSchema), _count: z.union([ z.literal(true), ScopeCountAggregateInputObjectSchema ]).optional(), _min: ScopeMinAggregateInputObjectSchema.optional(), _max: ScopeMaxAggregateInputObjectSchema.optional(), _avg: ScopeAvgAggregateInputObjectSchema.optional(), _sum: ScopeSumAggregateInputObjectSchema.optional() }).strict();