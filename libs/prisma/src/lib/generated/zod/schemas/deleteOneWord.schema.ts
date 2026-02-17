import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { WordSelectObjectSchema as WordSelectObjectSchema } from './objects/WordSelect.schema';
import { WordIncludeObjectSchema as WordIncludeObjectSchema } from './objects/WordInclude.schema';
import { WordWhereUniqueInputObjectSchema as WordWhereUniqueInputObjectSchema } from './objects/WordWhereUniqueInput.schema';

export const WordDeleteOneSchema: z.ZodType<Prisma.WordDeleteArgs> = z.object({ select: WordSelectObjectSchema.optional(), include: WordIncludeObjectSchema.optional(), where: WordWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.WordDeleteArgs>;

export const WordDeleteOneZodSchema = z.object({ select: WordSelectObjectSchema.optional(), include: WordIncludeObjectSchema.optional(), where: WordWhereUniqueInputObjectSchema }).strict();