import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { TagCategoriesOrderByWithRelationInputObjectSchema as TagCategoriesOrderByWithRelationInputObjectSchema } from './objects/TagCategoriesOrderByWithRelationInput.schema';
import { TagCategoriesWhereInputObjectSchema as TagCategoriesWhereInputObjectSchema } from './objects/TagCategoriesWhereInput.schema';
import { TagCategoriesWhereUniqueInputObjectSchema as TagCategoriesWhereUniqueInputObjectSchema } from './objects/TagCategoriesWhereUniqueInput.schema';
import { TagCategoriesCountAggregateInputObjectSchema as TagCategoriesCountAggregateInputObjectSchema } from './objects/TagCategoriesCountAggregateInput.schema';

export const TagCategoriesCountSchema: z.ZodType<Prisma.TagCategoriesCountArgs> = z.object({ orderBy: z.union([TagCategoriesOrderByWithRelationInputObjectSchema, TagCategoriesOrderByWithRelationInputObjectSchema.array()]).optional(), where: TagCategoriesWhereInputObjectSchema.optional(), cursor: TagCategoriesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TagCategoriesCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.TagCategoriesCountArgs>;

export const TagCategoriesCountZodSchema = z.object({ orderBy: z.union([TagCategoriesOrderByWithRelationInputObjectSchema, TagCategoriesOrderByWithRelationInputObjectSchema.array()]).optional(), where: TagCategoriesWhereInputObjectSchema.optional(), cursor: TagCategoriesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TagCategoriesCountAggregateInputObjectSchema ]).optional() }).strict();