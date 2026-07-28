import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { PhoneOrderByWithRelationInputObjectSchema as PhoneOrderByWithRelationInputObjectSchema } from './objects/PhoneOrderByWithRelationInput.schema';
import { PhoneWhereInputObjectSchema as PhoneWhereInputObjectSchema } from './objects/PhoneWhereInput.schema';
import { PhoneWhereUniqueInputObjectSchema as PhoneWhereUniqueInputObjectSchema } from './objects/PhoneWhereUniqueInput.schema';
import { PhoneCountAggregateInputObjectSchema as PhoneCountAggregateInputObjectSchema } from './objects/PhoneCountAggregateInput.schema';

export const PhoneCountSchema: z.ZodType<Prisma.PhoneCountArgs> = z.object({ orderBy: z.union([PhoneOrderByWithRelationInputObjectSchema, PhoneOrderByWithRelationInputObjectSchema.array()]).optional(), where: PhoneWhereInputObjectSchema.optional(), cursor: PhoneWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), PhoneCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.PhoneCountArgs>;

export const PhoneCountZodSchema = z.object({ orderBy: z.union([PhoneOrderByWithRelationInputObjectSchema, PhoneOrderByWithRelationInputObjectSchema.array()]).optional(), where: PhoneWhereInputObjectSchema.optional(), cursor: PhoneWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), PhoneCountAggregateInputObjectSchema ]).optional() }).strict();