import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { PhoneWhereInputObjectSchema as PhoneWhereInputObjectSchema } from './objects/PhoneWhereInput.schema';
import { PhoneOrderByWithAggregationInputObjectSchema as PhoneOrderByWithAggregationInputObjectSchema } from './objects/PhoneOrderByWithAggregationInput.schema';
import { PhoneScalarWhereWithAggregatesInputObjectSchema as PhoneScalarWhereWithAggregatesInputObjectSchema } from './objects/PhoneScalarWhereWithAggregatesInput.schema';
import { PhoneScalarFieldEnumSchema } from './enums/PhoneScalarFieldEnum.schema';
import { PhoneCountAggregateInputObjectSchema as PhoneCountAggregateInputObjectSchema } from './objects/PhoneCountAggregateInput.schema';
import { PhoneMinAggregateInputObjectSchema as PhoneMinAggregateInputObjectSchema } from './objects/PhoneMinAggregateInput.schema';
import { PhoneMaxAggregateInputObjectSchema as PhoneMaxAggregateInputObjectSchema } from './objects/PhoneMaxAggregateInput.schema';
import { PhoneAvgAggregateInputObjectSchema as PhoneAvgAggregateInputObjectSchema } from './objects/PhoneAvgAggregateInput.schema';
import { PhoneSumAggregateInputObjectSchema as PhoneSumAggregateInputObjectSchema } from './objects/PhoneSumAggregateInput.schema';

export const PhoneGroupBySchema: z.ZodType<Prisma.PhoneGroupByArgs> = z.object({ where: PhoneWhereInputObjectSchema.optional(), orderBy: z.union([PhoneOrderByWithAggregationInputObjectSchema, PhoneOrderByWithAggregationInputObjectSchema.array()]).optional(), having: PhoneScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(PhoneScalarFieldEnumSchema), _count: z.union([ z.literal(true), PhoneCountAggregateInputObjectSchema ]).optional(), _min: PhoneMinAggregateInputObjectSchema.optional(), _max: PhoneMaxAggregateInputObjectSchema.optional(), _avg: PhoneAvgAggregateInputObjectSchema.optional(), _sum: PhoneSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.PhoneGroupByArgs>;

export const PhoneGroupByZodSchema = z.object({ where: PhoneWhereInputObjectSchema.optional(), orderBy: z.union([PhoneOrderByWithAggregationInputObjectSchema, PhoneOrderByWithAggregationInputObjectSchema.array()]).optional(), having: PhoneScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(PhoneScalarFieldEnumSchema), _count: z.union([ z.literal(true), PhoneCountAggregateInputObjectSchema ]).optional(), _min: PhoneMinAggregateInputObjectSchema.optional(), _max: PhoneMaxAggregateInputObjectSchema.optional(), _avg: PhoneAvgAggregateInputObjectSchema.optional(), _sum: PhoneSumAggregateInputObjectSchema.optional() }).strict();