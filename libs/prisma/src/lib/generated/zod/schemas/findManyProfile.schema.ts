import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { ProfileIncludeObjectSchema as ProfileIncludeObjectSchema } from './objects/ProfileInclude.schema';
import { ProfileOrderByWithRelationInputObjectSchema as ProfileOrderByWithRelationInputObjectSchema } from './objects/ProfileOrderByWithRelationInput.schema';
import { ProfileWhereInputObjectSchema as ProfileWhereInputObjectSchema } from './objects/ProfileWhereInput.schema';
import { ProfileWhereUniqueInputObjectSchema as ProfileWhereUniqueInputObjectSchema } from './objects/ProfileWhereUniqueInput.schema';
import { ProfileScalarFieldEnumSchema } from './enums/ProfileScalarFieldEnum.schema';
import { UserFindManySchema } from './findManyUser.schema';
import { ProfileCountOutputTypeArgsObjectSchema as ProfileCountOutputTypeArgsObjectSchema } from './objects/ProfileCountOutputTypeArgs.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ProfileFindManySelectSchema: z.ZodType<Prisma.ProfileSelect> = z.object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    published: z.boolean().optional(),
    isPublic: z.boolean().optional(),
    isDeleted: z.boolean().optional(),
    isDeletedDT: z.boolean().optional(),
    orderProfile: z.boolean().optional(),
    Users: z.union([z.boolean(), z.lazy(() => UserFindManySchema)]).optional(),
    bio: z.boolean().optional(),
    _count: z.union([z.boolean(), z.lazy(() => ProfileCountOutputTypeArgsObjectSchema)]).optional()
  }).strict() as unknown as z.ZodType<Prisma.ProfileSelect>;

export const ProfileFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    published: z.boolean().optional(),
    isPublic: z.boolean().optional(),
    isDeleted: z.boolean().optional(),
    isDeletedDT: z.boolean().optional(),
    orderProfile: z.boolean().optional(),
    Users: z.union([z.boolean(), z.lazy(() => UserFindManySchema)]).optional(),
    bio: z.boolean().optional(),
    _count: z.union([z.boolean(), z.lazy(() => ProfileCountOutputTypeArgsObjectSchema)]).optional()
  }).strict();

export const ProfileFindManySchema: z.ZodType<Prisma.ProfileFindManyArgs> = z.object({ select: ProfileFindManySelectSchema.optional(), include: z.lazy(() => ProfileIncludeObjectSchema.optional()), orderBy: z.union([ProfileOrderByWithRelationInputObjectSchema, ProfileOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProfileWhereInputObjectSchema.optional(), cursor: ProfileWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ProfileScalarFieldEnumSchema, ProfileScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ProfileFindManyArgs>;

export const ProfileFindManyZodSchema = z.object({ select: ProfileFindManySelectSchema.optional(), include: z.lazy(() => ProfileIncludeObjectSchema.optional()), orderBy: z.union([ProfileOrderByWithRelationInputObjectSchema, ProfileOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProfileWhereInputObjectSchema.optional(), cursor: ProfileWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ProfileScalarFieldEnumSchema, ProfileScalarFieldEnumSchema.array()]).optional() }).strict();