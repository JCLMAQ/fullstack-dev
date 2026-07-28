import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { ScopeOrderByWithRelationInputObjectSchema as ScopeOrderByWithRelationInputObjectSchema } from './objects/ScopeOrderByWithRelationInput.schema';
import { ScopeWhereInputObjectSchema as ScopeWhereInputObjectSchema } from './objects/ScopeWhereInput.schema';
import { ScopeWhereUniqueInputObjectSchema as ScopeWhereUniqueInputObjectSchema } from './objects/ScopeWhereUniqueInput.schema';
import { ScopeCountAggregateInputObjectSchema as ScopeCountAggregateInputObjectSchema } from './objects/ScopeCountAggregateInput.schema';

export const ScopeCountSchema: z.ZodType<Prisma.ScopeCountArgs> = z.object({ orderBy: z.union([ScopeOrderByWithRelationInputObjectSchema, ScopeOrderByWithRelationInputObjectSchema.array()]).optional(), where: ScopeWhereInputObjectSchema.optional(), cursor: ScopeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ScopeCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.ScopeCountArgs>;

export const ScopeCountZodSchema = z.object({ orderBy: z.union([ScopeOrderByWithRelationInputObjectSchema, ScopeOrderByWithRelationInputObjectSchema.array()]).optional(), where: ScopeWhereInputObjectSchema.optional(), cursor: ScopeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ScopeCountAggregateInputObjectSchema ]).optional() }).strict();