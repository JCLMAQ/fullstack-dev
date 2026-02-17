import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { UserPostLikeLinkSelectObjectSchema as UserPostLikeLinkSelectObjectSchema } from './objects/UserPostLikeLinkSelect.schema';
import { UserPostLikeLinkIncludeObjectSchema as UserPostLikeLinkIncludeObjectSchema } from './objects/UserPostLikeLinkInclude.schema';
import { UserPostLikeLinkWhereUniqueInputObjectSchema as UserPostLikeLinkWhereUniqueInputObjectSchema } from './objects/UserPostLikeLinkWhereUniqueInput.schema';

export const UserPostLikeLinkFindUniqueSchema: z.ZodType<Prisma.UserPostLikeLinkFindUniqueArgs> = z.object({ select: UserPostLikeLinkSelectObjectSchema.optional(), include: UserPostLikeLinkIncludeObjectSchema.optional(), where: UserPostLikeLinkWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.UserPostLikeLinkFindUniqueArgs>;

export const UserPostLikeLinkFindUniqueZodSchema = z.object({ select: UserPostLikeLinkSelectObjectSchema.optional(), include: UserPostLikeLinkIncludeObjectSchema.optional(), where: UserPostLikeLinkWhereUniqueInputObjectSchema }).strict();