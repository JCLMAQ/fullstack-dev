import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { TranslationOrderByWithRelationInputObjectSchema as TranslationOrderByWithRelationInputObjectSchema } from './objects/TranslationOrderByWithRelationInput.schema';
import { TranslationWhereInputObjectSchema as TranslationWhereInputObjectSchema } from './objects/TranslationWhereInput.schema';
import { TranslationWhereUniqueInputObjectSchema as TranslationWhereUniqueInputObjectSchema } from './objects/TranslationWhereUniqueInput.schema';
import { TranslationCountAggregateInputObjectSchema as TranslationCountAggregateInputObjectSchema } from './objects/TranslationCountAggregateInput.schema';

export const TranslationCountSchema: z.ZodType<Prisma.TranslationCountArgs> = z.object({ orderBy: z.union([TranslationOrderByWithRelationInputObjectSchema, TranslationOrderByWithRelationInputObjectSchema.array()]).optional(), where: TranslationWhereInputObjectSchema.optional(), cursor: TranslationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TranslationCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.TranslationCountArgs>;

export const TranslationCountZodSchema = z.object({ orderBy: z.union([TranslationOrderByWithRelationInputObjectSchema, TranslationOrderByWithRelationInputObjectSchema.array()]).optional(), where: TranslationWhereInputObjectSchema.optional(), cursor: TranslationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TranslationCountAggregateInputObjectSchema ]).optional() }).strict();