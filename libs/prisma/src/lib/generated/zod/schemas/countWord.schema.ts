import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { WordOrderByWithRelationInputObjectSchema as WordOrderByWithRelationInputObjectSchema } from './objects/WordOrderByWithRelationInput.schema';
import { WordWhereInputObjectSchema as WordWhereInputObjectSchema } from './objects/WordWhereInput.schema';
import { WordWhereUniqueInputObjectSchema as WordWhereUniqueInputObjectSchema } from './objects/WordWhereUniqueInput.schema';
import { WordCountAggregateInputObjectSchema as WordCountAggregateInputObjectSchema } from './objects/WordCountAggregateInput.schema';

export const WordCountSchema: z.ZodType<Prisma.WordCountArgs> = z.object({ orderBy: z.union([WordOrderByWithRelationInputObjectSchema, WordOrderByWithRelationInputObjectSchema.array()]).optional(), where: WordWhereInputObjectSchema.optional(), cursor: WordWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), WordCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.WordCountArgs>;

export const WordCountZodSchema = z.object({ orderBy: z.union([WordOrderByWithRelationInputObjectSchema, WordOrderByWithRelationInputObjectSchema.array()]).optional(), where: WordWhereInputObjectSchema.optional(), cursor: WordWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), WordCountAggregateInputObjectSchema ]).optional() }).strict();