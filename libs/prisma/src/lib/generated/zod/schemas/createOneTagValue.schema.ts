import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { TagValueSelectObjectSchema as TagValueSelectObjectSchema } from './objects/TagValueSelect.schema';
import { TagValueIncludeObjectSchema as TagValueIncludeObjectSchema } from './objects/TagValueInclude.schema';
import { TagValueCreateInputObjectSchema as TagValueCreateInputObjectSchema } from './objects/TagValueCreateInput.schema';
import { TagValueUncheckedCreateInputObjectSchema as TagValueUncheckedCreateInputObjectSchema } from './objects/TagValueUncheckedCreateInput.schema';

export const TagValueCreateOneSchema: z.ZodType<Prisma.TagValueCreateArgs> = z.object({ select: TagValueSelectObjectSchema.optional(), include: TagValueIncludeObjectSchema.optional(), data: z.union([TagValueCreateInputObjectSchema, TagValueUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.TagValueCreateArgs>;

export const TagValueCreateOneZodSchema = z.object({ select: TagValueSelectObjectSchema.optional(), include: TagValueIncludeObjectSchema.optional(), data: z.union([TagValueCreateInputObjectSchema, TagValueUncheckedCreateInputObjectSchema]) }).strict();