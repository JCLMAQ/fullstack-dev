import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { UserFollowerLinkSelectObjectSchema as UserFollowerLinkSelectObjectSchema } from './objects/UserFollowerLinkSelect.schema';
import { UserFollowerLinkCreateManyInputObjectSchema as UserFollowerLinkCreateManyInputObjectSchema } from './objects/UserFollowerLinkCreateManyInput.schema';

export const UserFollowerLinkCreateManyAndReturnSchema: z.ZodType<Prisma.UserFollowerLinkCreateManyAndReturnArgs> = z.object({ select: UserFollowerLinkSelectObjectSchema.optional(), data: z.union([ UserFollowerLinkCreateManyInputObjectSchema, z.array(UserFollowerLinkCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.UserFollowerLinkCreateManyAndReturnArgs>;

export const UserFollowerLinkCreateManyAndReturnZodSchema = z.object({ select: UserFollowerLinkSelectObjectSchema.optional(), data: z.union([ UserFollowerLinkCreateManyInputObjectSchema, z.array(UserFollowerLinkCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();