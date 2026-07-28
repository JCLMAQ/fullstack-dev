import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { UserTodoLinkOrderByWithRelationInputObjectSchema as UserTodoLinkOrderByWithRelationInputObjectSchema } from './objects/UserTodoLinkOrderByWithRelationInput.schema';
import { UserTodoLinkWhereInputObjectSchema as UserTodoLinkWhereInputObjectSchema } from './objects/UserTodoLinkWhereInput.schema';
import { UserTodoLinkWhereUniqueInputObjectSchema as UserTodoLinkWhereUniqueInputObjectSchema } from './objects/UserTodoLinkWhereUniqueInput.schema';
import { UserTodoLinkCountAggregateInputObjectSchema as UserTodoLinkCountAggregateInputObjectSchema } from './objects/UserTodoLinkCountAggregateInput.schema';

export const UserTodoLinkCountSchema: z.ZodType<Prisma.UserTodoLinkCountArgs> = z.object({ orderBy: z.union([UserTodoLinkOrderByWithRelationInputObjectSchema, UserTodoLinkOrderByWithRelationInputObjectSchema.array()]).optional(), where: UserTodoLinkWhereInputObjectSchema.optional(), cursor: UserTodoLinkWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), UserTodoLinkCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.UserTodoLinkCountArgs>;

export const UserTodoLinkCountZodSchema = z.object({ orderBy: z.union([UserTodoLinkOrderByWithRelationInputObjectSchema, UserTodoLinkOrderByWithRelationInputObjectSchema.array()]).optional(), where: UserTodoLinkWhereInputObjectSchema.optional(), cursor: UserTodoLinkWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), UserTodoLinkCountAggregateInputObjectSchema ]).optional() }).strict();