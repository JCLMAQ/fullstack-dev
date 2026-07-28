import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { TranslationSelectObjectSchema as TranslationSelectObjectSchema } from './objects/TranslationSelect.schema';
import { TranslationCreateManyInputObjectSchema as TranslationCreateManyInputObjectSchema } from './objects/TranslationCreateManyInput.schema';

export const TranslationCreateManyAndReturnSchema: z.ZodType<Prisma.TranslationCreateManyAndReturnArgs> = z.object({ select: TranslationSelectObjectSchema.optional(), data: z.union([ TranslationCreateManyInputObjectSchema, z.array(TranslationCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.TranslationCreateManyAndReturnArgs>;

export const TranslationCreateManyAndReturnZodSchema = z.object({ select: TranslationSelectObjectSchema.optional(), data: z.union([ TranslationCreateManyInputObjectSchema, z.array(TranslationCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();