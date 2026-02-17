import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { UserTodoLinkCreateManyInputObjectSchema as UserTodoLinkCreateManyInputObjectSchema } from './objects/UserTodoLinkCreateManyInput.schema';

export const UserTodoLinkCreateManySchema: z.ZodType<Prisma.UserTodoLinkCreateManyArgs> = z.object({ data: z.union([ UserTodoLinkCreateManyInputObjectSchema, z.array(UserTodoLinkCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.UserTodoLinkCreateManyArgs>;

export const UserTodoLinkCreateManyZodSchema = z.object({ data: z.union([ UserTodoLinkCreateManyInputObjectSchema, z.array(UserTodoLinkCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();