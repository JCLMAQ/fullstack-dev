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

export const UserTaskLinkFindFirstOrThrowSelectSchema: z.ZodType<Prisma.UserTaskLinkSelect> = z.object({
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

export const UserTaskLinkFindFirstOrThrowSelectZodSchema = z.object({
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

export const UserTaskLinkFindFirstOrThrowSchema: z.ZodType<Prisma.UserTaskLinkFindFirstOrThrowArgs> = z.object({ select: UserTaskLinkFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => UserTaskLinkIncludeObjectSchema.optional()), orderBy: z.union([UserTaskLinkOrderByWithRelationInputObjectSchema, UserTaskLinkOrderByWithRelationInputObjectSchema.array()]).optional(), where: UserTaskLinkWhereInputObjectSchema.optional(), cursor: UserTaskLinkWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([UserTaskLinkScalarFieldEnumSchema, UserTaskLinkScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.UserTaskLinkFindFirstOrThrowArgs>;

export const UserTaskLinkFindFirstOrThrowZodSchema = z.object({ select: UserTaskLinkFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => UserTaskLinkIncludeObjectSchema.optional()), orderBy: z.union([UserTaskLinkOrderByWithRelationInputObjectSchema, UserTaskLinkOrderByWithRelationInputObjectSchema.array()]).optional(), where: UserTaskLinkWhereInputObjectSchema.optional(), cursor: UserTaskLinkWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([UserTaskLinkScalarFieldEnumSchema, UserTaskLinkScalarFieldEnumSchema.array()]).optional() }).strict();