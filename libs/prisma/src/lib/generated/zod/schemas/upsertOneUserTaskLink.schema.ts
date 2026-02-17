import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { UserTaskLinkSelectObjectSchema as UserTaskLinkSelectObjectSchema } from './objects/UserTaskLinkSelect.schema';
import { UserTaskLinkIncludeObjectSchema as UserTaskLinkIncludeObjectSchema } from './objects/UserTaskLinkInclude.schema';
import { UserTaskLinkWhereUniqueInputObjectSchema as UserTaskLinkWhereUniqueInputObjectSchema } from './objects/UserTaskLinkWhereUniqueInput.schema';
import { UserTaskLinkCreateInputObjectSchema as UserTaskLinkCreateInputObjectSchema } from './objects/UserTaskLinkCreateInput.schema';
import { UserTaskLinkUncheckedCreateInputObjectSchema as UserTaskLinkUncheckedCreateInputObjectSchema } from './objects/UserTaskLinkUncheckedCreateInput.schema';
import { UserTaskLinkUpdateInputObjectSchema as UserTaskLinkUpdateInputObjectSchema } from './objects/UserTaskLinkUpdateInput.schema';
import { UserTaskLinkUncheckedUpdateInputObjectSchema as UserTaskLinkUncheckedUpdateInputObjectSchema } from './objects/UserTaskLinkUncheckedUpdateInput.schema';

export const UserTaskLinkUpsertOneSchema: z.ZodType<Prisma.UserTaskLinkUpsertArgs> = z.object({ select: UserTaskLinkSelectObjectSchema.optional(), include: UserTaskLinkIncludeObjectSchema.optional(), where: UserTaskLinkWhereUniqueInputObjectSchema, create: z.union([ UserTaskLinkCreateInputObjectSchema, UserTaskLinkUncheckedCreateInputObjectSchema ]), update: z.union([ UserTaskLinkUpdateInputObjectSchema, UserTaskLinkUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.UserTaskLinkUpsertArgs>;

export const UserTaskLinkUpsertOneZodSchema = z.object({ select: UserTaskLinkSelectObjectSchema.optional(), include: UserTaskLinkIncludeObjectSchema.optional(), where: UserTaskLinkWhereUniqueInputObjectSchema, create: z.union([ UserTaskLinkCreateInputObjectSchema, UserTaskLinkUncheckedCreateInputObjectSchema ]), update: z.union([ UserTaskLinkUpdateInputObjectSchema, UserTaskLinkUncheckedUpdateInputObjectSchema ]) }).strict();