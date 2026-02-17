import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { UserTaskLinkSelectObjectSchema as UserTaskLinkSelectObjectSchema } from './objects/UserTaskLinkSelect.schema';
import { UserTaskLinkIncludeObjectSchema as UserTaskLinkIncludeObjectSchema } from './objects/UserTaskLinkInclude.schema';
import { UserTaskLinkWhereUniqueInputObjectSchema as UserTaskLinkWhereUniqueInputObjectSchema } from './objects/UserTaskLinkWhereUniqueInput.schema';

export const UserTaskLinkFindUniqueSchema: z.ZodType<Prisma.UserTaskLinkFindUniqueArgs> = z.object({ select: UserTaskLinkSelectObjectSchema.optional(), include: UserTaskLinkIncludeObjectSchema.optional(), where: UserTaskLinkWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.UserTaskLinkFindUniqueArgs>;

export const UserTaskLinkFindUniqueZodSchema = z.object({ select: UserTaskLinkSelectObjectSchema.optional(), include: UserTaskLinkIncludeObjectSchema.optional(), where: UserTaskLinkWhereUniqueInputObjectSchema }).strict();