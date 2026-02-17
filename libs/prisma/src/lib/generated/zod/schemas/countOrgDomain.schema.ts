import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { OrgDomainOrderByWithRelationInputObjectSchema as OrgDomainOrderByWithRelationInputObjectSchema } from './objects/OrgDomainOrderByWithRelationInput.schema';
import { OrgDomainWhereInputObjectSchema as OrgDomainWhereInputObjectSchema } from './objects/OrgDomainWhereInput.schema';
import { OrgDomainWhereUniqueInputObjectSchema as OrgDomainWhereUniqueInputObjectSchema } from './objects/OrgDomainWhereUniqueInput.schema';
import { OrgDomainCountAggregateInputObjectSchema as OrgDomainCountAggregateInputObjectSchema } from './objects/OrgDomainCountAggregateInput.schema';

export const OrgDomainCountSchema: z.ZodType<Prisma.OrgDomainCountArgs> = z.object({ orderBy: z.union([OrgDomainOrderByWithRelationInputObjectSchema, OrgDomainOrderByWithRelationInputObjectSchema.array()]).optional(), where: OrgDomainWhereInputObjectSchema.optional(), cursor: OrgDomainWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), OrgDomainCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.OrgDomainCountArgs>;

export const OrgDomainCountZodSchema = z.object({ orderBy: z.union([OrgDomainOrderByWithRelationInputObjectSchema, OrgDomainOrderByWithRelationInputObjectSchema.array()]).optional(), where: OrgDomainWhereInputObjectSchema.optional(), cursor: OrgDomainWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), OrgDomainCountAggregateInputObjectSchema ]).optional() }).strict();