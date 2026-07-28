import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { TagValueSelectObjectSchema as TagValueSelectObjectSchema } from './objects/TagValueSelect.schema';
import { TagValueIncludeObjectSchema as TagValueIncludeObjectSchema } from './objects/TagValueInclude.schema';
import { TagValueUpdateInputObjectSchema as TagValueUpdateInputObjectSchema } from './objects/TagValueUpdateInput.schema';
import { TagValueUncheckedUpdateInputObjectSchema as TagValueUncheckedUpdateInputObjectSchema } from './objects/TagValueUncheckedUpdateInput.schema';
import { TagValueWhereUniqueInputObjectSchema as TagValueWhereUniqueInputObjectSchema } from './objects/TagValueWhereUniqueInput.schema';

export const TagValueUpdateOneSchema: z.ZodType<Prisma.TagValueUpdateArgs> = z.object({ select: TagValueSelectObjectSchema.optional(), include: TagValueIncludeObjectSchema.optional(), data: z.union([TagValueUpdateInputObjectSchema, TagValueUncheckedUpdateInputObjectSchema]), where: TagValueWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TagValueUpdateArgs>;

export const TagValueUpdateOneZodSchema = z.object({ select: TagValueSelectObjectSchema.optional(), include: TagValueIncludeObjectSchema.optional(), data: z.union([TagValueUpdateInputObjectSchema, TagValueUncheckedUpdateInputObjectSchema]), where: TagValueWhereUniqueInputObjectSchema }).strict();