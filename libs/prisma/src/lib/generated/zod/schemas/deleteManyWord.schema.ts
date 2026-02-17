import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { WordWhereInputObjectSchema as WordWhereInputObjectSchema } from './objects/WordWhereInput.schema';

export const WordDeleteManySchema: z.ZodType<Prisma.WordDeleteManyArgs> = z.object({ where: WordWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.WordDeleteManyArgs>;

export const WordDeleteManyZodSchema = z.object({ where: WordWhereInputObjectSchema.optional() }).strict();