import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { UserSecretSelectObjectSchema as UserSecretSelectObjectSchema } from './objects/UserSecretSelect.schema';
import { UserSecretIncludeObjectSchema as UserSecretIncludeObjectSchema } from './objects/UserSecretInclude.schema';
import { UserSecretUpdateInputObjectSchema as UserSecretUpdateInputObjectSchema } from './objects/UserSecretUpdateInput.schema';
import { UserSecretUncheckedUpdateInputObjectSchema as UserSecretUncheckedUpdateInputObjectSchema } from './objects/UserSecretUncheckedUpdateInput.schema';
import { UserSecretWhereUniqueInputObjectSchema as UserSecretWhereUniqueInputObjectSchema } from './objects/UserSecretWhereUniqueInput.schema';

export const UserSecretUpdateOneSchema: z.ZodType<Prisma.UserSecretUpdateArgs> = z.object({ select: UserSecretSelectObjectSchema.optional(), include: UserSecretIncludeObjectSchema.optional(), data: z.union([UserSecretUpdateInputObjectSchema, UserSecretUncheckedUpdateInputObjectSchema]), where: UserSecretWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.UserSecretUpdateArgs>;

export const UserSecretUpdateOneZodSchema = z.object({ select: UserSecretSelectObjectSchema.optional(), include: UserSecretIncludeObjectSchema.optional(), data: z.union([UserSecretUpdateInputObjectSchema, UserSecretUncheckedUpdateInputObjectSchema]), where: UserSecretWhereUniqueInputObjectSchema }).strict();