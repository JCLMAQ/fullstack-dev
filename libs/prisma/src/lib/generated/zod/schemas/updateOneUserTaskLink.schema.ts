import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { UserTaskLinkSelectObjectSchema as UserTaskLinkSelectObjectSchema } from './objects/UserTaskLinkSelect.schema';
import { UserTaskLinkIncludeObjectSchema as UserTaskLinkIncludeObjectSchema } from './objects/UserTaskLinkInclude.schema';
import { UserTaskLinkUpdateInputObjectSchema as UserTaskLinkUpdateInputObjectSchema } from './objects/UserTaskLinkUpdateInput.schema';
import { UserTaskLinkUncheckedUpdateInputObjectSchema as UserTaskLinkUncheckedUpdateInputObjectSchema } from './objects/UserTaskLinkUncheckedUpdateInput.schema';
import { UserTaskLinkWhereUniqueInputObjectSchema as UserTaskLinkWhereUniqueInputObjectSchema } from './objects/UserTaskLinkWhereUniqueInput.schema';

export const UserTaskLinkUpdateOneSchema: z.ZodType<Prisma.UserTaskLinkUpdateArgs> = z.object({ select: UserTaskLinkSelectObjectSchema.optional(), include: UserTaskLinkIncludeObjectSchema.optional(), data: z.union([UserTaskLinkUpdateInputObjectSchema, UserTaskLinkUncheckedUpdateInputObjectSchema]), where: UserTaskLinkWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.UserTaskLinkUpdateArgs>;

export const UserTaskLinkUpdateOneZodSchema = z.object({ select: UserTaskLinkSelectObjectSchema.optional(), include: UserTaskLinkIncludeObjectSchema.optional(), data: z.union([UserTaskLinkUpdateInputObjectSchema, UserTaskLinkUncheckedUpdateInputObjectSchema]), where: UserTaskLinkWhereUniqueInputObjectSchema }).strict();