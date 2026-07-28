import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { OrgEmailUseToIncludeObjectSchema as OrgEmailUseToIncludeObjectSchema } from './objects/OrgEmailUseToInclude.schema';
import { OrgEmailUseToOrderByWithRelationInputObjectSchema as OrgEmailUseToOrderByWithRelationInputObjectSchema } from './objects/OrgEmailUseToOrderByWithRelationInput.schema';
import { OrgEmailUseToWhereInputObjectSchema as OrgEmailUseToWhereInputObjectSchema } from './objects/OrgEmailUseToWhereInput.schema';
import { OrgEmailUseToWhereUniqueInputObjectSchema as OrgEmailUseToWhereUniqueInputObjectSchema } from './objects/OrgEmailUseToWhereUniqueInput.schema';
import { OrgEmailUseToScalarFieldEnumSchema } from './enums/OrgEmailUseToScalarFieldEnum.schema';
import { OrgEmailArgsObjectSchema as OrgEmailArgsObjectSchema } from './objects/OrgEmailArgs.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const OrgEmailUseToFindFirstSelectSchema: z.ZodType<Prisma.OrgEmailUseToSelect> = z.object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    published: z.boolean().optional(),
    isPublic: z.boolean().optional(),
    isDeleted: z.boolean().optional(),
    isDeletedDT: z.boolean().optional(),
    useTo: z.boolean().optional(),
    isActiv: z.boolean().optional(),
    emailOrg: z.union([z.boolean(), z.lazy(() => OrgEmailArgsObjectSchema)]).optional(),
    emailOrgId: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.OrgEmailUseToSelect>;

export const OrgEmailUseToFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    published: z.boolean().optional(),
    isPublic: z.boolean().optional(),
    isDeleted: z.boolean().optional(),
    isDeletedDT: z.boolean().optional(),
    useTo: z.boolean().optional(),
    isActiv: z.boolean().optional(),
    emailOrg: z.union([z.boolean(), z.lazy(() => OrgEmailArgsObjectSchema)]).optional(),
    emailOrgId: z.boolean().optional()
  }).strict();

export const OrgEmailUseToFindFirstSchema: z.ZodType<Prisma.OrgEmailUseToFindFirstArgs> = z.object({ select: OrgEmailUseToFindFirstSelectSchema.optional(), include: z.lazy(() => OrgEmailUseToIncludeObjectSchema.optional()), orderBy: z.union([OrgEmailUseToOrderByWithRelationInputObjectSchema, OrgEmailUseToOrderByWithRelationInputObjectSchema.array()]).optional(), where: OrgEmailUseToWhereInputObjectSchema.optional(), cursor: OrgEmailUseToWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([OrgEmailUseToScalarFieldEnumSchema, OrgEmailUseToScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.OrgEmailUseToFindFirstArgs>;

export const OrgEmailUseToFindFirstZodSchema = z.object({ select: OrgEmailUseToFindFirstSelectSchema.optional(), include: z.lazy(() => OrgEmailUseToIncludeObjectSchema.optional()), orderBy: z.union([OrgEmailUseToOrderByWithRelationInputObjectSchema, OrgEmailUseToOrderByWithRelationInputObjectSchema.array()]).optional(), where: OrgEmailUseToWhereInputObjectSchema.optional(), cursor: OrgEmailUseToWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([OrgEmailUseToScalarFieldEnumSchema, OrgEmailUseToScalarFieldEnumSchema.array()]).optional() }).strict();