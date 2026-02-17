import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { UserPostLikeLinkSelectObjectSchema as UserPostLikeLinkSelectObjectSchema } from './objects/UserPostLikeLinkSelect.schema';
import { UserPostLikeLinkIncludeObjectSchema as UserPostLikeLinkIncludeObjectSchema } from './objects/UserPostLikeLinkInclude.schema';
import { UserPostLikeLinkWhereUniqueInputObjectSchema as UserPostLikeLinkWhereUniqueInputObjectSchema } from './objects/UserPostLikeLinkWhereUniqueInput.schema';

export const UserPostLikeLinkFindUniqueOrThrowSchema: z.ZodType<Prisma.UserPostLikeLinkFindUniqueOrThrowArgs> = z.object({ select: UserPostLikeLinkSelectObjectSchema.optional(), include: UserPostLikeLinkIncludeObjectSchema.optional(), where: UserPostLikeLinkWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.UserPostLikeLinkFindUniqueOrThrowArgs>;

export const UserPostLikeLinkFindUniqueOrThrowZodSchema = z.object({ select: UserPostLikeLinkSelectObjectSchema.optional(), include: UserPostLikeLinkIncludeObjectSchema.optional(), where: UserPostLikeLinkWhereUniqueInputObjectSchema }).strict();