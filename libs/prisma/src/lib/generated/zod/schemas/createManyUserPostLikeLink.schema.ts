import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { UserPostLikeLinkCreateManyInputObjectSchema as UserPostLikeLinkCreateManyInputObjectSchema } from './objects/UserPostLikeLinkCreateManyInput.schema';

export const UserPostLikeLinkCreateManySchema: z.ZodType<Prisma.UserPostLikeLinkCreateManyArgs> = z.object({ data: z.union([ UserPostLikeLinkCreateManyInputObjectSchema, z.array(UserPostLikeLinkCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.UserPostLikeLinkCreateManyArgs>;

export const UserPostLikeLinkCreateManyZodSchema = z.object({ data: z.union([ UserPostLikeLinkCreateManyInputObjectSchema, z.array(UserPostLikeLinkCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();