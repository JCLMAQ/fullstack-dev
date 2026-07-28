import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { UserSecretOrderByWithRelationInputObjectSchema as UserSecretOrderByWithRelationInputObjectSchema } from './objects/UserSecretOrderByWithRelationInput.schema';
import { UserSecretWhereInputObjectSchema as UserSecretWhereInputObjectSchema } from './objects/UserSecretWhereInput.schema';
import { UserSecretWhereUniqueInputObjectSchema as UserSecretWhereUniqueInputObjectSchema } from './objects/UserSecretWhereUniqueInput.schema';
import { UserSecretCountAggregateInputObjectSchema as UserSecretCountAggregateInputObjectSchema } from './objects/UserSecretCountAggregateInput.schema';

export const UserSecretCountSchema: z.ZodType<Prisma.UserSecretCountArgs> = z.object({ orderBy: z.union([UserSecretOrderByWithRelationInputObjectSchema, UserSecretOrderByWithRelationInputObjectSchema.array()]).optional(), where: UserSecretWhereInputObjectSchema.optional(), cursor: UserSecretWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), UserSecretCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.UserSecretCountArgs>;

export const UserSecretCountZodSchema = z.object({ orderBy: z.union([UserSecretOrderByWithRelationInputObjectSchema, UserSecretOrderByWithRelationInputObjectSchema.array()]).optional(), where: UserSecretWhereInputObjectSchema.optional(), cursor: UserSecretWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), UserSecretCountAggregateInputObjectSchema ]).optional() }).strict();