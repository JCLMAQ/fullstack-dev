import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { AppEmailDomainOrderByWithRelationInputObjectSchema as AppEmailDomainOrderByWithRelationInputObjectSchema } from './objects/AppEmailDomainOrderByWithRelationInput.schema';
import { AppEmailDomainWhereInputObjectSchema as AppEmailDomainWhereInputObjectSchema } from './objects/AppEmailDomainWhereInput.schema';
import { AppEmailDomainWhereUniqueInputObjectSchema as AppEmailDomainWhereUniqueInputObjectSchema } from './objects/AppEmailDomainWhereUniqueInput.schema';
import { AppEmailDomainCountAggregateInputObjectSchema as AppEmailDomainCountAggregateInputObjectSchema } from './objects/AppEmailDomainCountAggregateInput.schema';

export const AppEmailDomainCountSchema: z.ZodType<Prisma.AppEmailDomainCountArgs> = z.object({ orderBy: z.union([AppEmailDomainOrderByWithRelationInputObjectSchema, AppEmailDomainOrderByWithRelationInputObjectSchema.array()]).optional(), where: AppEmailDomainWhereInputObjectSchema.optional(), cursor: AppEmailDomainWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), AppEmailDomainCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.AppEmailDomainCountArgs>;

export const AppEmailDomainCountZodSchema = z.object({ orderBy: z.union([AppEmailDomainOrderByWithRelationInputObjectSchema, AppEmailDomainOrderByWithRelationInputObjectSchema.array()]).optional(), where: AppEmailDomainWhereInputObjectSchema.optional(), cursor: AppEmailDomainWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), AppEmailDomainCountAggregateInputObjectSchema ]).optional() }).strict();