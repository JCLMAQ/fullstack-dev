import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { TagValueSelectObjectSchema as TagValueSelectObjectSchema } from './objects/TagValueSelect.schema';
import { TagValueCreateManyInputObjectSchema as TagValueCreateManyInputObjectSchema } from './objects/TagValueCreateManyInput.schema';

export const TagValueCreateManyAndReturnSchema: z.ZodType<Prisma.TagValueCreateManyAndReturnArgs> = z.object({ select: TagValueSelectObjectSchema.optional(), data: z.union([ TagValueCreateManyInputObjectSchema, z.array(TagValueCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.TagValueCreateManyAndReturnArgs>;

export const TagValueCreateManyAndReturnZodSchema = z.object({ select: TagValueSelectObjectSchema.optional(), data: z.union([ TagValueCreateManyInputObjectSchema, z.array(TagValueCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();