import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { GroupOrderByWithRelationInputObjectSchema as GroupOrderByWithRelationInputObjectSchema } from './objects/GroupOrderByWithRelationInput.schema';
import { GroupWhereInputObjectSchema as GroupWhereInputObjectSchema } from './objects/GroupWhereInput.schema';
import { GroupWhereUniqueInputObjectSchema as GroupWhereUniqueInputObjectSchema } from './objects/GroupWhereUniqueInput.schema';
import { GroupCountAggregateInputObjectSchema as GroupCountAggregateInputObjectSchema } from './objects/GroupCountAggregateInput.schema';
import { GroupMinAggregateInputObjectSchema as GroupMinAggregateInputObjectSchema } from './objects/GroupMinAggregateInput.schema';
import { GroupMaxAggregateInputObjectSchema as GroupMaxAggregateInputObjectSchema } from './objects/GroupMaxAggregateInput.schema';
import { GroupAvgAggregateInputObjectSchema as GroupAvgAggregateInputObjectSchema } from './objects/GroupAvgAggregateInput.schema';
import { GroupSumAggregateInputObjectSchema as GroupSumAggregateInputObjectSchema } from './objects/GroupSumAggregateInput.schema';

export const GroupAggregateSchema: z.ZodType<Prisma.GroupAggregateArgs> = z.object({ orderBy: z.union([GroupOrderByWithRelationInputObjectSchema, GroupOrderByWithRelationInputObjectSchema.array()]).optional(), where: GroupWhereInputObjectSchema.optional(), cursor: GroupWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), GroupCountAggregateInputObjectSchema ]).optional(), _min: GroupMinAggregateInputObjectSchema.optional(), _max: GroupMaxAggregateInputObjectSchema.optional(), _avg: GroupAvgAggregateInputObjectSchema.optional(), _sum: GroupSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.GroupAggregateArgs>;

export const GroupAggregateZodSchema = z.object({ orderBy: z.union([GroupOrderByWithRelationInputObjectSchema, GroupOrderByWithRelationInputObjectSchema.array()]).optional(), where: GroupWhereInputObjectSchema.optional(), cursor: GroupWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), GroupCountAggregateInputObjectSchema ]).optional(), _min: GroupMinAggregateInputObjectSchema.optional(), _max: GroupMaxAggregateInputObjectSchema.optional(), _avg: GroupAvgAggregateInputObjectSchema.optional(), _sum: GroupSumAggregateInputObjectSchema.optional() }).strict();