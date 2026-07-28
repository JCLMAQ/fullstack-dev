import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { UserTaskLinkSelectObjectSchema as UserTaskLinkSelectObjectSchema } from './objects/UserTaskLinkSelect.schema';
import { UserTaskLinkIncludeObjectSchema as UserTaskLinkIncludeObjectSchema } from './objects/UserTaskLinkInclude.schema';
import { UserTaskLinkWhereUniqueInputObjectSchema as UserTaskLinkWhereUniqueInputObjectSchema } from './objects/UserTaskLinkWhereUniqueInput.schema';

export const UserTaskLinkFindUniqueOrThrowSchema: z.ZodType<Prisma.UserTaskLinkFindUniqueOrThrowArgs> = z.object({ select: UserTaskLinkSelectObjectSchema.optional(), include: UserTaskLinkIncludeObjectSchema.optional(), where: UserTaskLinkWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.UserTaskLinkFindUniqueOrThrowArgs>;

export const UserTaskLinkFindUniqueOrThrowZodSchema = z.object({ select: UserTaskLinkSelectObjectSchema.optional(), include: UserTaskLinkIncludeObjectSchema.optional(), where: UserTaskLinkWhereUniqueInputObjectSchema }).strict();