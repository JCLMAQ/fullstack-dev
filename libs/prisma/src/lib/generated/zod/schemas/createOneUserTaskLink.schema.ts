import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { UserTaskLinkSelectObjectSchema as UserTaskLinkSelectObjectSchema } from './objects/UserTaskLinkSelect.schema';
import { UserTaskLinkIncludeObjectSchema as UserTaskLinkIncludeObjectSchema } from './objects/UserTaskLinkInclude.schema';
import { UserTaskLinkCreateInputObjectSchema as UserTaskLinkCreateInputObjectSchema } from './objects/UserTaskLinkCreateInput.schema';
import { UserTaskLinkUncheckedCreateInputObjectSchema as UserTaskLinkUncheckedCreateInputObjectSchema } from './objects/UserTaskLinkUncheckedCreateInput.schema';

export const UserTaskLinkCreateOneSchema: z.ZodType<Prisma.UserTaskLinkCreateArgs> = z.object({ select: UserTaskLinkSelectObjectSchema.optional(), include: UserTaskLinkIncludeObjectSchema.optional(), data: z.union([UserTaskLinkCreateInputObjectSchema, UserTaskLinkUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.UserTaskLinkCreateArgs>;

export const UserTaskLinkCreateOneZodSchema = z.object({ select: UserTaskLinkSelectObjectSchema.optional(), include: UserTaskLinkIncludeObjectSchema.optional(), data: z.union([UserTaskLinkCreateInputObjectSchema, UserTaskLinkUncheckedCreateInputObjectSchema]) }).strict();