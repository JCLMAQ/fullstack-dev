import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { OrgEmailUseToOrderByWithRelationInputObjectSchema as OrgEmailUseToOrderByWithRelationInputObjectSchema } from './objects/OrgEmailUseToOrderByWithRelationInput.schema';
import { OrgEmailUseToWhereInputObjectSchema as OrgEmailUseToWhereInputObjectSchema } from './objects/OrgEmailUseToWhereInput.schema';
import { OrgEmailUseToWhereUniqueInputObjectSchema as OrgEmailUseToWhereUniqueInputObjectSchema } from './objects/OrgEmailUseToWhereUniqueInput.schema';
import { OrgEmailUseToCountAggregateInputObjectSchema as OrgEmailUseToCountAggregateInputObjectSchema } from './objects/OrgEmailUseToCountAggregateInput.schema';

export const OrgEmailUseToCountSchema: z.ZodType<Prisma.OrgEmailUseToCountArgs> = z.object({ orderBy: z.union([OrgEmailUseToOrderByWithRelationInputObjectSchema, OrgEmailUseToOrderByWithRelationInputObjectSchema.array()]).optional(), where: OrgEmailUseToWhereInputObjectSchema.optional(), cursor: OrgEmailUseToWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), OrgEmailUseToCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.OrgEmailUseToCountArgs>;

export const OrgEmailUseToCountZodSchema = z.object({ orderBy: z.union([OrgEmailUseToOrderByWithRelationInputObjectSchema, OrgEmailUseToOrderByWithRelationInputObjectSchema.array()]).optional(), where: OrgEmailUseToWhereInputObjectSchema.optional(), cursor: OrgEmailUseToWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), OrgEmailUseToCountAggregateInputObjectSchema ]).optional() }).strict();