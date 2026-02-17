import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { UserTaskLinkOrderByWithRelationInputObjectSchema as UserTaskLinkOrderByWithRelationInputObjectSchema } from './objects/UserTaskLinkOrderByWithRelationInput.schema';
import { UserTaskLinkWhereInputObjectSchema as UserTaskLinkWhereInputObjectSchema } from './objects/UserTaskLinkWhereInput.schema';
import { UserTaskLinkWhereUniqueInputObjectSchema as UserTaskLinkWhereUniqueInputObjectSchema } from './objects/UserTaskLinkWhereUniqueInput.schema';
import { UserTaskLinkCountAggregateInputObjectSchema as UserTaskLinkCountAggregateInputObjectSchema } from './objects/UserTaskLinkCountAggregateInput.schema';

export const UserTaskLinkCountSchema: z.ZodType<Prisma.UserTaskLinkCountArgs> = z.object({ orderBy: z.union([UserTaskLinkOrderByWithRelationInputObjectSchema, UserTaskLinkOrderByWithRelationInputObjectSchema.array()]).optional(), where: UserTaskLinkWhereInputObjectSchema.optional(), cursor: UserTaskLinkWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), UserTaskLinkCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.UserTaskLinkCountArgs>;

export const UserTaskLinkCountZodSchema = z.object({ orderBy: z.union([UserTaskLinkOrderByWithRelationInputObjectSchema, UserTaskLinkOrderByWithRelationInputObjectSchema.array()]).optional(), where: UserTaskLinkWhereInputObjectSchema.optional(), cursor: UserTaskLinkWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), UserTaskLinkCountAggregateInputObjectSchema ]).optional() }).strict();