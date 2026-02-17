import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { TagValueSelectObjectSchema as TagValueSelectObjectSchema } from './objects/TagValueSelect.schema';
import { TagValueIncludeObjectSchema as TagValueIncludeObjectSchema } from './objects/TagValueInclude.schema';
import { TagValueWhereUniqueInputObjectSchema as TagValueWhereUniqueInputObjectSchema } from './objects/TagValueWhereUniqueInput.schema';
import { TagValueCreateInputObjectSchema as TagValueCreateInputObjectSchema } from './objects/TagValueCreateInput.schema';
import { TagValueUncheckedCreateInputObjectSchema as TagValueUncheckedCreateInputObjectSchema } from './objects/TagValueUncheckedCreateInput.schema';
import { TagValueUpdateInputObjectSchema as TagValueUpdateInputObjectSchema } from './objects/TagValueUpdateInput.schema';
import { TagValueUncheckedUpdateInputObjectSchema as TagValueUncheckedUpdateInputObjectSchema } from './objects/TagValueUncheckedUpdateInput.schema';

export const TagValueUpsertOneSchema: z.ZodType<Prisma.TagValueUpsertArgs> = z.object({ select: TagValueSelectObjectSchema.optional(), include: TagValueIncludeObjectSchema.optional(), where: TagValueWhereUniqueInputObjectSchema, create: z.union([ TagValueCreateInputObjectSchema, TagValueUncheckedCreateInputObjectSchema ]), update: z.union([ TagValueUpdateInputObjectSchema, TagValueUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.TagValueUpsertArgs>;

export const TagValueUpsertOneZodSchema = z.object({ select: TagValueSelectObjectSchema.optional(), include: TagValueIncludeObjectSchema.optional(), where: TagValueWhereUniqueInputObjectSchema, create: z.union([ TagValueCreateInputObjectSchema, TagValueUncheckedCreateInputObjectSchema ]), update: z.union([ TagValueUpdateInputObjectSchema, TagValueUncheckedUpdateInputObjectSchema ]) }).strict();