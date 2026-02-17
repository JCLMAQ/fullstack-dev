import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { PhoneOrderByWithRelationInputObjectSchema as PhoneOrderByWithRelationInputObjectSchema } from './objects/PhoneOrderByWithRelationInput.schema';
import { PhoneWhereInputObjectSchema as PhoneWhereInputObjectSchema } from './objects/PhoneWhereInput.schema';
import { PhoneWhereUniqueInputObjectSchema as PhoneWhereUniqueInputObjectSchema } from './objects/PhoneWhereUniqueInput.schema';
import { PhoneCountAggregateInputObjectSchema as PhoneCountAggregateInputObjectSchema } from './objects/PhoneCountAggregateInput.schema';
import { PhoneMinAggregateInputObjectSchema as PhoneMinAggregateInputObjectSchema } from './objects/PhoneMinAggregateInput.schema';
import { PhoneMaxAggregateInputObjectSchema as PhoneMaxAggregateInputObjectSchema } from './objects/PhoneMaxAggregateInput.schema';
import { PhoneAvgAggregateInputObjectSchema as PhoneAvgAggregateInputObjectSchema } from './objects/PhoneAvgAggregateInput.schema';
import { PhoneSumAggregateInputObjectSchema as PhoneSumAggregateInputObjectSchema } from './objects/PhoneSumAggregateInput.schema';

export const PhoneAggregateSchema: z.ZodType<Prisma.PhoneAggregateArgs> = z.object({ orderBy: z.union([PhoneOrderByWithRelationInputObjectSchema, PhoneOrderByWithRelationInputObjectSchema.array()]).optional(), where: PhoneWhereInputObjectSchema.optional(), cursor: PhoneWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), PhoneCountAggregateInputObjectSchema ]).optional(), _min: PhoneMinAggregateInputObjectSchema.optional(), _max: PhoneMaxAggregateInputObjectSchema.optional(), _avg: PhoneAvgAggregateInputObjectSchema.optional(), _sum: PhoneSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.PhoneAggregateArgs>;

export const PhoneAggregateZodSchema = z.object({ orderBy: z.union([PhoneOrderByWithRelationInputObjectSchema, PhoneOrderByWithRelationInputObjectSchema.array()]).optional(), where: PhoneWhereInputObjectSchema.optional(), cursor: PhoneWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), PhoneCountAggregateInputObjectSchema ]).optional(), _min: PhoneMinAggregateInputObjectSchema.optional(), _max: PhoneMaxAggregateInputObjectSchema.optional(), _avg: PhoneAvgAggregateInputObjectSchema.optional(), _sum: PhoneSumAggregateInputObjectSchema.optional() }).strict();