import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ChangesTrackingIncludeObjectSchema as ChangesTrackingIncludeObjectSchema } from './objects/ChangesTrackingInclude.schema';
import { ChangesTrackingOrderByWithRelationInputObjectSchema as ChangesTrackingOrderByWithRelationInputObjectSchema } from './objects/ChangesTrackingOrderByWithRelationInput.schema';
import { ChangesTrackingWhereInputObjectSchema as ChangesTrackingWhereInputObjectSchema } from './objects/ChangesTrackingWhereInput.schema';
import { ChangesTrackingWhereUniqueInputObjectSchema as ChangesTrackingWhereUniqueInputObjectSchema } from './objects/ChangesTrackingWhereUniqueInput.schema';
import { ChangesTrackingScalarFieldEnumSchema } from './enums/ChangesTrackingScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ChangesTrackingFindManySelectSchema: z.ZodType<Prisma.ChangesTrackingSelect> = z.object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    published: z.boolean().optional(),
    isPublic: z.boolean().optional(),
    isDeleted: z.boolean().optional(),
    isDeletedDT: z.boolean().optional(),
    doneAt: z.boolean().optional(),
    modifiedBy: z.boolean().optional(),
    modifiedById: z.boolean().optional(),
    modelName: z.boolean().optional(),
    recordId: z.boolean().optional(),
    operation: z.boolean().optional(),
    newData: z.boolean().optional(),
    oldData: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ChangesTrackingSelect>;

export const ChangesTrackingFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    published: z.boolean().optional(),
    isPublic: z.boolean().optional(),
    isDeleted: z.boolean().optional(),
    isDeletedDT: z.boolean().optional(),
    doneAt: z.boolean().optional(),
    modifiedBy: z.boolean().optional(),
    modifiedById: z.boolean().optional(),
    modelName: z.boolean().optional(),
    recordId: z.boolean().optional(),
    operation: z.boolean().optional(),
    newData: z.boolean().optional(),
    oldData: z.boolean().optional()
  }).strict();

export const ChangesTrackingFindManySchema: z.ZodType<Prisma.ChangesTrackingFindManyArgs> = z.object({ select: ChangesTrackingFindManySelectSchema.optional(), include: z.lazy(() => ChangesTrackingIncludeObjectSchema.optional()), orderBy: z.union([ChangesTrackingOrderByWithRelationInputObjectSchema, ChangesTrackingOrderByWithRelationInputObjectSchema.array()]).optional(), where: ChangesTrackingWhereInputObjectSchema.optional(), cursor: ChangesTrackingWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ChangesTrackingScalarFieldEnumSchema, ChangesTrackingScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ChangesTrackingFindManyArgs>;

export const ChangesTrackingFindManyZodSchema = z.object({ select: ChangesTrackingFindManySelectSchema.optional(), include: z.lazy(() => ChangesTrackingIncludeObjectSchema.optional()), orderBy: z.union([ChangesTrackingOrderByWithRelationInputObjectSchema, ChangesTrackingOrderByWithRelationInputObjectSchema.array()]).optional(), where: ChangesTrackingWhereInputObjectSchema.optional(), cursor: ChangesTrackingWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ChangesTrackingScalarFieldEnumSchema, ChangesTrackingScalarFieldEnumSchema.array()]).optional() }).strict();