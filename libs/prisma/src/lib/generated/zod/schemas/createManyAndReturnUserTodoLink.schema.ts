import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { UserTodoLinkSelectObjectSchema as UserTodoLinkSelectObjectSchema } from './objects/UserTodoLinkSelect.schema';
import { UserTodoLinkCreateManyInputObjectSchema as UserTodoLinkCreateManyInputObjectSchema } from './objects/UserTodoLinkCreateManyInput.schema';

export const UserTodoLinkCreateManyAndReturnSchema: z.ZodType<Prisma.UserTodoLinkCreateManyAndReturnArgs> = z.object({ select: UserTodoLinkSelectObjectSchema.optional(), data: z.union([ UserTodoLinkCreateManyInputObjectSchema, z.array(UserTodoLinkCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.UserTodoLinkCreateManyAndReturnArgs>;

export const UserTodoLinkCreateManyAndReturnZodSchema = z.object({ select: UserTodoLinkSelectObjectSchema.optional(), data: z.union([ UserTodoLinkCreateManyInputObjectSchema, z.array(UserTodoLinkCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();