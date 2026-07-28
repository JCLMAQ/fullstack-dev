import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { OrgDomainIncludeObjectSchema as OrgDomainIncludeObjectSchema } from './objects/OrgDomainInclude.schema';
import { OrgDomainOrderByWithRelationInputObjectSchema as OrgDomainOrderByWithRelationInputObjectSchema } from './objects/OrgDomainOrderByWithRelationInput.schema';
import { OrgDomainWhereInputObjectSchema as OrgDomainWhereInputObjectSchema } from './objects/OrgDomainWhereInput.schema';
import { OrgDomainWhereUniqueInputObjectSchema as OrgDomainWhereUniqueInputObjectSchema } from './objects/OrgDomainWhereUniqueInput.schema';
import { OrgDomainScalarFieldEnumSchema } from './enums/OrgDomainScalarFieldEnum.schema';
import { OrganizationArgsObjectSchema as OrganizationArgsObjectSchema } from './objects/OrganizationArgs.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const OrgDomainFindFirstOrThrowSelectSchema: z.ZodType<Prisma.OrgDomainSelect> = z.object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    published: z.boolean().optional(),
    isPublic: z.boolean().optional(),
    isDeleted: z.boolean().optional(),
    isDeletedDT: z.boolean().optional(),
    domainName: z.boolean().optional(),
    extension: z.boolean().optional(),
    org: z.union([z.boolean(), z.lazy(() => OrganizationArgsObjectSchema)]).optional(),
    orgId: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.OrgDomainSelect>;

export const OrgDomainFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    published: z.boolean().optional(),
    isPublic: z.boolean().optional(),
    isDeleted: z.boolean().optional(),
    isDeletedDT: z.boolean().optional(),
    domainName: z.boolean().optional(),
    extension: z.boolean().optional(),
    org: z.union([z.boolean(), z.lazy(() => OrganizationArgsObjectSchema)]).optional(),
    orgId: z.boolean().optional()
  }).strict();

export const OrgDomainFindFirstOrThrowSchema: z.ZodType<Prisma.OrgDomainFindFirstOrThrowArgs> = z.object({ select: OrgDomainFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => OrgDomainIncludeObjectSchema.optional()), orderBy: z.union([OrgDomainOrderByWithRelationInputObjectSchema, OrgDomainOrderByWithRelationInputObjectSchema.array()]).optional(), where: OrgDomainWhereInputObjectSchema.optional(), cursor: OrgDomainWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([OrgDomainScalarFieldEnumSchema, OrgDomainScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.OrgDomainFindFirstOrThrowArgs>;

export const OrgDomainFindFirstOrThrowZodSchema = z.object({ select: OrgDomainFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => OrgDomainIncludeObjectSchema.optional()), orderBy: z.union([OrgDomainOrderByWithRelationInputObjectSchema, OrgDomainOrderByWithRelationInputObjectSchema.array()]).optional(), where: OrgDomainWhereInputObjectSchema.optional(), cursor: OrgDomainWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([OrgDomainScalarFieldEnumSchema, OrgDomainScalarFieldEnumSchema.array()]).optional() }).strict();