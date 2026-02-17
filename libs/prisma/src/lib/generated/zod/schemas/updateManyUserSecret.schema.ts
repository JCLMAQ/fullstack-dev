import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { UserSecretUpdateManyMutationInputObjectSchema as UserSecretUpdateManyMutationInputObjectSchema } from './objects/UserSecretUpdateManyMutationInput.schema';
import { UserSecretWhereInputObjectSchema as UserSecretWhereInputObjectSchema } from './objects/UserSecretWhereInput.schema';

export const UserSecretUpdateManySchema: z.ZodType<Prisma.UserSecretUpdateManyArgs> = z.object({ data: UserSecretUpdateManyMutationInputObjectSchema, where: UserSecretWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.UserSecretUpdateManyArgs>;

export const UserSecretUpdateManyZodSchema = z.object({ data: UserSecretUpdateManyMutationInputObjectSchema, where: UserSecretWhereInputObjectSchema.optional() }).strict();