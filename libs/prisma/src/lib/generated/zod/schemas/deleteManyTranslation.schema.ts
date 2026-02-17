import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { TranslationWhereInputObjectSchema as TranslationWhereInputObjectSchema } from './objects/TranslationWhereInput.schema';

export const TranslationDeleteManySchema: z.ZodType<Prisma.TranslationDeleteManyArgs> = z.object({ where: TranslationWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TranslationDeleteManyArgs>;

export const TranslationDeleteManyZodSchema = z.object({ where: TranslationWhereInputObjectSchema.optional() }).strict();