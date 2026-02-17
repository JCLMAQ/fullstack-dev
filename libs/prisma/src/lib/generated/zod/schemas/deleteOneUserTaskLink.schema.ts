import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { UserTaskLinkSelectObjectSchema as UserTaskLinkSelectObjectSchema } from './objects/UserTaskLinkSelect.schema';
import { UserTaskLinkIncludeObjectSchema as UserTaskLinkIncludeObjectSchema } from './objects/UserTaskLinkInclude.schema';
import { UserTaskLinkWhereUniqueInputObjectSchema as UserTaskLinkWhereUniqueInputObjectSchema } from './objects/UserTaskLinkWhereUniqueInput.schema';

export const UserTaskLinkDeleteOneSchema: z.ZodType<Prisma.UserTaskLinkDeleteArgs> = z.object({ select: UserTaskLinkSelectObjectSchema.optional(), include: UserTaskLinkIncludeObjectSchema.optional(), where: UserTaskLinkWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.UserTaskLinkDeleteArgs>;

export const UserTaskLinkDeleteOneZodSchema = z.object({ select: UserTaskLinkSelectObjectSchema.optional(), include: UserTaskLinkIncludeObjectSchema.optional(), where: UserTaskLinkWhereUniqueInputObjectSchema }).strict();