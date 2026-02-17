import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { TranslationCreateManyInputObjectSchema as TranslationCreateManyInputObjectSchema } from './objects/TranslationCreateManyInput.schema';

export const TranslationCreateManySchema: z.ZodType<Prisma.TranslationCreateManyArgs> = z.object({ data: z.union([ TranslationCreateManyInputObjectSchema, z.array(TranslationCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.TranslationCreateManyArgs>;

export const TranslationCreateManyZodSchema = z.object({ data: z.union([ TranslationCreateManyInputObjectSchema, z.array(TranslationCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();