import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { UserSecretSelectObjectSchema as UserSecretSelectObjectSchema } from './objects/UserSecretSelect.schema';
import { UserSecretIncludeObjectSchema as UserSecretIncludeObjectSchema } from './objects/UserSecretInclude.schema';
import { UserSecretWhereUniqueInputObjectSchema as UserSecretWhereUniqueInputObjectSchema } from './objects/UserSecretWhereUniqueInput.schema';
import { UserSecretCreateInputObjectSchema as UserSecretCreateInputObjectSchema } from './objects/UserSecretCreateInput.schema';
import { UserSecretUncheckedCreateInputObjectSchema as UserSecretUncheckedCreateInputObjectSchema } from './objects/UserSecretUncheckedCreateInput.schema';
import { UserSecretUpdateInputObjectSchema as UserSecretUpdateInputObjectSchema } from './objects/UserSecretUpdateInput.schema';
import { UserSecretUncheckedUpdateInputObjectSchema as UserSecretUncheckedUpdateInputObjectSchema } from './objects/UserSecretUncheckedUpdateInput.schema';

export const UserSecretUpsertOneSchema: z.ZodType<Prisma.UserSecretUpsertArgs> = z.object({ select: UserSecretSelectObjectSchema.optional(), include: UserSecretIncludeObjectSchema.optional(), where: UserSecretWhereUniqueInputObjectSchema, create: z.union([ UserSecretCreateInputObjectSchema, UserSecretUncheckedCreateInputObjectSchema ]), update: z.union([ UserSecretUpdateInputObjectSchema, UserSecretUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.UserSecretUpsertArgs>;

export const UserSecretUpsertOneZodSchema = z.object({ select: UserSecretSelectObjectSchema.optional(), include: UserSecretIncludeObjectSchema.optional(), where: UserSecretWhereUniqueInputObjectSchema, create: z.union([ UserSecretCreateInputObjectSchema, UserSecretUncheckedCreateInputObjectSchema ]), update: z.union([ UserSecretUpdateInputObjectSchema, UserSecretUncheckedUpdateInputObjectSchema ]) }).strict();