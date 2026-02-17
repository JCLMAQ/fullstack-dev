import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { TagValueOrderByWithRelationInputObjectSchema as TagValueOrderByWithRelationInputObjectSchema } from './objects/TagValueOrderByWithRelationInput.schema';
import { TagValueWhereInputObjectSchema as TagValueWhereInputObjectSchema } from './objects/TagValueWhereInput.schema';
import { TagValueWhereUniqueInputObjectSchema as TagValueWhereUniqueInputObjectSchema } from './objects/TagValueWhereUniqueInput.schema';
import { TagValueCountAggregateInputObjectSchema as TagValueCountAggregateInputObjectSchema } from './objects/TagValueCountAggregateInput.schema';

export const TagValueCountSchema: z.ZodType<Prisma.TagValueCountArgs> = z.object({ orderBy: z.union([TagValueOrderByWithRelationInputObjectSchema, TagValueOrderByWithRelationInputObjectSchema.array()]).optional(), where: TagValueWhereInputObjectSchema.optional(), cursor: TagValueWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TagValueCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.TagValueCountArgs>;

export const TagValueCountZodSchema = z.object({ orderBy: z.union([TagValueOrderByWithRelationInputObjectSchema, TagValueOrderByWithRelationInputObjectSchema.array()]).optional(), where: TagValueWhereInputObjectSchema.optional(), cursor: TagValueWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TagValueCountAggregateInputObjectSchema ]).optional() }).strict();