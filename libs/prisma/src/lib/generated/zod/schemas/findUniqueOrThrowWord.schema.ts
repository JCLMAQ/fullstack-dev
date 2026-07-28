import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { WordSelectObjectSchema as WordSelectObjectSchema } from './objects/WordSelect.schema';
import { WordIncludeObjectSchema as WordIncludeObjectSchema } from './objects/WordInclude.schema';
import { WordWhereUniqueInputObjectSchema as WordWhereUniqueInputObjectSchema } from './objects/WordWhereUniqueInput.schema';

export const WordFindUniqueOrThrowSchema: z.ZodType<Prisma.WordFindUniqueOrThrowArgs> = z.object({ select: WordSelectObjectSchema.optional(), include: WordIncludeObjectSchema.optional(), where: WordWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.WordFindUniqueOrThrowArgs>;

export const WordFindUniqueOrThrowZodSchema = z.object({ select: WordSelectObjectSchema.optional(), include: WordIncludeObjectSchema.optional(), where: WordWhereUniqueInputObjectSchema }).strict();