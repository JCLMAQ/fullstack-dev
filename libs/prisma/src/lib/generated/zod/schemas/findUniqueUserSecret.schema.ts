import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { UserSecretSelectObjectSchema as UserSecretSelectObjectSchema } from './objects/UserSecretSelect.schema';
import { UserSecretIncludeObjectSchema as UserSecretIncludeObjectSchema } from './objects/UserSecretInclude.schema';
import { UserSecretWhereUniqueInputObjectSchema as UserSecretWhereUniqueInputObjectSchema } from './objects/UserSecretWhereUniqueInput.schema';

export const UserSecretFindUniqueSchema: z.ZodType<Prisma.UserSecretFindUniqueArgs> = z.object({ select: UserSecretSelectObjectSchema.optional(), include: UserSecretIncludeObjectSchema.optional(), where: UserSecretWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.UserSecretFindUniqueArgs>;

export const UserSecretFindUniqueZodSchema = z.object({ select: UserSecretSelectObjectSchema.optional(), include: UserSecretIncludeObjectSchema.optional(), where: UserSecretWhereUniqueInputObjectSchema }).strict();