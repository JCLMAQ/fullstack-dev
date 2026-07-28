import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { AddressIncludeObjectSchema as AddressIncludeObjectSchema } from './objects/AddressInclude.schema';
import { AddressOrderByWithRelationInputObjectSchema as AddressOrderByWithRelationInputObjectSchema } from './objects/AddressOrderByWithRelationInput.schema';
import { AddressWhereInputObjectSchema as AddressWhereInputObjectSchema } from './objects/AddressWhereInput.schema';
import { AddressWhereUniqueInputObjectSchema as AddressWhereUniqueInputObjectSchema } from './objects/AddressWhereUniqueInput.schema';
import { AddressScalarFieldEnumSchema } from './enums/AddressScalarFieldEnum.schema';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './objects/UserArgs.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AddressFindFirstSelectSchema: z.ZodType<Prisma.AddressSelect> = z.object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    userId: z.boolean().optional(),
    street: z.boolean().optional(),
    buildingNum: z.boolean().optional(),
    aptNum: z.boolean().optional(),
    city: z.boolean().optional(),
    state: z.boolean().optional(),
    zipCode: z.boolean().optional(),
    country: z.boolean().optional(),
    countryIso: z.boolean().optional(),
    addressType: z.boolean().optional(),
    isPrimary: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.AddressSelect>;

export const AddressFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    userId: z.boolean().optional(),
    street: z.boolean().optional(),
    buildingNum: z.boolean().optional(),
    aptNum: z.boolean().optional(),
    city: z.boolean().optional(),
    state: z.boolean().optional(),
    zipCode: z.boolean().optional(),
    country: z.boolean().optional(),
    countryIso: z.boolean().optional(),
    addressType: z.boolean().optional(),
    isPrimary: z.boolean().optional()
  }).strict();

export const AddressFindFirstSchema: z.ZodType<Prisma.AddressFindFirstArgs> = z.object({ select: AddressFindFirstSelectSchema.optional(), include: z.lazy(() => AddressIncludeObjectSchema.optional()), orderBy: z.union([AddressOrderByWithRelationInputObjectSchema, AddressOrderByWithRelationInputObjectSchema.array()]).optional(), where: AddressWhereInputObjectSchema.optional(), cursor: AddressWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AddressScalarFieldEnumSchema, AddressScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.AddressFindFirstArgs>;

export const AddressFindFirstZodSchema = z.object({ select: AddressFindFirstSelectSchema.optional(), include: z.lazy(() => AddressIncludeObjectSchema.optional()), orderBy: z.union([AddressOrderByWithRelationInputObjectSchema, AddressOrderByWithRelationInputObjectSchema.array()]).optional(), where: AddressWhereInputObjectSchema.optional(), cursor: AddressWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AddressScalarFieldEnumSchema, AddressScalarFieldEnumSchema.array()]).optional() }).strict();