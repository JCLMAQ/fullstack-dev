import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { UserPostLikeLinkSelectObjectSchema as UserPostLikeLinkSelectObjectSchema } from './objects/UserPostLikeLinkSelect.schema';
import { UserPostLikeLinkIncludeObjectSchema as UserPostLikeLinkIncludeObjectSchema } from './objects/UserPostLikeLinkInclude.schema';
import { UserPostLikeLinkWhereUniqueInputObjectSchema as UserPostLikeLinkWhereUniqueInputObjectSchema } from './objects/UserPostLikeLinkWhereUniqueInput.schema';
import { UserPostLikeLinkCreateInputObjectSchema as UserPostLikeLinkCreateInputObjectSchema } from './objects/UserPostLikeLinkCreateInput.schema';
import { UserPostLikeLinkUncheckedCreateInputObjectSchema as UserPostLikeLinkUncheckedCreateInputObjectSchema } from './objects/UserPostLikeLinkUncheckedCreateInput.schema';
import { UserPostLikeLinkUpdateInputObjectSchema as UserPostLikeLinkUpdateInputObjectSchema } from './objects/UserPostLikeLinkUpdateInput.schema';
import { UserPostLikeLinkUncheckedUpdateInputObjectSchema as UserPostLikeLinkUncheckedUpdateInputObjectSchema } from './objects/UserPostLikeLinkUncheckedUpdateInput.schema';

export const UserPostLikeLinkUpsertOneSchema: z.ZodType<Prisma.UserPostLikeLinkUpsertArgs> = z.object({ select: UserPostLikeLinkSelectObjectSchema.optional(), include: UserPostLikeLinkIncludeObjectSchema.optional(), where: UserPostLikeLinkWhereUniqueInputObjectSchema, create: z.union([ UserPostLikeLinkCreateInputObjectSchema, UserPostLikeLinkUncheckedCreateInputObjectSchema ]), update: z.union([ UserPostLikeLinkUpdateInputObjectSchema, UserPostLikeLinkUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.UserPostLikeLinkUpsertArgs>;

export const UserPostLikeLinkUpsertOneZodSchema = z.object({ select: UserPostLikeLinkSelectObjectSchema.optional(), include: UserPostLikeLinkIncludeObjectSchema.optional(), where: UserPostLikeLinkWhereUniqueInputObjectSchema, create: z.union([ UserPostLikeLinkCreateInputObjectSchema, UserPostLikeLinkUncheckedCreateInputObjectSchema ]), update: z.union([ UserPostLikeLinkUpdateInputObjectSchema, UserPostLikeLinkUncheckedUpdateInputObjectSchema ]) }).strict();