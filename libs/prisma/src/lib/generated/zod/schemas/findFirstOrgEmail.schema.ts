import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { OrgEmailIncludeObjectSchema as OrgEmailIncludeObjectSchema } from './objects/OrgEmailInclude.schema';
import { OrgEmailOrderByWithRelationInputObjectSchema as OrgEmailOrderByWithRelationInputObjectSchema } from './objects/OrgEmailOrderByWithRelationInput.schema';
import { OrgEmailWhereInputObjectSchema as OrgEmailWhereInputObjectSchema } from './objects/OrgEmailWhereInput.schema';
import { OrgEmailWhereUniqueInputObjectSchema as OrgEmailWhereUniqueInputObjectSchema } from './objects/OrgEmailWhereUniqueInput.schema';
import { OrgEmailScalarFieldEnumSchema } from './enums/OrgEmailScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const OrgEmailFindFirstSelectSchema: z.ZodType<Prisma.OrgEmailSelect> = z.object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    published: z.boolean().optional(),
    isPublic: z.boolean().optional(),
    isDeleted: z.boolean().optional(),
    isDeletedDT: z.boolean().optional(),
    email: z.boolean().optional(),
    description: z.boolean().optional(),
    org: z.boolean().optional(),
    orgId: z.boolean().optional(),
    OrgEmailUseTos: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.OrgEmailSelect>;

export const OrgEmailFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    published: z.boolean().optional(),
    isPublic: z.boolean().optional(),
    isDeleted: z.boolean().optional(),
    isDeletedDT: z.boolean().optional(),
    email: z.boolean().optional(),
    description: z.boolean().optional(),
    org: z.boolean().optional(),
    orgId: z.boolean().optional(),
    OrgEmailUseTos: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const OrgEmailFindFirstSchema: z.ZodType<Prisma.OrgEmailFindFirstArgs> = z.object({ select: OrgEmailFindFirstSelectSchema.optional(), include: z.lazy(() => OrgEmailIncludeObjectSchema.optional()), orderBy: z.union([OrgEmailOrderByWithRelationInputObjectSchema, OrgEmailOrderByWithRelationInputObjectSchema.array()]).optional(), where: OrgEmailWhereInputObjectSchema.optional(), cursor: OrgEmailWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([OrgEmailScalarFieldEnumSchema, OrgEmailScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.OrgEmailFindFirstArgs>;

export const OrgEmailFindFirstZodSchema = z.object({ select: OrgEmailFindFirstSelectSchema.optional(), include: z.lazy(() => OrgEmailIncludeObjectSchema.optional()), orderBy: z.union([OrgEmailOrderByWithRelationInputObjectSchema, OrgEmailOrderByWithRelationInputObjectSchema.array()]).optional(), where: OrgEmailWhereInputObjectSchema.optional(), cursor: OrgEmailWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([OrgEmailScalarFieldEnumSchema, OrgEmailScalarFieldEnumSchema.array()]).optional() }).strict();