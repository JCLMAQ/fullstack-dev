import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { OrgEmailUseToIncludeObjectSchema as OrgEmailUseToIncludeObjectSchema } from './objects/OrgEmailUseToInclude.schema';
import { OrgEmailUseToOrderByWithRelationInputObjectSchema as OrgEmailUseToOrderByWithRelationInputObjectSchema } from './objects/OrgEmailUseToOrderByWithRelationInput.schema';
import { OrgEmailUseToWhereInputObjectSchema as OrgEmailUseToWhereInputObjectSchema } from './objects/OrgEmailUseToWhereInput.schema';
import { OrgEmailUseToWhereUniqueInputObjectSchema as OrgEmailUseToWhereUniqueInputObjectSchema } from './objects/OrgEmailUseToWhereUniqueInput.schema';
import { OrgEmailUseToScalarFieldEnumSchema } from './enums/OrgEmailUseToScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const OrgEmailUseToFindManySelectSchema: z.ZodType<Prisma.OrgEmailUseToSelect> = z.object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    published: z.boolean().optional(),
    isPublic: z.boolean().optional(),
    isDeleted: z.boolean().optional(),
    isDeletedDT: z.boolean().optional(),
    useTo: z.boolean().optional(),
    isActiv: z.boolean().optional(),
    emailOrg: z.boolean().optional(),
    emailOrgId: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.OrgEmailUseToSelect>;

export const OrgEmailUseToFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    published: z.boolean().optional(),
    isPublic: z.boolean().optional(),
    isDeleted: z.boolean().optional(),
    isDeletedDT: z.boolean().optional(),
    useTo: z.boolean().optional(),
    isActiv: z.boolean().optional(),
    emailOrg: z.boolean().optional(),
    emailOrgId: z.boolean().optional()
  }).strict();

export const OrgEmailUseToFindManySchema: z.ZodType<Prisma.OrgEmailUseToFindManyArgs> = z.object({ select: OrgEmailUseToFindManySelectSchema.optional(), include: z.lazy(() => OrgEmailUseToIncludeObjectSchema.optional()), orderBy: z.union([OrgEmailUseToOrderByWithRelationInputObjectSchema, OrgEmailUseToOrderByWithRelationInputObjectSchema.array()]).optional(), where: OrgEmailUseToWhereInputObjectSchema.optional(), cursor: OrgEmailUseToWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([OrgEmailUseToScalarFieldEnumSchema, OrgEmailUseToScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.OrgEmailUseToFindManyArgs>;

export const OrgEmailUseToFindManyZodSchema = z.object({ select: OrgEmailUseToFindManySelectSchema.optional(), include: z.lazy(() => OrgEmailUseToIncludeObjectSchema.optional()), orderBy: z.union([OrgEmailUseToOrderByWithRelationInputObjectSchema, OrgEmailUseToOrderByWithRelationInputObjectSchema.array()]).optional(), where: OrgEmailUseToWhereInputObjectSchema.optional(), cursor: OrgEmailUseToWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([OrgEmailUseToScalarFieldEnumSchema, OrgEmailUseToScalarFieldEnumSchema.array()]).optional() }).strict();