import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { WordSelectObjectSchema as WordSelectObjectSchema } from './objects/WordSelect.schema';
import { WordIncludeObjectSchema as WordIncludeObjectSchema } from './objects/WordInclude.schema';
import { WordWhereUniqueInputObjectSchema as WordWhereUniqueInputObjectSchema } from './objects/WordWhereUniqueInput.schema';
import { WordCreateInputObjectSchema as WordCreateInputObjectSchema } from './objects/WordCreateInput.schema';
import { WordUncheckedCreateInputObjectSchema as WordUncheckedCreateInputObjectSchema } from './objects/WordUncheckedCreateInput.schema';
import { WordUpdateInputObjectSchema as WordUpdateInputObjectSchema } from './objects/WordUpdateInput.schema';
import { WordUncheckedUpdateInputObjectSchema as WordUncheckedUpdateInputObjectSchema } from './objects/WordUncheckedUpdateInput.schema';

export const WordUpsertOneSchema: z.ZodType<Prisma.WordUpsertArgs> = z.object({ select: WordSelectObjectSchema.optional(), include: WordIncludeObjectSchema.optional(), where: WordWhereUniqueInputObjectSchema, create: z.union([ WordCreateInputObjectSchema, WordUncheckedCreateInputObjectSchema ]), update: z.union([ WordUpdateInputObjectSchema, WordUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.WordUpsertArgs>;

export const WordUpsertOneZodSchema = z.object({ select: WordSelectObjectSchema.optional(), include: WordIncludeObjectSchema.optional(), where: WordWhereUniqueInputObjectSchema, create: z.union([ WordCreateInputObjectSchema, WordUncheckedCreateInputObjectSchema ]), update: z.union([ WordUpdateInputObjectSchema, WordUncheckedUpdateInputObjectSchema ]) }).strict();