import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { UserPostLikeLinkUpdateManyMutationInputObjectSchema as UserPostLikeLinkUpdateManyMutationInputObjectSchema } from './objects/UserPostLikeLinkUpdateManyMutationInput.schema';
import { UserPostLikeLinkWhereInputObjectSchema as UserPostLikeLinkWhereInputObjectSchema } from './objects/UserPostLikeLinkWhereInput.schema';

export const UserPostLikeLinkUpdateManySchema: z.ZodType<Prisma.UserPostLikeLinkUpdateManyArgs> = z.object({ data: UserPostLikeLinkUpdateManyMutationInputObjectSchema, where: UserPostLikeLinkWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.UserPostLikeLinkUpdateManyArgs>;

export const UserPostLikeLinkUpdateManyZodSchema = z.object({ data: UserPostLikeLinkUpdateManyMutationInputObjectSchema, where: UserPostLikeLinkWhereInputObjectSchema.optional() }).strict();