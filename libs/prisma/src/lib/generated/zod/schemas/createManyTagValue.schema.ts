import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { TagValueCreateManyInputObjectSchema as TagValueCreateManyInputObjectSchema } from './objects/TagValueCreateManyInput.schema';

export const TagValueCreateManySchema: z.ZodType<Prisma.TagValueCreateManyArgs> = z.object({ data: z.union([ TagValueCreateManyInputObjectSchema, z.array(TagValueCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.TagValueCreateManyArgs>;

export const TagValueCreateManyZodSchema = z.object({ data: z.union([ TagValueCreateManyInputObjectSchema, z.array(TagValueCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();