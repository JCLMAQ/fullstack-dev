import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { UserTodoLinkSelectObjectSchema as UserTodoLinkSelectObjectSchema } from './objects/UserTodoLinkSelect.schema';
import { UserTodoLinkIncludeObjectSchema as UserTodoLinkIncludeObjectSchema } from './objects/UserTodoLinkInclude.schema';
import { UserTodoLinkWhereUniqueInputObjectSchema as UserTodoLinkWhereUniqueInputObjectSchema } from './objects/UserTodoLinkWhereUniqueInput.schema';
import { UserTodoLinkCreateInputObjectSchema as UserTodoLinkCreateInputObjectSchema } from './objects/UserTodoLinkCreateInput.schema';
import { UserTodoLinkUncheckedCreateInputObjectSchema as UserTodoLinkUncheckedCreateInputObjectSchema } from './objects/UserTodoLinkUncheckedCreateInput.schema';
import { UserTodoLinkUpdateInputObjectSchema as UserTodoLinkUpdateInputObjectSchema } from './objects/UserTodoLinkUpdateInput.schema';
import { UserTodoLinkUncheckedUpdateInputObjectSchema as UserTodoLinkUncheckedUpdateInputObjectSchema } from './objects/UserTodoLinkUncheckedUpdateInput.schema';

export const UserTodoLinkUpsertOneSchema: z.ZodType<Prisma.UserTodoLinkUpsertArgs> = z.object({ select: UserTodoLinkSelectObjectSchema.optional(), include: UserTodoLinkIncludeObjectSchema.optional(), where: UserTodoLinkWhereUniqueInputObjectSchema, create: z.union([ UserTodoLinkCreateInputObjectSchema, UserTodoLinkUncheckedCreateInputObjectSchema ]), update: z.union([ UserTodoLinkUpdateInputObjectSchema, UserTodoLinkUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.UserTodoLinkUpsertArgs>;

export const UserTodoLinkUpsertOneZodSchema = z.object({ select: UserTodoLinkSelectObjectSchema.optional(), include: UserTodoLinkIncludeObjectSchema.optional(), where: UserTodoLinkWhereUniqueInputObjectSchema, create: z.union([ UserTodoLinkCreateInputObjectSchema, UserTodoLinkUncheckedCreateInputObjectSchema ]), update: z.union([ UserTodoLinkUpdateInputObjectSchema, UserTodoLinkUncheckedUpdateInputObjectSchema ]) }).strict();