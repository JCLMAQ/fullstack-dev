import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { LanguageCreateManyInputObjectSchema as LanguageCreateManyInputObjectSchema } from './objects/LanguageCreateManyInput.schema';

export const LanguageCreateManySchema: z.ZodType<Prisma.LanguageCreateManyArgs> = z.object({ data: z.union([ LanguageCreateManyInputObjectSchema, z.array(LanguageCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.LanguageCreateManyArgs>;

export const LanguageCreateManyZodSchema = z.object({ data: z.union([ LanguageCreateManyInputObjectSchema, z.array(LanguageCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();