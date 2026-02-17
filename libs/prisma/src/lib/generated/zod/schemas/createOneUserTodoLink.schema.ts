import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { UserTodoLinkSelectObjectSchema as UserTodoLinkSelectObjectSchema } from './objects/UserTodoLinkSelect.schema';
import { UserTodoLinkIncludeObjectSchema as UserTodoLinkIncludeObjectSchema } from './objects/UserTodoLinkInclude.schema';
import { UserTodoLinkCreateInputObjectSchema as UserTodoLinkCreateInputObjectSchema } from './objects/UserTodoLinkCreateInput.schema';
import { UserTodoLinkUncheckedCreateInputObjectSchema as UserTodoLinkUncheckedCreateInputObjectSchema } from './objects/UserTodoLinkUncheckedCreateInput.schema';

export const UserTodoLinkCreateOneSchema: z.ZodType<Prisma.UserTodoLinkCreateArgs> = z.object({ select: UserTodoLinkSelectObjectSchema.optional(), include: UserTodoLinkIncludeObjectSchema.optional(), data: z.union([UserTodoLinkCreateInputObjectSchema, UserTodoLinkUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.UserTodoLinkCreateArgs>;

export const UserTodoLinkCreateOneZodSchema = z.object({ select: UserTodoLinkSelectObjectSchema.optional(), include: UserTodoLinkIncludeObjectSchema.optional(), data: z.union([UserTodoLinkCreateInputObjectSchema, UserTodoLinkUncheckedCreateInputObjectSchema]) }).strict();