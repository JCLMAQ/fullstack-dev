import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { WordSelectObjectSchema as WordSelectObjectSchema } from './objects/WordSelect.schema';
import { WordIncludeObjectSchema as WordIncludeObjectSchema } from './objects/WordInclude.schema';
import { WordCreateInputObjectSchema as WordCreateInputObjectSchema } from './objects/WordCreateInput.schema';
import { WordUncheckedCreateInputObjectSchema as WordUncheckedCreateInputObjectSchema } from './objects/WordUncheckedCreateInput.schema';

export const WordCreateOneSchema: z.ZodType<Prisma.WordCreateArgs> = z.object({ select: WordSelectObjectSchema.optional(), include: WordIncludeObjectSchema.optional(), data: z.union([WordCreateInputObjectSchema, WordUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.WordCreateArgs>;

export const WordCreateOneZodSchema = z.object({ select: WordSelectObjectSchema.optional(), include: WordIncludeObjectSchema.optional(), data: z.union([WordCreateInputObjectSchema, WordUncheckedCreateInputObjectSchema]) }).strict();