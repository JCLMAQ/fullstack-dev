import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { UserSecretSelectObjectSchema as UserSecretSelectObjectSchema } from './objects/UserSecretSelect.schema';
import { UserSecretIncludeObjectSchema as UserSecretIncludeObjectSchema } from './objects/UserSecretInclude.schema';
import { UserSecretCreateInputObjectSchema as UserSecretCreateInputObjectSchema } from './objects/UserSecretCreateInput.schema';
import { UserSecretUncheckedCreateInputObjectSchema as UserSecretUncheckedCreateInputObjectSchema } from './objects/UserSecretUncheckedCreateInput.schema';

export const UserSecretCreateOneSchema: z.ZodType<Prisma.UserSecretCreateArgs> = z.object({ select: UserSecretSelectObjectSchema.optional(), include: UserSecretIncludeObjectSchema.optional(), data: z.union([UserSecretCreateInputObjectSchema, UserSecretUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.UserSecretCreateArgs>;

export const UserSecretCreateOneZodSchema = z.object({ select: UserSecretSelectObjectSchema.optional(), include: UserSecretIncludeObjectSchema.optional(), data: z.union([UserSecretCreateInputObjectSchema, UserSecretUncheckedCreateInputObjectSchema]) }).strict();