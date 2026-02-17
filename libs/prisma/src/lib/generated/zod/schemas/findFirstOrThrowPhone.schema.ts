import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { PhoneIncludeObjectSchema as PhoneIncludeObjectSchema } from './objects/PhoneInclude.schema';
import { PhoneOrderByWithRelationInputObjectSchema as PhoneOrderByWithRelationInputObjectSchema } from './objects/PhoneOrderByWithRelationInput.schema';
import { PhoneWhereInputObjectSchema as PhoneWhereInputObjectSchema } from './objects/PhoneWhereInput.schema';
import { PhoneWhereUniqueInputObjectSchema as PhoneWhereUniqueInputObjectSchema } from './objects/PhoneWhereUniqueInput.schema';
import { PhoneScalarFieldEnumSchema } from './enums/PhoneScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PhoneFindFirstOrThrowSelectSchema: z.ZodType<Prisma.PhoneSelect> = z.object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    user: z.boolean().optional(),
    userId: z.boolean().optional(),
    countryCode: z.boolean().optional(),
    countryIso: z.boolean().optional(),
    number: z.boolean().optional(),
    extension: z.boolean().optional(),
    phoneType: z.boolean().optional(),
    isPrimary: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.PhoneSelect>;

export const PhoneFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    user: z.boolean().optional(),
    userId: z.boolean().optional(),
    countryCode: z.boolean().optional(),
    countryIso: z.boolean().optional(),
    number: z.boolean().optional(),
    extension: z.boolean().optional(),
    phoneType: z.boolean().optional(),
    isPrimary: z.boolean().optional()
  }).strict();

export const PhoneFindFirstOrThrowSchema: z.ZodType<Prisma.PhoneFindFirstOrThrowArgs> = z.object({ select: PhoneFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => PhoneIncludeObjectSchema.optional()), orderBy: z.union([PhoneOrderByWithRelationInputObjectSchema, PhoneOrderByWithRelationInputObjectSchema.array()]).optional(), where: PhoneWhereInputObjectSchema.optional(), cursor: PhoneWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([PhoneScalarFieldEnumSchema, PhoneScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.PhoneFindFirstOrThrowArgs>;

export const PhoneFindFirstOrThrowZodSchema = z.object({ select: PhoneFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => PhoneIncludeObjectSchema.optional()), orderBy: z.union([PhoneOrderByWithRelationInputObjectSchema, PhoneOrderByWithRelationInputObjectSchema.array()]).optional(), where: PhoneWhereInputObjectSchema.optional(), cursor: PhoneWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([PhoneScalarFieldEnumSchema, PhoneScalarFieldEnumSchema.array()]).optional() }).strict();