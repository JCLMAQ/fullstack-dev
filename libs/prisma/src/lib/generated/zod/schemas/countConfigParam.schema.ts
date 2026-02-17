import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ConfigParamOrderByWithRelationInputObjectSchema as ConfigParamOrderByWithRelationInputObjectSchema } from './objects/ConfigParamOrderByWithRelationInput.schema';
import { ConfigParamWhereInputObjectSchema as ConfigParamWhereInputObjectSchema } from './objects/ConfigParamWhereInput.schema';
import { ConfigParamWhereUniqueInputObjectSchema as ConfigParamWhereUniqueInputObjectSchema } from './objects/ConfigParamWhereUniqueInput.schema';
import { ConfigParamCountAggregateInputObjectSchema as ConfigParamCountAggregateInputObjectSchema } from './objects/ConfigParamCountAggregateInput.schema';

export const ConfigParamCountSchema: z.ZodType<Prisma.ConfigParamCountArgs> = z.object({ orderBy: z.union([ConfigParamOrderByWithRelationInputObjectSchema, ConfigParamOrderByWithRelationInputObjectSchema.array()]).optional(), where: ConfigParamWhereInputObjectSchema.optional(), cursor: ConfigParamWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ConfigParamCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.ConfigParamCountArgs>;

export const ConfigParamCountZodSchema = z.object({ orderBy: z.union([ConfigParamOrderByWithRelationInputObjectSchema, ConfigParamOrderByWithRelationInputObjectSchema.array()]).optional(), where: ConfigParamWhereInputObjectSchema.optional(), cursor: ConfigParamWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ConfigParamCountAggregateInputObjectSchema ]).optional() }).strict();