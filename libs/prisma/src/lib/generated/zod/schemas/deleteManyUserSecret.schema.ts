import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { UserSecretWhereInputObjectSchema as UserSecretWhereInputObjectSchema } from './objects/UserSecretWhereInput.schema';

export const UserSecretDeleteManySchema: z.ZodType<Prisma.UserSecretDeleteManyArgs> = z.object({ where: UserSecretWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.UserSecretDeleteManyArgs>;

export const UserSecretDeleteManyZodSchema = z.object({ where: UserSecretWhereInputObjectSchema.optional() }).strict();