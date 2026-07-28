import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { OrgEmailOrderByWithRelationInputObjectSchema as OrgEmailOrderByWithRelationInputObjectSchema } from './objects/OrgEmailOrderByWithRelationInput.schema';
import { OrgEmailWhereInputObjectSchema as OrgEmailWhereInputObjectSchema } from './objects/OrgEmailWhereInput.schema';
import { OrgEmailWhereUniqueInputObjectSchema as OrgEmailWhereUniqueInputObjectSchema } from './objects/OrgEmailWhereUniqueInput.schema';
import { OrgEmailCountAggregateInputObjectSchema as OrgEmailCountAggregateInputObjectSchema } from './objects/OrgEmailCountAggregateInput.schema';

export const OrgEmailCountSchema: z.ZodType<Prisma.OrgEmailCountArgs> = z.object({ orderBy: z.union([OrgEmailOrderByWithRelationInputObjectSchema, OrgEmailOrderByWithRelationInputObjectSchema.array()]).optional(), where: OrgEmailWhereInputObjectSchema.optional(), cursor: OrgEmailWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), OrgEmailCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.OrgEmailCountArgs>;

export const OrgEmailCountZodSchema = z.object({ orderBy: z.union([OrgEmailOrderByWithRelationInputObjectSchema, OrgEmailOrderByWithRelationInputObjectSchema.array()]).optional(), where: OrgEmailWhereInputObjectSchema.optional(), cursor: OrgEmailWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), OrgEmailCountAggregateInputObjectSchema ]).optional() }).strict();