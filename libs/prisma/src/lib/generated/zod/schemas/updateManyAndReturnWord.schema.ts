import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { WordSelectObjectSchema as WordSelectObjectSchema } from './objects/WordSelect.schema';
import { WordUpdateManyMutationInputObjectSchema as WordUpdateManyMutationInputObjectSchema } from './objects/WordUpdateManyMutationInput.schema';
import { WordWhereInputObjectSchema as WordWhereInputObjectSchema } from './objects/WordWhereInput.schema';

export const WordUpdateManyAndReturnSchema: z.ZodType<Prisma.WordUpdateManyAndReturnArgs> = z.object({ select: WordSelectObjectSchema.optional(), data: WordUpdateManyMutationInputObjectSchema, where: WordWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.WordUpdateManyAndReturnArgs>;

export const WordUpdateManyAndReturnZodSchema = z.object({ select: WordSelectObjectSchema.optional(), data: WordUpdateManyMutationInputObjectSchema, where: WordWhereInputObjectSchema.optional() }).strict();