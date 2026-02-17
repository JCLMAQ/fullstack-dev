import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { UserSecretIncludeObjectSchema as UserSecretIncludeObjectSchema } from './objects/UserSecretInclude.schema';
import { UserSecretOrderByWithRelationInputObjectSchema as UserSecretOrderByWithRelationInputObjectSchema } from './objects/UserSecretOrderByWithRelationInput.schema';
import { UserSecretWhereInputObjectSchema as UserSecretWhereInputObjectSchema } from './objects/UserSecretWhereInput.schema';
import { UserSecretWhereUniqueInputObjectSchema as UserSecretWhereUniqueInputObjectSchema } from './objects/UserSecretWhereUniqueInput.schema';
import { UserSecretScalarFieldEnumSchema } from './enums/UserSecretScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const UserSecretFindManySelectSchema: z.ZodType<Prisma.UserSecretSelect> = z.object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    user: z.boolean().optional(),
    userId: z.boolean().optional(),
    pwdHash: z.boolean().optional(),
    salt: z.boolean().optional(),
    isAdmin: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.UserSecretSelect>;

export const UserSecretFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    user: z.boolean().optional(),
    userId: z.boolean().optional(),
    pwdHash: z.boolean().optional(),
    salt: z.boolean().optional(),
    isAdmin: z.boolean().optional()
  }).strict();

export const UserSecretFindManySchema: z.ZodType<Prisma.UserSecretFindManyArgs> = z.object({ select: UserSecretFindManySelectSchema.optional(), include: z.lazy(() => UserSecretIncludeObjectSchema.optional()), orderBy: z.union([UserSecretOrderByWithRelationInputObjectSchema, UserSecretOrderByWithRelationInputObjectSchema.array()]).optional(), where: UserSecretWhereInputObjectSchema.optional(), cursor: UserSecretWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([UserSecretScalarFieldEnumSchema, UserSecretScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.UserSecretFindManyArgs>;

export const UserSecretFindManyZodSchema = z.object({ select: UserSecretFindManySelectSchema.optional(), include: z.lazy(() => UserSecretIncludeObjectSchema.optional()), orderBy: z.union([UserSecretOrderByWithRelationInputObjectSchema, UserSecretOrderByWithRelationInputObjectSchema.array()]).optional(), where: UserSecretWhereInputObjectSchema.optional(), cursor: UserSecretWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([UserSecretScalarFieldEnumSchema, UserSecretScalarFieldEnumSchema.array()]).optional() }).strict();