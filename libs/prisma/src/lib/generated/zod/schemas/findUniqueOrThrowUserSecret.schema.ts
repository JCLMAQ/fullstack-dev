import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { UserSecretSelectObjectSchema as UserSecretSelectObjectSchema } from './objects/UserSecretSelect.schema';
import { UserSecretIncludeObjectSchema as UserSecretIncludeObjectSchema } from './objects/UserSecretInclude.schema';
import { UserSecretWhereUniqueInputObjectSchema as UserSecretWhereUniqueInputObjectSchema } from './objects/UserSecretWhereUniqueInput.schema';

export const UserSecretFindUniqueOrThrowSchema: z.ZodType<Prisma.UserSecretFindUniqueOrThrowArgs> = z.object({ select: UserSecretSelectObjectSchema.optional(), include: UserSecretIncludeObjectSchema.optional(), where: UserSecretWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.UserSecretFindUniqueOrThrowArgs>;

export const UserSecretFindUniqueOrThrowZodSchema = z.object({ select: UserSecretSelectObjectSchema.optional(), include: UserSecretIncludeObjectSchema.optional(), where: UserSecretWhereUniqueInputObjectSchema }).strict();