import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { LanguageWhereInputObjectSchema as LanguageWhereInputObjectSchema } from './objects/LanguageWhereInput.schema';

export const LanguageDeleteManySchema: z.ZodType<Prisma.LanguageDeleteManyArgs> = z.object({ where: LanguageWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.LanguageDeleteManyArgs>;

export const LanguageDeleteManyZodSchema = z.object({ where: LanguageWhereInputObjectSchema.optional() }).strict();