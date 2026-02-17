import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { UserFollowerLinkWhereInputObjectSchema as UserFollowerLinkWhereInputObjectSchema } from './objects/UserFollowerLinkWhereInput.schema';

export const UserFollowerLinkDeleteManySchema: z.ZodType<Prisma.UserFollowerLinkDeleteManyArgs> = z.object({ where: UserFollowerLinkWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.UserFollowerLinkDeleteManyArgs>;

export const UserFollowerLinkDeleteManyZodSchema = z.object({ where: UserFollowerLinkWhereInputObjectSchema.optional() }).strict();