import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { ChangesTrackingIncludeObjectSchema as ChangesTrackingIncludeObjectSchema } from './objects/ChangesTrackingInclude.schema';
import { ChangesTrackingOrderByWithRelationInputObjectSchema as ChangesTrackingOrderByWithRelationInputObjectSchema } from './objects/ChangesTrackingOrderByWithRelationInput.schema';
import { ChangesTrackingWhereInputObjectSchema as ChangesTrackingWhereInputObjectSchema } from './objects/ChangesTrackingWhereInput.schema';
import { ChangesTrackingWhereUniqueInputObjectSchema as ChangesTrackingWhereUniqueInputObjectSchema } from './objects/ChangesTrackingWhereUniqueInput.schema';
import { ChangesTrackingScalarFieldEnumSchema } from './enums/ChangesTrackingScalarFieldEnum.schema';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './objects/UserArgs.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ChangesTrackingFindFirstOrThrowSelectSchema: z.ZodType<Prisma.ChangesTrackingSelect> = z.object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    published: z.boolean().optional(),
    isPublic: z.boolean().optional(),
    isDeleted: z.boolean().optional(),
    isDeletedDT: z.boolean().optional(),
    doneAt: z.boolean().optional(),
    modifiedBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    modifiedById: z.boolean().optional(),
    modelName: z.boolean().optional(),
    recordId: z.boolean().optional(),
    operation: z.boolean().optional(),
    newData: z.boolean().optional(),
    oldData: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ChangesTrackingSelect>;

export const ChangesTrackingFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    published: z.boolean().optional(),
    isPublic: z.boolean().optional(),
    isDeleted: z.boolean().optional(),
    isDeletedDT: z.boolean().optional(),
    doneAt: z.boolean().optional(),
    modifiedBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    modifiedById: z.boolean().optional(),
    modelName: z.boolean().optional(),
    recordId: z.boolean().optional(),
    operation: z.boolean().optional(),
    newData: z.boolean().optional(),
    oldData: z.boolean().optional()
  }).strict();

export const ChangesTrackingFindFirstOrThrowSchema: z.ZodType<Prisma.ChangesTrackingFindFirstOrThrowArgs> = z.object({ select: ChangesTrackingFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => ChangesTrackingIncludeObjectSchema.optional()), orderBy: z.union([ChangesTrackingOrderByWithRelationInputObjectSchema, ChangesTrackingOrderByWithRelationInputObjectSchema.array()]).optional(), where: ChangesTrackingWhereInputObjectSchema.optional(), cursor: ChangesTrackingWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ChangesTrackingScalarFieldEnumSchema, ChangesTrackingScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ChangesTrackingFindFirstOrThrowArgs>;

export const ChangesTrackingFindFirstOrThrowZodSchema = z.object({ select: ChangesTrackingFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => ChangesTrackingIncludeObjectSchema.optional()), orderBy: z.union([ChangesTrackingOrderByWithRelationInputObjectSchema, ChangesTrackingOrderByWithRelationInputObjectSchema.array()]).optional(), where: ChangesTrackingWhereInputObjectSchema.optional(), cursor: ChangesTrackingWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ChangesTrackingScalarFieldEnumSchema, ChangesTrackingScalarFieldEnumSchema.array()]).optional() }).strict();