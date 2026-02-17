import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { UserFollowerLinkSelectObjectSchema as UserFollowerLinkSelectObjectSchema } from './objects/UserFollowerLinkSelect.schema';
import { UserFollowerLinkIncludeObjectSchema as UserFollowerLinkIncludeObjectSchema } from './objects/UserFollowerLinkInclude.schema';
import { UserFollowerLinkWhereUniqueInputObjectSchema as UserFollowerLinkWhereUniqueInputObjectSchema } from './objects/UserFollowerLinkWhereUniqueInput.schema';
import { UserFollowerLinkCreateInputObjectSchema as UserFollowerLinkCreateInputObjectSchema } from './objects/UserFollowerLinkCreateInput.schema';
import { UserFollowerLinkUncheckedCreateInputObjectSchema as UserFollowerLinkUncheckedCreateInputObjectSchema } from './objects/UserFollowerLinkUncheckedCreateInput.schema';
import { UserFollowerLinkUpdateInputObjectSchema as UserFollowerLinkUpdateInputObjectSchema } from './objects/UserFollowerLinkUpdateInput.schema';
import { UserFollowerLinkUncheckedUpdateInputObjectSchema as UserFollowerLinkUncheckedUpdateInputObjectSchema } from './objects/UserFollowerLinkUncheckedUpdateInput.schema';

export const UserFollowerLinkUpsertOneSchema: z.ZodType<Prisma.UserFollowerLinkUpsertArgs> = z.object({ select: UserFollowerLinkSelectObjectSchema.optional(), include: UserFollowerLinkIncludeObjectSchema.optional(), where: UserFollowerLinkWhereUniqueInputObjectSchema, create: z.union([ UserFollowerLinkCreateInputObjectSchema, UserFollowerLinkUncheckedCreateInputObjectSchema ]), update: z.union([ UserFollowerLinkUpdateInputObjectSchema, UserFollowerLinkUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.UserFollowerLinkUpsertArgs>;

export const UserFollowerLinkUpsertOneZodSchema = z.object({ select: UserFollowerLinkSelectObjectSchema.optional(), include: UserFollowerLinkIncludeObjectSchema.optional(), where: UserFollowerLinkWhereUniqueInputObjectSchema, create: z.union([ UserFollowerLinkCreateInputObjectSchema, UserFollowerLinkUncheckedCreateInputObjectSchema ]), update: z.union([ UserFollowerLinkUpdateInputObjectSchema, UserFollowerLinkUncheckedUpdateInputObjectSchema ]) }).strict();