import type { Prisma } from '../../prisma/browser';
import * as z from 'zod';
import { WordSelectObjectSchema as WordSelectObjectSchema } from './objects/WordSelect.schema';
import { WordIncludeObjectSchema as WordIncludeObjectSchema } from './objects/WordInclude.schema';
import { WordUpdateInputObjectSchema as WordUpdateInputObjectSchema } from './objects/WordUpdateInput.schema';
import { WordUncheckedUpdateInputObjectSchema as WordUncheckedUpdateInputObjectSchema } from './objects/WordUncheckedUpdateInput.schema';
import { WordWhereUniqueInputObjectSchema as WordWhereUniqueInputObjectSchema } from './objects/WordWhereUniqueInput.schema';

export const WordUpdateOneSchema: z.ZodType<Prisma.WordUpdateArgs> = z.object({ select: WordSelectObjectSchema.optional(), include: WordIncludeObjectSchema.optional(), data: z.union([WordUpdateInputObjectSchema, WordUncheckedUpdateInputObjectSchema]), where: WordWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.WordUpdateArgs>;

export const WordUpdateOneZodSchema = z.object({ select: WordSelectObjectSchema.optional(), include: WordIncludeObjectSchema.optional(), data: z.union([WordUpdateInputObjectSchema, WordUncheckedUpdateInputObjectSchema]), where: WordWhereUniqueInputObjectSchema }).strict();