import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { LanguageSelectObjectSchema as LanguageSelectObjectSchema } from './objects/LanguageSelect.schema';
import { LanguageCreateManyInputObjectSchema as LanguageCreateManyInputObjectSchema } from './objects/LanguageCreateManyInput.schema';

export const LanguageCreateManyAndReturnSchema: z.ZodType<Prisma.LanguageCreateManyAndReturnArgs> = z.object({ select: LanguageSelectObjectSchema.optional(), data: z.union([ LanguageCreateManyInputObjectSchema, z.array(LanguageCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.LanguageCreateManyAndReturnArgs>;

export const LanguageCreateManyAndReturnZodSchema = z.object({ select: LanguageSelectObjectSchema.optional(), data: z.union([ LanguageCreateManyInputObjectSchema, z.array(LanguageCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();