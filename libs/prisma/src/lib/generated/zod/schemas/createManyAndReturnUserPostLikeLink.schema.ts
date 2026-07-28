import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { UserPostLikeLinkSelectObjectSchema as UserPostLikeLinkSelectObjectSchema } from './objects/UserPostLikeLinkSelect.schema';
import { UserPostLikeLinkCreateManyInputObjectSchema as UserPostLikeLinkCreateManyInputObjectSchema } from './objects/UserPostLikeLinkCreateManyInput.schema';

export const UserPostLikeLinkCreateManyAndReturnSchema: z.ZodType<Prisma.UserPostLikeLinkCreateManyAndReturnArgs> = z.object({ select: UserPostLikeLinkSelectObjectSchema.optional(), data: z.union([ UserPostLikeLinkCreateManyInputObjectSchema, z.array(UserPostLikeLinkCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.UserPostLikeLinkCreateManyAndReturnArgs>;

export const UserPostLikeLinkCreateManyAndReturnZodSchema = z.object({ select: UserPostLikeLinkSelectObjectSchema.optional(), data: z.union([ UserPostLikeLinkCreateManyInputObjectSchema, z.array(UserPostLikeLinkCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();