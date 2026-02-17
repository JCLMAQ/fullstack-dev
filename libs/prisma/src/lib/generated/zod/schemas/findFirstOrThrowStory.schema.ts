import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { StoryIncludeObjectSchema as StoryIncludeObjectSchema } from './objects/StoryInclude.schema';
import { StoryOrderByWithRelationInputObjectSchema as StoryOrderByWithRelationInputObjectSchema } from './objects/StoryOrderByWithRelationInput.schema';
import { StoryWhereInputObjectSchema as StoryWhereInputObjectSchema } from './objects/StoryWhereInput.schema';
import { StoryWhereUniqueInputObjectSchema as StoryWhereUniqueInputObjectSchema } from './objects/StoryWhereUniqueInput.schema';
import { StoryScalarFieldEnumSchema } from './enums/StoryScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const StoryFindFirstOrThrowSelectSchema: z.ZodType<Prisma.StorySelect> = z.object({
    id: z.boolean().optional(),
    numSeq: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    published: z.boolean().optional(),
    isPublic: z.boolean().optional(),
    isDeleted: z.boolean().optional(),
    isDeletedDT: z.boolean().optional(),
    caption: z.boolean().optional(),
    user_id: z.boolean().optional(),
    user: z.boolean().optional(),
    Images: z.boolean().optional(),
    Files: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.StorySelect>;

export const StoryFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    numSeq: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    published: z.boolean().optional(),
    isPublic: z.boolean().optional(),
    isDeleted: z.boolean().optional(),
    isDeletedDT: z.boolean().optional(),
    caption: z.boolean().optional(),
    user_id: z.boolean().optional(),
    user: z.boolean().optional(),
    Images: z.boolean().optional(),
    Files: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const StoryFindFirstOrThrowSchema: z.ZodType<Prisma.StoryFindFirstOrThrowArgs> = z.object({ select: StoryFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => StoryIncludeObjectSchema.optional()), orderBy: z.union([StoryOrderByWithRelationInputObjectSchema, StoryOrderByWithRelationInputObjectSchema.array()]).optional(), where: StoryWhereInputObjectSchema.optional(), cursor: StoryWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([StoryScalarFieldEnumSchema, StoryScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.StoryFindFirstOrThrowArgs>;

export const StoryFindFirstOrThrowZodSchema = z.object({ select: StoryFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => StoryIncludeObjectSchema.optional()), orderBy: z.union([StoryOrderByWithRelationInputObjectSchema, StoryOrderByWithRelationInputObjectSchema.array()]).optional(), where: StoryWhereInputObjectSchema.optional(), cursor: StoryWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([StoryScalarFieldEnumSchema, StoryScalarFieldEnumSchema.array()]).optional() }).strict();