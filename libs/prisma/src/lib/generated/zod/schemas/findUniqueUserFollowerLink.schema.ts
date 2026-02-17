import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { UserFollowerLinkSelectObjectSchema as UserFollowerLinkSelectObjectSchema } from './objects/UserFollowerLinkSelect.schema';
import { UserFollowerLinkIncludeObjectSchema as UserFollowerLinkIncludeObjectSchema } from './objects/UserFollowerLinkInclude.schema';
import { UserFollowerLinkWhereUniqueInputObjectSchema as UserFollowerLinkWhereUniqueInputObjectSchema } from './objects/UserFollowerLinkWhereUniqueInput.schema';

export const UserFollowerLinkFindUniqueSchema: z.ZodType<Prisma.UserFollowerLinkFindUniqueArgs> = z.object({ select: UserFollowerLinkSelectObjectSchema.optional(), include: UserFollowerLinkIncludeObjectSchema.optional(), where: UserFollowerLinkWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.UserFollowerLinkFindUniqueArgs>;

export const UserFollowerLinkFindUniqueZodSchema = z.object({ select: UserFollowerLinkSelectObjectSchema.optional(), include: UserFollowerLinkIncludeObjectSchema.optional(), where: UserFollowerLinkWhereUniqueInputObjectSchema }).strict();