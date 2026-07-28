import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { StoryIncludeObjectSchema as StoryIncludeObjectSchema } from './objects/StoryInclude.schema';
import { StoryOrderByWithRelationInputObjectSchema as StoryOrderByWithRelationInputObjectSchema } from './objects/StoryOrderByWithRelationInput.schema';
import { StoryWhereInputObjectSchema as StoryWhereInputObjectSchema } from './objects/StoryWhereInput.schema';
import { StoryWhereUniqueInputObjectSchema as StoryWhereUniqueInputObjectSchema } from './objects/StoryWhereUniqueInput.schema';
import { StoryScalarFieldEnumSchema } from './enums/StoryScalarFieldEnum.schema';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './objects/UserArgs.schema';
import { ImageFindManySchema } from './findManyImage.schema';
import { FileFindManySchema } from './findManyFile.schema';
import { StoryCountOutputTypeArgsObjectSchema as StoryCountOutputTypeArgsObjectSchema } from './objects/StoryCountOutputTypeArgs.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const StoryFindFirstSelectSchema: z.ZodType<Prisma.StorySelect> = z.object({
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
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    Images: z.union([z.boolean(), z.lazy(() => ImageFindManySchema)]).optional(),
    Files: z.union([z.boolean(), z.lazy(() => FileFindManySchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => StoryCountOutputTypeArgsObjectSchema)]).optional()
  }).strict() as unknown as z.ZodType<Prisma.StorySelect>;

export const StoryFindFirstSelectZodSchema = z.object({
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
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    Images: z.union([z.boolean(), z.lazy(() => ImageFindManySchema)]).optional(),
    Files: z.union([z.boolean(), z.lazy(() => FileFindManySchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => StoryCountOutputTypeArgsObjectSchema)]).optional()
  }).strict();

export const StoryFindFirstSchema: z.ZodType<Prisma.StoryFindFirstArgs> = z.object({ select: StoryFindFirstSelectSchema.optional(), include: z.lazy(() => StoryIncludeObjectSchema.optional()), orderBy: z.union([StoryOrderByWithRelationInputObjectSchema, StoryOrderByWithRelationInputObjectSchema.array()]).optional(), where: StoryWhereInputObjectSchema.optional(), cursor: StoryWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([StoryScalarFieldEnumSchema, StoryScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.StoryFindFirstArgs>;

export const StoryFindFirstZodSchema = z.object({ select: StoryFindFirstSelectSchema.optional(), include: z.lazy(() => StoryIncludeObjectSchema.optional()), orderBy: z.union([StoryOrderByWithRelationInputObjectSchema, StoryOrderByWithRelationInputObjectSchema.array()]).optional(), where: StoryWhereInputObjectSchema.optional(), cursor: StoryWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([StoryScalarFieldEnumSchema, StoryScalarFieldEnumSchema.array()]).optional() }).strict();