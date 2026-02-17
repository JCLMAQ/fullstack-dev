import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { UserFollowerLinkUpdateManyMutationInputObjectSchema as UserFollowerLinkUpdateManyMutationInputObjectSchema } from './objects/UserFollowerLinkUpdateManyMutationInput.schema';
import { UserFollowerLinkWhereInputObjectSchema as UserFollowerLinkWhereInputObjectSchema } from './objects/UserFollowerLinkWhereInput.schema';

export const UserFollowerLinkUpdateManySchema: z.ZodType<Prisma.UserFollowerLinkUpdateManyArgs> = z.object({ data: UserFollowerLinkUpdateManyMutationInputObjectSchema, where: UserFollowerLinkWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.UserFollowerLinkUpdateManyArgs>;

export const UserFollowerLinkUpdateManyZodSchema = z.object({ data: UserFollowerLinkUpdateManyMutationInputObjectSchema, where: UserFollowerLinkWhereInputObjectSchema.optional() }).strict();