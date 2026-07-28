import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { UserFollowerLinkSelectObjectSchema as UserFollowerLinkSelectObjectSchema } from './objects/UserFollowerLinkSelect.schema';
import { UserFollowerLinkIncludeObjectSchema as UserFollowerLinkIncludeObjectSchema } from './objects/UserFollowerLinkInclude.schema';
import { UserFollowerLinkCreateInputObjectSchema as UserFollowerLinkCreateInputObjectSchema } from './objects/UserFollowerLinkCreateInput.schema';
import { UserFollowerLinkUncheckedCreateInputObjectSchema as UserFollowerLinkUncheckedCreateInputObjectSchema } from './objects/UserFollowerLinkUncheckedCreateInput.schema';

export const UserFollowerLinkCreateOneSchema: z.ZodType<Prisma.UserFollowerLinkCreateArgs> = z.object({ select: UserFollowerLinkSelectObjectSchema.optional(), include: UserFollowerLinkIncludeObjectSchema.optional(), data: z.union([UserFollowerLinkCreateInputObjectSchema, UserFollowerLinkUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.UserFollowerLinkCreateArgs>;

export const UserFollowerLinkCreateOneZodSchema = z.object({ select: UserFollowerLinkSelectObjectSchema.optional(), include: UserFollowerLinkIncludeObjectSchema.optional(), data: z.union([UserFollowerLinkCreateInputObjectSchema, UserFollowerLinkUncheckedCreateInputObjectSchema]) }).strict();