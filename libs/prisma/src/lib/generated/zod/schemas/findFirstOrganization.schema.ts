import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { OrganizationIncludeObjectSchema as OrganizationIncludeObjectSchema } from './objects/OrganizationInclude.schema';
import { OrganizationOrderByWithRelationInputObjectSchema as OrganizationOrderByWithRelationInputObjectSchema } from './objects/OrganizationOrderByWithRelationInput.schema';
import { OrganizationWhereInputObjectSchema as OrganizationWhereInputObjectSchema } from './objects/OrganizationWhereInput.schema';
import { OrganizationWhereUniqueInputObjectSchema as OrganizationWhereUniqueInputObjectSchema } from './objects/OrganizationWhereUniqueInput.schema';
import { OrganizationScalarFieldEnumSchema } from './enums/OrganizationScalarFieldEnum.schema';
import { OrgEmailFindManySchema } from './findManyOrgEmail.schema';
import { OrgDomainFindManySchema } from './findManyOrgDomain.schema';
import { OrganizationArgsObjectSchema as OrganizationArgsObjectSchema } from './objects/OrganizationArgs.schema';
import { OrganizationFindManySchema } from './findManyOrganization.schema';
import { UserFindManySchema } from './findManyUser.schema';
import { PostFindManySchema } from './findManyPost.schema';
import { GroupFindManySchema } from './findManyGroup.schema';
import { FileFindManySchema } from './findManyFile.schema';
import { TaskFindManySchema } from './findManyTask.schema';
import { TodoFindManySchema } from './findManyTodo.schema';
import { ImageFindManySchema } from './findManyImage.schema';
import { OrganizationCountOutputTypeArgsObjectSchema as OrganizationCountOutputTypeArgsObjectSchema } from './objects/OrganizationCountOutputTypeArgs.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const OrganizationFindFirstSelectSchema: z.ZodType<Prisma.OrganizationSelect> = z.object({
    id: z.boolean().optional(),
    numSeq: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    published: z.boolean().optional(),
    isPublic: z.boolean().optional(),
    isDeleted: z.boolean().optional(),
    isDeletedDT: z.boolean().optional(),
    name: z.boolean().optional(),
    description: z.boolean().optional(),
    address: z.boolean().optional(),
    emailITAdmin: z.boolean().optional(),
    webSite: z.boolean().optional(),
    OrgEmails: z.union([z.boolean(), z.lazy(() => OrgEmailFindManySchema)]).optional(),
    OrgDomains: z.union([z.boolean(), z.lazy(() => OrgDomainFindManySchema)]).optional(),
    mainOrg: z.union([z.boolean(), z.lazy(() => OrganizationArgsObjectSchema)]).optional(),
    mainOrgId: z.boolean().optional(),
    OrgEntity: z.union([z.boolean(), z.lazy(() => OrganizationFindManySchema)]).optional(),
    Members: z.union([z.boolean(), z.lazy(() => UserFindManySchema)]).optional(),
    Posts: z.union([z.boolean(), z.lazy(() => PostFindManySchema)]).optional(),
    Groups: z.union([z.boolean(), z.lazy(() => GroupFindManySchema)]).optional(),
    Files: z.union([z.boolean(), z.lazy(() => FileFindManySchema)]).optional(),
    Tasks: z.union([z.boolean(), z.lazy(() => TaskFindManySchema)]).optional(),
    Todos: z.union([z.boolean(), z.lazy(() => TodoFindManySchema)]).optional(),
    Images: z.union([z.boolean(), z.lazy(() => ImageFindManySchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => OrganizationCountOutputTypeArgsObjectSchema)]).optional()
  }).strict() as unknown as z.ZodType<Prisma.OrganizationSelect>;

export const OrganizationFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    numSeq: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    published: z.boolean().optional(),
    isPublic: z.boolean().optional(),
    isDeleted: z.boolean().optional(),
    isDeletedDT: z.boolean().optional(),
    name: z.boolean().optional(),
    description: z.boolean().optional(),
    address: z.boolean().optional(),
    emailITAdmin: z.boolean().optional(),
    webSite: z.boolean().optional(),
    OrgEmails: z.union([z.boolean(), z.lazy(() => OrgEmailFindManySchema)]).optional(),
    OrgDomains: z.union([z.boolean(), z.lazy(() => OrgDomainFindManySchema)]).optional(),
    mainOrg: z.union([z.boolean(), z.lazy(() => OrganizationArgsObjectSchema)]).optional(),
    mainOrgId: z.boolean().optional(),
    OrgEntity: z.union([z.boolean(), z.lazy(() => OrganizationFindManySchema)]).optional(),
    Members: z.union([z.boolean(), z.lazy(() => UserFindManySchema)]).optional(),
    Posts: z.union([z.boolean(), z.lazy(() => PostFindManySchema)]).optional(),
    Groups: z.union([z.boolean(), z.lazy(() => GroupFindManySchema)]).optional(),
    Files: z.union([z.boolean(), z.lazy(() => FileFindManySchema)]).optional(),
    Tasks: z.union([z.boolean(), z.lazy(() => TaskFindManySchema)]).optional(),
    Todos: z.union([z.boolean(), z.lazy(() => TodoFindManySchema)]).optional(),
    Images: z.union([z.boolean(), z.lazy(() => ImageFindManySchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => OrganizationCountOutputTypeArgsObjectSchema)]).optional()
  }).strict();

export const OrganizationFindFirstSchema: z.ZodType<Prisma.OrganizationFindFirstArgs> = z.object({ select: OrganizationFindFirstSelectSchema.optional(), include: z.lazy(() => OrganizationIncludeObjectSchema.optional()), orderBy: z.union([OrganizationOrderByWithRelationInputObjectSchema, OrganizationOrderByWithRelationInputObjectSchema.array()]).optional(), where: OrganizationWhereInputObjectSchema.optional(), cursor: OrganizationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([OrganizationScalarFieldEnumSchema, OrganizationScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.OrganizationFindFirstArgs>;

export const OrganizationFindFirstZodSchema = z.object({ select: OrganizationFindFirstSelectSchema.optional(), include: z.lazy(() => OrganizationIncludeObjectSchema.optional()), orderBy: z.union([OrganizationOrderByWithRelationInputObjectSchema, OrganizationOrderByWithRelationInputObjectSchema.array()]).optional(), where: OrganizationWhereInputObjectSchema.optional(), cursor: OrganizationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([OrganizationScalarFieldEnumSchema, OrganizationScalarFieldEnumSchema.array()]).optional() }).strict();