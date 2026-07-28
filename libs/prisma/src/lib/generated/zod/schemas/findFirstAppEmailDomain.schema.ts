import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { AppEmailDomainOrderByWithRelationInputObjectSchema as AppEmailDomainOrderByWithRelationInputObjectSchema } from './objects/AppEmailDomainOrderByWithRelationInput.schema';
import { AppEmailDomainWhereInputObjectSchema as AppEmailDomainWhereInputObjectSchema } from './objects/AppEmailDomainWhereInput.schema';
import { AppEmailDomainWhereUniqueInputObjectSchema as AppEmailDomainWhereUniqueInputObjectSchema } from './objects/AppEmailDomainWhereUniqueInput.schema';
import { AppEmailDomainScalarFieldEnumSchema } from './enums/AppEmailDomainScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AppEmailDomainFindFirstSelectSchema: z.ZodType<Prisma.AppEmailDomainSelect> = z.object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    published: z.boolean().optional(),
    isPublic: z.boolean().optional(),
    isDeleted: z.boolean().optional(),
    isDeletedDT: z.boolean().optional(),
    domain: z.boolean().optional(),
    allowed: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.AppEmailDomainSelect>;

export const AppEmailDomainFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    published: z.boolean().optional(),
    isPublic: z.boolean().optional(),
    isDeleted: z.boolean().optional(),
    isDeletedDT: z.boolean().optional(),
    domain: z.boolean().optional(),
    allowed: z.boolean().optional()
  }).strict();

export const AppEmailDomainFindFirstSchema: z.ZodType<Prisma.AppEmailDomainFindFirstArgs> = z.object({ select: AppEmailDomainFindFirstSelectSchema.optional(),  orderBy: z.union([AppEmailDomainOrderByWithRelationInputObjectSchema, AppEmailDomainOrderByWithRelationInputObjectSchema.array()]).optional(), where: AppEmailDomainWhereInputObjectSchema.optional(), cursor: AppEmailDomainWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AppEmailDomainScalarFieldEnumSchema, AppEmailDomainScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.AppEmailDomainFindFirstArgs>;

export const AppEmailDomainFindFirstZodSchema = z.object({ select: AppEmailDomainFindFirstSelectSchema.optional(),  orderBy: z.union([AppEmailDomainOrderByWithRelationInputObjectSchema, AppEmailDomainOrderByWithRelationInputObjectSchema.array()]).optional(), where: AppEmailDomainWhereInputObjectSchema.optional(), cursor: AppEmailDomainWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AppEmailDomainScalarFieldEnumSchema, AppEmailDomainScalarFieldEnumSchema.array()]).optional() }).strict();