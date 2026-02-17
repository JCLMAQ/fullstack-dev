import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { UserPostLikeLinkSelectObjectSchema as UserPostLikeLinkSelectObjectSchema } from './objects/UserPostLikeLinkSelect.schema';
import { UserPostLikeLinkIncludeObjectSchema as UserPostLikeLinkIncludeObjectSchema } from './objects/UserPostLikeLinkInclude.schema';
import { UserPostLikeLinkUpdateInputObjectSchema as UserPostLikeLinkUpdateInputObjectSchema } from './objects/UserPostLikeLinkUpdateInput.schema';
import { UserPostLikeLinkUncheckedUpdateInputObjectSchema as UserPostLikeLinkUncheckedUpdateInputObjectSchema } from './objects/UserPostLikeLinkUncheckedUpdateInput.schema';
import { UserPostLikeLinkWhereUniqueInputObjectSchema as UserPostLikeLinkWhereUniqueInputObjectSchema } from './objects/UserPostLikeLinkWhereUniqueInput.schema';

export const UserPostLikeLinkUpdateOneSchema: z.ZodType<Prisma.UserPostLikeLinkUpdateArgs> = z.object({ select: UserPostLikeLinkSelectObjectSchema.optional(), include: UserPostLikeLinkIncludeObjectSchema.optional(), data: z.union([UserPostLikeLinkUpdateInputObjectSchema, UserPostLikeLinkUncheckedUpdateInputObjectSchema]), where: UserPostLikeLinkWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.UserPostLikeLinkUpdateArgs>;

export const UserPostLikeLinkUpdateOneZodSchema = z.object({ select: UserPostLikeLinkSelectObjectSchema.optional(), include: UserPostLikeLinkIncludeObjectSchema.optional(), data: z.union([UserPostLikeLinkUpdateInputObjectSchema, UserPostLikeLinkUncheckedUpdateInputObjectSchema]), where: UserPostLikeLinkWhereUniqueInputObjectSchema }).strict();