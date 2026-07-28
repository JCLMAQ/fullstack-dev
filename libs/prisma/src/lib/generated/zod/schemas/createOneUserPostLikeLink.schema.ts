import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { UserPostLikeLinkSelectObjectSchema as UserPostLikeLinkSelectObjectSchema } from './objects/UserPostLikeLinkSelect.schema';
import { UserPostLikeLinkIncludeObjectSchema as UserPostLikeLinkIncludeObjectSchema } from './objects/UserPostLikeLinkInclude.schema';
import { UserPostLikeLinkCreateInputObjectSchema as UserPostLikeLinkCreateInputObjectSchema } from './objects/UserPostLikeLinkCreateInput.schema';
import { UserPostLikeLinkUncheckedCreateInputObjectSchema as UserPostLikeLinkUncheckedCreateInputObjectSchema } from './objects/UserPostLikeLinkUncheckedCreateInput.schema';

export const UserPostLikeLinkCreateOneSchema: z.ZodType<Prisma.UserPostLikeLinkCreateArgs> = z.object({ select: UserPostLikeLinkSelectObjectSchema.optional(), include: UserPostLikeLinkIncludeObjectSchema.optional(), data: z.union([UserPostLikeLinkCreateInputObjectSchema, UserPostLikeLinkUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.UserPostLikeLinkCreateArgs>;

export const UserPostLikeLinkCreateOneZodSchema = z.object({ select: UserPostLikeLinkSelectObjectSchema.optional(), include: UserPostLikeLinkIncludeObjectSchema.optional(), data: z.union([UserPostLikeLinkCreateInputObjectSchema, UserPostLikeLinkUncheckedCreateInputObjectSchema]) }).strict();