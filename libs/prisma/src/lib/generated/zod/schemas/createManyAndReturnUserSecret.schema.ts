import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { UserSecretSelectObjectSchema as UserSecretSelectObjectSchema } from './objects/UserSecretSelect.schema';
import { UserSecretCreateManyInputObjectSchema as UserSecretCreateManyInputObjectSchema } from './objects/UserSecretCreateManyInput.schema';

export const UserSecretCreateManyAndReturnSchema: z.ZodType<Prisma.UserSecretCreateManyAndReturnArgs> = z.object({ select: UserSecretSelectObjectSchema.optional(), data: z.union([ UserSecretCreateManyInputObjectSchema, z.array(UserSecretCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.UserSecretCreateManyAndReturnArgs>;

export const UserSecretCreateManyAndReturnZodSchema = z.object({ select: UserSecretSelectObjectSchema.optional(), data: z.union([ UserSecretCreateManyInputObjectSchema, z.array(UserSecretCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();