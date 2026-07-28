import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { UserFollowerLinkCreateManyInputObjectSchema as UserFollowerLinkCreateManyInputObjectSchema } from './objects/UserFollowerLinkCreateManyInput.schema';

export const UserFollowerLinkCreateManySchema: z.ZodType<Prisma.UserFollowerLinkCreateManyArgs> = z.object({ data: z.union([ UserFollowerLinkCreateManyInputObjectSchema, z.array(UserFollowerLinkCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.UserFollowerLinkCreateManyArgs>;

export const UserFollowerLinkCreateManyZodSchema = z.object({ data: z.union([ UserFollowerLinkCreateManyInputObjectSchema, z.array(UserFollowerLinkCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();