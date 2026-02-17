import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { AccountValidationOrderByWithRelationInputObjectSchema as AccountValidationOrderByWithRelationInputObjectSchema } from './objects/AccountValidationOrderByWithRelationInput.schema';
import { AccountValidationWhereInputObjectSchema as AccountValidationWhereInputObjectSchema } from './objects/AccountValidationWhereInput.schema';
import { AccountValidationWhereUniqueInputObjectSchema as AccountValidationWhereUniqueInputObjectSchema } from './objects/AccountValidationWhereUniqueInput.schema';
import { AccountValidationScalarFieldEnumSchema } from './enums/AccountValidationScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AccountValidationFindFirstSelectSchema: z.ZodType<Prisma.AccountValidationSelect> = z.object({
    id: z.boolean().optional(),
    numSeq: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    published: z.boolean().optional(),
    isPublic: z.boolean().optional(),
    isDeleted: z.boolean().optional(),
    isDeletedDT: z.boolean().optional(),
    isValidated: z.boolean().optional(),
    emailToken: z.boolean().optional(),
    timeStamp: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.AccountValidationSelect>;

export const AccountValidationFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    numSeq: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    published: z.boolean().optional(),
    isPublic: z.boolean().optional(),
    isDeleted: z.boolean().optional(),
    isDeletedDT: z.boolean().optional(),
    isValidated: z.boolean().optional(),
    emailToken: z.boolean().optional(),
    timeStamp: z.boolean().optional()
  }).strict();

export const AccountValidationFindFirstSchema: z.ZodType<Prisma.AccountValidationFindFirstArgs> = z.object({ select: AccountValidationFindFirstSelectSchema.optional(),  orderBy: z.union([AccountValidationOrderByWithRelationInputObjectSchema, AccountValidationOrderByWithRelationInputObjectSchema.array()]).optional(), where: AccountValidationWhereInputObjectSchema.optional(), cursor: AccountValidationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AccountValidationScalarFieldEnumSchema, AccountValidationScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.AccountValidationFindFirstArgs>;

export const AccountValidationFindFirstZodSchema = z.object({ select: AccountValidationFindFirstSelectSchema.optional(),  orderBy: z.union([AccountValidationOrderByWithRelationInputObjectSchema, AccountValidationOrderByWithRelationInputObjectSchema.array()]).optional(), where: AccountValidationWhereInputObjectSchema.optional(), cursor: AccountValidationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AccountValidationScalarFieldEnumSchema, AccountValidationScalarFieldEnumSchema.array()]).optional() }).strict();