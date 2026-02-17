import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { UserFollowerLinkSelectObjectSchema as UserFollowerLinkSelectObjectSchema } from './objects/UserFollowerLinkSelect.schema';
import { UserFollowerLinkIncludeObjectSchema as UserFollowerLinkIncludeObjectSchema } from './objects/UserFollowerLinkInclude.schema';
import { UserFollowerLinkUpdateInputObjectSchema as UserFollowerLinkUpdateInputObjectSchema } from './objects/UserFollowerLinkUpdateInput.schema';
import { UserFollowerLinkUncheckedUpdateInputObjectSchema as UserFollowerLinkUncheckedUpdateInputObjectSchema } from './objects/UserFollowerLinkUncheckedUpdateInput.schema';
import { UserFollowerLinkWhereUniqueInputObjectSchema as UserFollowerLinkWhereUniqueInputObjectSchema } from './objects/UserFollowerLinkWhereUniqueInput.schema';

export const UserFollowerLinkUpdateOneSchema: z.ZodType<Prisma.UserFollowerLinkUpdateArgs> = z.object({ select: UserFollowerLinkSelectObjectSchema.optional(), include: UserFollowerLinkIncludeObjectSchema.optional(), data: z.union([UserFollowerLinkUpdateInputObjectSchema, UserFollowerLinkUncheckedUpdateInputObjectSchema]), where: UserFollowerLinkWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.UserFollowerLinkUpdateArgs>;

export const UserFollowerLinkUpdateOneZodSchema = z.object({ select: UserFollowerLinkSelectObjectSchema.optional(), include: UserFollowerLinkIncludeObjectSchema.optional(), data: z.union([UserFollowerLinkUpdateInputObjectSchema, UserFollowerLinkUncheckedUpdateInputObjectSchema]), where: UserFollowerLinkWhereUniqueInputObjectSchema }).strict();