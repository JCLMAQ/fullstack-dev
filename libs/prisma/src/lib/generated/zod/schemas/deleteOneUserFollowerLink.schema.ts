import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { UserFollowerLinkSelectObjectSchema as UserFollowerLinkSelectObjectSchema } from './objects/UserFollowerLinkSelect.schema';
import { UserFollowerLinkIncludeObjectSchema as UserFollowerLinkIncludeObjectSchema } from './objects/UserFollowerLinkInclude.schema';
import { UserFollowerLinkWhereUniqueInputObjectSchema as UserFollowerLinkWhereUniqueInputObjectSchema } from './objects/UserFollowerLinkWhereUniqueInput.schema';

export const UserFollowerLinkDeleteOneSchema: z.ZodType<Prisma.UserFollowerLinkDeleteArgs> = z.object({ select: UserFollowerLinkSelectObjectSchema.optional(), include: UserFollowerLinkIncludeObjectSchema.optional(), where: UserFollowerLinkWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.UserFollowerLinkDeleteArgs>;

export const UserFollowerLinkDeleteOneZodSchema = z.object({ select: UserFollowerLinkSelectObjectSchema.optional(), include: UserFollowerLinkIncludeObjectSchema.optional(), where: UserFollowerLinkWhereUniqueInputObjectSchema }).strict();