import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { UserTaskLinkIncludeObjectSchema as UserTaskLinkIncludeObjectSchema } from './objects/UserTaskLinkInclude.schema';
import { UserTaskLinkOrderByWithRelationInputObjectSchema as UserTaskLinkOrderByWithRelationInputObjectSchema } from './objects/UserTaskLinkOrderByWithRelationInput.schema';
import { UserTaskLinkWhereInputObjectSchema as UserTaskLinkWhereInputObjectSchema } from './objects/UserTaskLinkWhereInput.schema';
import { UserTaskLinkWhereUniqueInputObjectSchema as UserTaskLinkWhereUniqueInputObjectSchema } from './objects/UserTaskLinkWhereUniqueInput.schema';
import { UserTaskLinkScalarFieldEnumSchema } from './enums/UserTaskLinkScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const UserTaskLinkFindManySelectSchema: z.ZodType<Prisma.UserTaskLinkSelect> = z.object({
    user: z.boolean().optional(),
    userId: z.boolean().optional(),
    task: z.boolean().optional(),
    taskId: z.boolean().optional(),
    isAuthor: z.boolean().optional(),
    isAssigned: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    comment: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.UserTaskLinkSelect>;

export const UserTaskLinkFindManySelectZodSchema = z.object({
    user: z.boolean().optional(),
    userId: z.boolean().optional(),
    task: z.boolean().optional(),
    taskId: z.boolean().optional(),
    isAuthor: z.boolean().optional(),
    isAssigned: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    comment: z.boolean().optional()
  }).strict();

export const UserTaskLinkFindManySchema: z.ZodType<Prisma.UserTaskLinkFindManyArgs> = z.object({ select: UserTaskLinkFindManySelectSchema.optional(), include: z.lazy(() => UserTaskLinkIncludeObjectSchema.optional()), orderBy: z.union([UserTaskLinkOrderByWithRelationInputObjectSchema, UserTaskLinkOrderByWithRelationInputObjectSchema.array()]).optional(), where: UserTaskLinkWhereInputObjectSchema.optional(), cursor: UserTaskLinkWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([UserTaskLinkScalarFieldEnumSchema, UserTaskLinkScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.UserTaskLinkFindManyArgs>;

export const UserTaskLinkFindManyZodSchema = z.object({ select: UserTaskLinkFindManySelectSchema.optional(), include: z.lazy(() => UserTaskLinkIncludeObjectSchema.optional()), orderBy: z.union([UserTaskLinkOrderByWithRelationInputObjectSchema, UserTaskLinkOrderByWithRelationInputObjectSchema.array()]).optional(), where: UserTaskLinkWhereInputObjectSchema.optional(), cursor: UserTaskLinkWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([UserTaskLinkScalarFieldEnumSchema, UserTaskLinkScalarFieldEnumSchema.array()]).optional() }).strict();