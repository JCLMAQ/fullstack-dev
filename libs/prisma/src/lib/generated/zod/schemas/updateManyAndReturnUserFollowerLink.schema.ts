import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { UserFollowerLinkSelectObjectSchema as UserFollowerLinkSelectObjectSchema } from './objects/UserFollowerLinkSelect.schema';
import { UserFollowerLinkUpdateManyMutationInputObjectSchema as UserFollowerLinkUpdateManyMutationInputObjectSchema } from './objects/UserFollowerLinkUpdateManyMutationInput.schema';
import { UserFollowerLinkWhereInputObjectSchema as UserFollowerLinkWhereInputObjectSchema } from './objects/UserFollowerLinkWhereInput.schema';

export const UserFollowerLinkUpdateManyAndReturnSchema: z.ZodType<Prisma.UserFollowerLinkUpdateManyAndReturnArgs> = z.object({ select: UserFollowerLinkSelectObjectSchema.optional(), data: UserFollowerLinkUpdateManyMutationInputObjectSchema, where: UserFollowerLinkWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.UserFollowerLinkUpdateManyAndReturnArgs>;

export const UserFollowerLinkUpdateManyAndReturnZodSchema = z.object({ select: UserFollowerLinkSelectObjectSchema.optional(), data: UserFollowerLinkUpdateManyMutationInputObjectSchema, where: UserFollowerLinkWhereInputObjectSchema.optional() }).strict();