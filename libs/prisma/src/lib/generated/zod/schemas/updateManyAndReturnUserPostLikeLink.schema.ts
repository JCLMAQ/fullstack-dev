import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { UserPostLikeLinkSelectObjectSchema as UserPostLikeLinkSelectObjectSchema } from './objects/UserPostLikeLinkSelect.schema';
import { UserPostLikeLinkUpdateManyMutationInputObjectSchema as UserPostLikeLinkUpdateManyMutationInputObjectSchema } from './objects/UserPostLikeLinkUpdateManyMutationInput.schema';
import { UserPostLikeLinkWhereInputObjectSchema as UserPostLikeLinkWhereInputObjectSchema } from './objects/UserPostLikeLinkWhereInput.schema';

export const UserPostLikeLinkUpdateManyAndReturnSchema: z.ZodType<Prisma.UserPostLikeLinkUpdateManyAndReturnArgs> = z.object({ select: UserPostLikeLinkSelectObjectSchema.optional(), data: UserPostLikeLinkUpdateManyMutationInputObjectSchema, where: UserPostLikeLinkWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.UserPostLikeLinkUpdateManyAndReturnArgs>;

export const UserPostLikeLinkUpdateManyAndReturnZodSchema = z.object({ select: UserPostLikeLinkSelectObjectSchema.optional(), data: UserPostLikeLinkUpdateManyMutationInputObjectSchema, where: UserPostLikeLinkWhereInputObjectSchema.optional() }).strict();