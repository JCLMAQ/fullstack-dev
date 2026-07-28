import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { UserSecretCreateManyInputObjectSchema as UserSecretCreateManyInputObjectSchema } from './objects/UserSecretCreateManyInput.schema';

export const UserSecretCreateManySchema: z.ZodType<Prisma.UserSecretCreateManyArgs> = z.object({ data: z.union([ UserSecretCreateManyInputObjectSchema, z.array(UserSecretCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.UserSecretCreateManyArgs>;

export const UserSecretCreateManyZodSchema = z.object({ data: z.union([ UserSecretCreateManyInputObjectSchema, z.array(UserSecretCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();