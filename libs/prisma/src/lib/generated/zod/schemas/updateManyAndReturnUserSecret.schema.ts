import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { UserSecretSelectObjectSchema as UserSecretSelectObjectSchema } from './objects/UserSecretSelect.schema';
import { UserSecretUpdateManyMutationInputObjectSchema as UserSecretUpdateManyMutationInputObjectSchema } from './objects/UserSecretUpdateManyMutationInput.schema';
import { UserSecretWhereInputObjectSchema as UserSecretWhereInputObjectSchema } from './objects/UserSecretWhereInput.schema';

export const UserSecretUpdateManyAndReturnSchema: z.ZodType<Prisma.UserSecretUpdateManyAndReturnArgs> = z.object({ select: UserSecretSelectObjectSchema.optional(), data: UserSecretUpdateManyMutationInputObjectSchema, where: UserSecretWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.UserSecretUpdateManyAndReturnArgs>;

export const UserSecretUpdateManyAndReturnZodSchema = z.object({ select: UserSecretSelectObjectSchema.optional(), data: UserSecretUpdateManyMutationInputObjectSchema, where: UserSecretWhereInputObjectSchema.optional() }).strict();