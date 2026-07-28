import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { UserTaskLinkSelectObjectSchema as UserTaskLinkSelectObjectSchema } from './objects/UserTaskLinkSelect.schema';
import { UserTaskLinkCreateManyInputObjectSchema as UserTaskLinkCreateManyInputObjectSchema } from './objects/UserTaskLinkCreateManyInput.schema';

export const UserTaskLinkCreateManyAndReturnSchema: z.ZodType<Prisma.UserTaskLinkCreateManyAndReturnArgs> = z.object({ select: UserTaskLinkSelectObjectSchema.optional(), data: z.union([ UserTaskLinkCreateManyInputObjectSchema, z.array(UserTaskLinkCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.UserTaskLinkCreateManyAndReturnArgs>;

export const UserTaskLinkCreateManyAndReturnZodSchema = z.object({ select: UserTaskLinkSelectObjectSchema.optional(), data: z.union([ UserTaskLinkCreateManyInputObjectSchema, z.array(UserTaskLinkCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();