import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { UserPostLikeLinkWhereInputObjectSchema as UserPostLikeLinkWhereInputObjectSchema } from './objects/UserPostLikeLinkWhereInput.schema';

export const UserPostLikeLinkDeleteManySchema: z.ZodType<Prisma.UserPostLikeLinkDeleteManyArgs> = z.object({ where: UserPostLikeLinkWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.UserPostLikeLinkDeleteManyArgs>;

export const UserPostLikeLinkDeleteManyZodSchema = z.object({ where: UserPostLikeLinkWhereInputObjectSchema.optional() }).strict();