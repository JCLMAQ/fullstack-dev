import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ConfigParamOrderByWithRelationInputObjectSchema as ConfigParamOrderByWithRelationInputObjectSchema } from './objects/ConfigParamOrderByWithRelationInput.schema';
import { ConfigParamWhereInputObjectSchema as ConfigParamWhereInputObjectSchema } from './objects/ConfigParamWhereInput.schema';
import { ConfigParamWhereUniqueInputObjectSchema as ConfigParamWhereUniqueInputObjectSchema } from './objects/ConfigParamWhereUniqueInput.schema';
import { ConfigParamScalarFieldEnumSchema } from './enums/ConfigParamScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ConfigParamFindFirstSelectSchema: z.ZodType<Prisma.ConfigParamSelect> = z.object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    published: z.boolean().optional(),
    isPublic: z.boolean().optional(),
    isDeleted: z.boolean().optional(),
    isDeletedDT: z.boolean().optional(),
    name: z.boolean().optional(),
    value: z.boolean().optional(),
    utility: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ConfigParamSelect>;

export const ConfigParamFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    published: z.boolean().optional(),
    isPublic: z.boolean().optional(),
    isDeleted: z.boolean().optional(),
    isDeletedDT: z.boolean().optional(),
    name: z.boolean().optional(),
    value: z.boolean().optional(),
    utility: z.boolean().optional()
  }).strict();

export const ConfigParamFindFirstSchema: z.ZodType<Prisma.ConfigParamFindFirstArgs> = z.object({ select: ConfigParamFindFirstSelectSchema.optional(),  orderBy: z.union([ConfigParamOrderByWithRelationInputObjectSchema, ConfigParamOrderByWithRelationInputObjectSchema.array()]).optional(), where: ConfigParamWhereInputObjectSchema.optional(), cursor: ConfigParamWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ConfigParamScalarFieldEnumSchema, ConfigParamScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ConfigParamFindFirstArgs>;

export const ConfigParamFindFirstZodSchema = z.object({ select: ConfigParamFindFirstSelectSchema.optional(),  orderBy: z.union([ConfigParamOrderByWithRelationInputObjectSchema, ConfigParamOrderByWithRelationInputObjectSchema.array()]).optional(), where: ConfigParamWhereInputObjectSchema.optional(), cursor: ConfigParamWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ConfigParamScalarFieldEnumSchema, ConfigParamScalarFieldEnumSchema.array()]).optional() }).strict();