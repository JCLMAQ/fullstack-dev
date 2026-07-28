import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { UserTaskLinkIncludeObjectSchema as UserTaskLinkIncludeObjectSchema } from './objects/UserTaskLinkInclude.schema';
import { UserTaskLinkOrderByWithRelationInputObjectSchema as UserTaskLinkOrderByWithRelationInputObjectSchema } from './objects/UserTaskLinkOrderByWithRelationInput.schema';
import { UserTaskLinkWhereInputObjectSchema as UserTaskLinkWhereInputObjectSchema } from './objects/UserTaskLinkWhereInput.schema';
import { UserTaskLinkWhereUniqueInputObjectSchema as UserTaskLinkWhereUniqueInputObjectSchema } from './objects/UserTaskLinkWhereUniqueInput.schema';
import { UserTaskLinkScalarFieldEnumSchema } from './enums/UserTaskLinkScalarFieldEnum.schema';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './objects/UserArgs.schema';
import { TaskArgsObjectSchema as TaskArgsObjectSchema } from './objects/TaskArgs.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const UserTaskLinkFindFirstSelectSchema: z.ZodType<Prisma.UserTaskLinkSelect> = z.object({
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    userId: z.boolean().optional(),
    task: z.union([z.boolean(), z.lazy(() => TaskArgsObjectSchema)]).optional(),
    taskId: z.boolean().optional(),
    isAuthor: z.boolean().optional(),
    isAssigned: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    comment: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.UserTaskLinkSelect>;

export const UserTaskLinkFindFirstSelectZodSchema = z.object({
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    userId: z.boolean().optional(),
    task: z.union([z.boolean(), z.lazy(() => TaskArgsObjectSchema)]).optional(),
    taskId: z.boolean().optional(),
    isAuthor: z.boolean().optional(),
    isAssigned: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    comment: z.boolean().optional()
  }).strict();

export const UserTaskLinkFindFirstSchema: z.ZodType<Prisma.UserTaskLinkFindFirstArgs> = z.object({ select: UserTaskLinkFindFirstSelectSchema.optional(), include: z.lazy(() => UserTaskLinkIncludeObjectSchema.optional()), orderBy: z.union([UserTaskLinkOrderByWithRelationInputObjectSchema, UserTaskLinkOrderByWithRelationInputObjectSchema.array()]).optional(), where: UserTaskLinkWhereInputObjectSchema.optional(), cursor: UserTaskLinkWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([UserTaskLinkScalarFieldEnumSchema, UserTaskLinkScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.UserTaskLinkFindFirstArgs>;

export const UserTaskLinkFindFirstZodSchema = z.object({ select: UserTaskLinkFindFirstSelectSchema.optional(), include: z.lazy(() => UserTaskLinkIncludeObjectSchema.optional()), orderBy: z.union([UserTaskLinkOrderByWithRelationInputObjectSchema, UserTaskLinkOrderByWithRelationInputObjectSchema.array()]).optional(), where: UserTaskLinkWhereInputObjectSchema.optional(), cursor: UserTaskLinkWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([UserTaskLinkScalarFieldEnumSchema, UserTaskLinkScalarFieldEnumSchema.array()]).optional() }).strict();