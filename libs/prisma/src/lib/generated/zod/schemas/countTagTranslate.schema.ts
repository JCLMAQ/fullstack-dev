import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { TagTranslateOrderByWithRelationInputObjectSchema as TagTranslateOrderByWithRelationInputObjectSchema } from './objects/TagTranslateOrderByWithRelationInput.schema';
import { TagTranslateWhereInputObjectSchema as TagTranslateWhereInputObjectSchema } from './objects/TagTranslateWhereInput.schema';
import { TagTranslateWhereUniqueInputObjectSchema as TagTranslateWhereUniqueInputObjectSchema } from './objects/TagTranslateWhereUniqueInput.schema';
import { TagTranslateCountAggregateInputObjectSchema as TagTranslateCountAggregateInputObjectSchema } from './objects/TagTranslateCountAggregateInput.schema';

export const TagTranslateCountSchema: z.ZodType<Prisma.TagTranslateCountArgs> = z.object({ orderBy: z.union([TagTranslateOrderByWithRelationInputObjectSchema, TagTranslateOrderByWithRelationInputObjectSchema.array()]).optional(), where: TagTranslateWhereInputObjectSchema.optional(), cursor: TagTranslateWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TagTranslateCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.TagTranslateCountArgs>;

export const TagTranslateCountZodSchema = z.object({ orderBy: z.union([TagTranslateOrderByWithRelationInputObjectSchema, TagTranslateOrderByWithRelationInputObjectSchema.array()]).optional(), where: TagTranslateWhereInputObjectSchema.optional(), cursor: TagTranslateWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TagTranslateCountAggregateInputObjectSchema ]).optional() }).strict();