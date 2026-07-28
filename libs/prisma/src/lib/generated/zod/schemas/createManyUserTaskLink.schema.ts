import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { UserTaskLinkCreateManyInputObjectSchema as UserTaskLinkCreateManyInputObjectSchema } from './objects/UserTaskLinkCreateManyInput.schema';

export const UserTaskLinkCreateManySchema: z.ZodType<Prisma.UserTaskLinkCreateManyArgs> = z.object({ data: z.union([ UserTaskLinkCreateManyInputObjectSchema, z.array(UserTaskLinkCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.UserTaskLinkCreateManyArgs>;

export const UserTaskLinkCreateManyZodSchema = z.object({ data: z.union([ UserTaskLinkCreateManyInputObjectSchema, z.array(UserTaskLinkCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();