import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { UserPostLikeLinkSelectObjectSchema as UserPostLikeLinkSelectObjectSchema } from './objects/UserPostLikeLinkSelect.schema';
import { UserPostLikeLinkIncludeObjectSchema as UserPostLikeLinkIncludeObjectSchema } from './objects/UserPostLikeLinkInclude.schema';
import { UserPostLikeLinkWhereUniqueInputObjectSchema as UserPostLikeLinkWhereUniqueInputObjectSchema } from './objects/UserPostLikeLinkWhereUniqueInput.schema';

export const UserPostLikeLinkDeleteOneSchema: z.ZodType<Prisma.UserPostLikeLinkDeleteArgs> = z.object({ select: UserPostLikeLinkSelectObjectSchema.optional(), include: UserPostLikeLinkIncludeObjectSchema.optional(), where: UserPostLikeLinkWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.UserPostLikeLinkDeleteArgs>;

export const UserPostLikeLinkDeleteOneZodSchema = z.object({ select: UserPostLikeLinkSelectObjectSchema.optional(), include: UserPostLikeLinkIncludeObjectSchema.optional(), where: UserPostLikeLinkWhereUniqueInputObjectSchema }).strict();